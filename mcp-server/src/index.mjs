#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/server';
import { StdioServerTransport } from '@modelcontextprotocol/server/stdio';
import { ApiError, createClient } from './client.mjs';
import { buildTools } from './tools.mjs';

// stdout is the MCP channel. Log to stderr only.
const baseUrl = process.env.EXAMSATHI_API_URL;
if (!baseUrl) {
  console.error('EXAMSATHI_API_URL is required, for example https://examsathi.example.com (or http://localhost:3000).');
  process.exit(1);
}

let client;
try {
  client = createClient({ baseUrl, token: process.env.EXAMSATHI_STAFF_TOKEN });
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}

const server = new McpServer({ name: 'examsathi', version: '0.1.0' });

for (const tool of buildTools(client)) {
  server.registerTool(
    tool.name,
    { title: tool.title, description: tool.description, inputSchema: tool.inputSchema, annotations: tool.annotations },
    async args => {
      try {
        const data = await tool.handler(args);
        return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] };
      } catch (error) {
        const message = error instanceof ApiError || error instanceof Error ? error.message : 'Unexpected error.';
        return { isError: true, content: [{ type: 'text', text: message }] };
      }
    },
  );
}

await server.connect(new StdioServerTransport());
console.error(`examsathi-mcp ready (${baseUrl}, ${process.env.EXAMSATHI_STAFF_TOKEN ? 'staff token set' : 'public tools only'})`);
