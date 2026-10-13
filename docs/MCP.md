# ExamSathi MCP Server

A local [Model Context Protocol (MCP)](https://modelcontextprotocol.io) server that lets an AI assistant explore the ExamSathi exam catalog, browse questions without answers, check question quality statistics, and draft new questions into the editorial pipeline — all without touching a browser.

---

## Tools

| Tool | Auth required | Description |
|------|:---:|-----------|
| `list_exams` | no | Every exam: name, body, default length, negative marking, topic count |
| `list_topics` | no | Syllabus topics of one exam, grouped by subject |
| `search_questions` | no | Draw up to 20 practice questions for a topic/exam (no answers or explanations) |
| `count_questions` | no | Questions per topic for an exam, sorted thinnest first |
| `get_quality_report` | reviewer+ | Statistical item analysis: suspect keys, too-hard/easy, discrimination (aggregate only) |
| `draft_question` | educator+ | Save a new MCQ as a draft or submit it for review — never publishes directly |

`search_questions` returns exactly what a student sees: question text and options. `correct`, `explanation`, `distractorExplanations` and `deepConceptNote` are **never returned**. The server enforces this independently; the MCP layer simply does not request them.

`draft_question` can only produce a `draft` or `review` item. There is no `publish` tool. A separate reviewer with a different account must approve the question before any student ever sees it.

---

## Quick start

### 1. Prerequisites

- Node.js ≥ 20
- A running ExamSathi instance (your deployment URL, or `http://localhost:3000` after `npm run dev`)

### 2. Install dependencies

```bash
cd mcp-server
npm install
```

Dependencies are minimal: `@modelcontextprotocol/server` and `zod`.

### 3. Environment variables

| Variable | Required | Description |
|----------|:--------:|-------------|
| `EXAMSATHI_API_URL` | **yes** | Base URL of the ExamSathi deployment, e.g. `https://your-deployment.example` |
| `EXAMSATHI_STAFF_TOKEN` | only for `get_quality_report` and `draft_question` | A Supabase access token for a staff account (role: `educator`, `reviewer`, or `superadmin`) |

`EXAMSATHI_API_URL` **must be https** unless the hostname is `localhost` / `127.0.0.1` / `::1`. The server refuses to start otherwise so that a token can never be sent over plain HTTP to a remote host.

### 4. Register in Bob

This repo ships a project config at [`.bob/mcp.json`](../.bob/mcp.json) (pointing at `http://localhost:3000`, no token, read-only tools auto-approved). To use it elsewhere, or to add a staff token, put an entry like this in `~/.bob/mcp.json` (global) or `.bob/mcp.json` (project):

```json
{
  "mcpServers": {
    "examsathi": {
      "command": "node",
      "args": ["mcp-server/src/index.mjs"],
      "env": {
        "EXAMSATHI_API_URL": "http://localhost:3000"
      },
      "alwaysAllow": ["list_exams", "list_topics", "search_questions", "count_questions"]
    }
  }
}
```

`draft_question` and `get_quality_report` are deliberately **not** in `alwaysAllow`, so Bob asks before each call. Keep the staff token in your global `~/.bob/mcp.json`, never in a committed file.

### 5. Smoke-test without Bob

```bash
EXAMSATHI_API_URL=https://your-deployment.example \
  node mcp-server/src/index.mjs
```

Send it a JSON-RPC message over stdin:
```json
{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"cli","version":"0"}}}
```

---

## Development

```bash
cd mcp-server
npm test       # 12 unit and stdio integration tests (no external network required)
```

Tests use a fake `fetch` and a real in-process HTTP server; they run offline in ~400 ms.

---

## Security notes

- No ExamSathi secret (Supabase service key, `CRON_SECRET`, etc.) is ever sent from this server.
- The staff token is only forwarded on the two tools that explicitly require it (`get_quality_report`, `draft_question`). All other tool HTTP calls are made without an `Authorization` header.
- The server never reads or stores tokens, answers, or any learner PII. It is a thin proxy over the public and staff-gated API routes that already exist.
- The quality report is aggregate only: no learner id, no per-learner answers, just item statistics.
