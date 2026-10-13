# ExamSathi (परीक्षा साथी) — Typed REST & RPC API Specification

**Document Version:** 1.0.0  
**Base URL:** `/api/v1`  
**Protocol:** HTTPS / JSON over HTTP/2  
**Authentication:** Bearer JWT (Supabase Auth)  
**Rate Limiting:** Enforced via Edge Token Buckets (IP & User-ID)

---

## 1. Authentication & Session Endpoints

### `POST /api/v1/auth/guest-migrate`
Migrates an active guest session's local test attempts and bookmarks into a newly registered account.
- **Headers:** `Authorization: Bearer <jwt>`
- **Request Body:**
```json
{
  "guestSessionId": "string",
  "localAttemptIds": ["uuid"],
  "bookmarkedQuestionIds": ["uuid"],
  "studySeconds": 3600
}
```
- **Response `200 OK`:**
```json
{
  "success": true,
  "migratedAttemptsCount": 2,
  "migratedBookmarksCount": 5
}
```

---

## 2. Examination Catalog & Syllabus

### `GET /api/v1/exams`
Returns active state jurisdictions, exam bodies, and competitive exam tracks.
- **Query Params:** `state` (optional: `punjab` | `rajasthan` | `haryana` | `delhi` | `central`), `lang` (`hi` | `pa` | `en`)
- **Response `200 OK`:**
```json
[
  {
    "id": "uuid",
    "slug": "master-cadre-sst",
    "title": "Punjab Master Cadre (Social Studies)",
    "body": "Education Recruitment Board, Punjab",
    "badge": "🌾 ERB Punjab",
    "totalPapers": 1,
    "papers": [
      {
        "id": "uuid",
        "code": "PAPER_SST_150",
        "totalQuestions": 150,
        "durationMinutes": 150,
        "negativeMarking": 0.0
      }
    ]
  }
]
```

### `GET /api/v1/syllabus/:examSlug`
Fetches the complete recursive syllabus tree (Subject → Unit → Topic → Subtopic) with weightage and lesson links.
- **Response `200 OK`:**
```json
{
  "examSlug": "master-cadre-sst",
  "syllabusTree": [
    {
      "id": "uuid",
      "nodeType": "subject",
      "slug": "history",
      "title": { "en": "History", "hi": "इतिहास", "pa": "ਇਤਿਹਾਸ" },
      "units": [
        {
          "id": "uuid",
          "slug": "punjab-history",
          "title": { "en": "Punjab History", "hi": "पंजाब का इतिहास", "pa": "ਪੰਜਾਬ ਦਾ ਇਤਿਹਾਸ" },
          "topics": [
            {
              "id": "uuid",
              "slug": "sst-punjab-sikh",
              "title": { "en": "Ten Sikh Gurus & Khalsa", "hi": "10 सिख गुरु और खालसा", "pa": "10 ਸਿੱਖ ਗੁਰੂ ਅਤੇ ਖਾਲਸਾ" },
              "lessonId": "uuid",
              "questionCount": 120
            }
          ]
        }
      ]
    }
  ]
}
```

---

## 3. Server-Authoritative CBT Mock Test Engine

### `POST /api/v1/mock/start`
Initializes a new mock test attempt and returns sanitized questions **without** answer keys or explanations.
- **Headers:** `Authorization: Bearer <jwt>` (or Guest Token)
- **Request Body:**
```json
{
  "examId": "uuid",
  "topicId": "uuid | null",
  "difficulty": "all | easy | medium | hard",
  "count": 50,
  "pyqOnly": false
}
```
- **Response `201 Created`:**
```json
{
  "attemptId": "uuid",
  "durationSeconds": 2700,
  "negativeMarking": 0.25,
  "questions": [
    {
      "id": "uuid",
      "stem": {
        "hi": "हड़प्पा सभ्यता का सबसे बड़ा भारतीय स्थल कौन सा है?",
        "pa": "ਹੜੱਪਾ ਸਭਿਅਤਾ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਭਾਰਤੀ ਸਥਾਨ ਕਿਹੜਾ ਹੈ?",
        "en": "Which is the largest Indian site of the Harappan civilization?"
      },
      "options": {
        "A": { "hi": "राखीगढ़ी", "pa": "ਰਾਖੀਗੜ੍ਹੀ", "en": "Rakhigarhi" },
        "B": { "hi": "धौलावीरा", "pa": "ਧੌਲਾਵੀਰਾ", "en": "Dholavira" },
        "C": { "hi": "लोथल", "pa": "ਲੋਥਲ", "en": "Lothal" },
        "D": { "hi": "कालीबंगा", "pa": "ਕਾਲੀਬੰਗਾ", "en": "Kalibangan" }
      },
      "difficulty": "medium",
      "examTag": "Punjab Master Cadre (2020)"
    }
  ]
}
```
*(Notice: `correct_option` and `explanation` are strictly withheld)*

### `PUT /api/v1/mock/autosave`
Persists candidate progress in real time (called every 30s or on option select).
- **Request Body:**
```json
{
  "attemptId": "uuid",
  "secondsRemaining": 2450,
  "answers": {
    "question-uuid-1": "A",
    "question-uuid-2": "C"
  },
  "reviewFlags": {
    "question-uuid-2": true
  }
}
```

### `POST /api/v1/mock/submit`
Authoritatively evaluates the attempt, computes raw score, negative marking deductions, accuracy, percentile, and releases solutions.
- **Request Body:**
```json
{
  "attemptId": "uuid",
  "answers": {
    "question-uuid-1": "A",
    "question-uuid-2": "B"
  },
  "timeTakenSeconds": 1820
}
```
- **Response `200 OK`:**
```json
{
  "attemptId": "uuid",
  "scoreSummary": {
    "totalQuestions": 50,
    "correctCount": 42,
    "wrongCount": 6,
    "unattemptedCount": 2,
    "negativeDeduction": 1.50,
    "rawScore": 40.50,
    "percentage": 81.0,
    "accuracy": 87.5
  },
  "cohortAnalytics": {
    "totalCohortParticipants": 450,
    "stateRank": 28,
    "percentile": 93.8,
    "status": "cohort_available"
  },
  "detailedSolutions": [
    {
      "questionId": "question-uuid-1",
      "userSelected": "A",
      "correctOption": "A",
      "isCorrect": true,
      "explanation": {
        "hi": "राखीगढ़ी (हरियाणा के हिसार जिले में) हड़प्पा सभ्यता का सबसे बड़ा भारतीय स्थल है।",
        "pa": "ਰਾਖੀਗੜ੍ਹੀ ਭਾਰਤ ਵਿੱਚ ਹੜੱਪਾ ਸਭਿਅਤਾ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਖੇਤਰ ਹੈ।",
        "en": "Rakhigarhi in Hisar district, Haryana is the largest Indus Valley site in India."
      },
      "examinerTrap": "कई छात्र धौलावीरा चुनते हैं क्योंकि यह यूनेस्को धरोहर है, लेकिन क्षेत्रफल में राखीगढ़ी सबसे बड़ा है।"
    }
  ]
}
```

---

## 4. Flashcards & FSRS Spaced Repetition

### `GET /api/v1/flashcards/due`
Returns flashcards due for review today based on the FSRS scheduling formula.
- **Query Params:** `examId`, `limit` (default: 20)
- **Response `200 OK`:** Array of flashcard objects with front, back, and current interval.

### `POST /api/v1/flashcards/review`
Submits user recall rating and recalculates card stability and next due date.
- **Request Body:**
```json
{
  "cardId": "uuid",
  "rating": "again | hard | good | easy",
  "timeSpentSeconds": 8
}
```
- **Response `200 OK`:**
```json
{
  "cardId": "uuid",
  "newStability": 2.45,
  "newDifficulty": 4.12,
  "nextDueDate": "2026-10-10T19:00:00Z"
}
```

---

## 5. Server-Side AI Gateway: PDF-to-MCQ

### `POST /api/v1/ai/generate-mcq`
Extracts text from an uploaded private PDF notes document, runs semantic deduplication, and generates an official-pattern MCQ set with explanations.
- **Headers:** `Authorization: Bearer <jwt>`
- **Request (Multipart Form Data):**
  - `file`: PDF document (max 15MB)
  - `requestedCount`: 20 | 30 | 50
  - `targetExam`: `uuid`
  - `language`: `hi` | `pa` | `en`
- **Response `202 Accepted`:**
```json
{
  "jobId": "job-uuid",
  "status": "processing",
  "estimatedSeconds": 8
}
```

---

## 6. Daily GK & Thought of the Day

### `GET /api/v1/daily`
Returns trilingual inspirational quote, historical events for today's date, and the daily mini-quiz.
- **Response `200 OK`:**
```json
{
  "date": "2026-10-06",
  "thought": {
    "hi": "कठिन परिश्रम का कोई विकल्प नहीं होता। सफलता निरंतर अभ्यास से ही मिलती है।",
    "pa": "ਸਖ਼ਤ ਮਿਹਨਤ ਦਾ ਕੋਈ ਬਦਲ ਨਹੀਂ। ਨਿਰੰਤਰ ਅਭਿਆਸ ਹੀ ਸਫ਼ਲਤਾ ਦੀ ਕੁੰਜੀ ਹੈ।",
    "en": "There is no substitute for hard work. Consistent practice is the cornerstone of success."
  },
  "historicalEvent": {
    "hi": "1927: भारतीय सिनेमा और समाज सुधार आंदोलन के प्रमुख घटनाक्रम।",
    "pa": "ਪੰਜਾਬੀ ਸਾਹਿਤ ਅਤੇ ਇਤਿਹਾਸ ਦੇ ਵਿਸ਼ੇਸ਼ ਦਿਹਾੜੇ।",
    "en": "Historical milestone in Indian educational and constitutional development."
  },
  "dailyMiniQuiz": {
    "questionId": "uuid",
    "stem": "..."
  }
}
```


---

## Question and attempt API (current)

Routes are `POST` unless stated, JSON, same origin, and rate-limited per IP. Successful responses have `success: true`; errors have `success: false, message`.

### `POST /api/questions/set`
Body: `{ topicId, examId?, difficulty?, pyq20Years?, pyqOnly?, count?, setNumber?, ordered?, isRevision?, isFresh?, excludeKeys? }`.
Returns `{ questions, effective, setNumber, totalSets, totalPoolCount, isRevisionMode, isRemainingSubset }`. Questions carry no `correct`, `explanation`, `thought`, `deepConceptNote` or `distractorExplanations`.

### `POST /api/questions/reveal`
Body: `{ ids: string[] }` (max 150). Returns `{ reveals: { [id]: { correct, explanation, thought?, ... } } }`. Each id costs one unit of an hourly per-IP budget so the bank cannot be bulk-exported.

### `POST /api/questions/count` / `manifest` / `lookup` / `daily`
Pool sizes per filter, per-topic pool sizes per exam, question text by id (no answers), and the deterministic daily question (no answer).

### `GET /api/catalog`
Public exam and syllabus catalog: `{ exams: [{ id, name, namePa, body, defaultQuestions, timeLimitMinutes, negativeMarking, syllabusSummary, topics: [{ id, name, namePa, subject }] }] }`. Built from the client-safe catalog, so it carries no questions or answers. Used by the MCP server ([MCP.md](MCP.md)).

### `POST /api/attempts`
Body: `{ attemptId (uuid), examId, testId, questionIds, answers, timeTakenSeconds }`. The client never sends a score. Returns `{ stored, score, topicBreakdown, reveals }`. Negative marking comes from the exam definition. Guests are scored but not stored; a valid `Authorization: Bearer <supabase access token>` also stores the attempt in `examsathi_attempts`. Answers for questions outside `questionIds`, or unknown ids, return 422.

### `GET /api/learner/profile?tz=<minutes east of UTC>`
Requires `Authorization: Bearer <supabase access token>` (401 without a valid session, 503 if the server has no service key). Returns
`{ insights: { attempts, questionsAnswered, accuracy, streak, practisedToday, weakTopics: [{ topicId, examId, total, correct, accuracy }] } }`,
derived only from the caller's own server-scored attempts, so it cannot be inflated from the browser and follows the learner across devices.
The streak counts consecutive practice days in the learner's timezone (`tz`, default IST +330; invalid values fall back to the default) and stays alive
until the day ends. A weak topic is under 60% accuracy over at least 5 questions in the last 30 days; the three lowest are returned. Weak topics need
migration `202610110003` (`topic_breakdown` on `examsathi_attempts`); without it the route still returns the streak and accuracy with an empty list.

### Reminders: `/api/push/*`
- `GET /api/push/key`: the public VAPID key (503 when reminders are not configured).
- `POST /api/push/subscribe` `{ subscription: { endpoint, keys: { p256dh, auth } }, tzOffsetMinutes?, lang? }`: Bearer token required. The endpoint must be https on a known push service (Google, Mozilla, Apple, Windows), which also prevents the sender being used to reach internal hosts. Re-registering a device is idempotent; an account can hold 10 devices (409 beyond that).
- `DELETE /api/push/subscribe` `{ endpoint }`: Bearer token required; removes only the caller's own device.
- `POST /api/push/send`: scheduler only. `Authorization: Bearer <CRON_SECRET>` (compared in constant time; an unset or short secret never matches). Returns `{ sent, skipped, removed }`. Idempotent per device per local day.

## Question quality API (reviewers and superadmins)
`GET /api/admin/quality`: Bearer token required; 401 without a session, 403 for educators (authors should not tune questions to the statistics). Reads the latest 5,000 stored attempts and returns
`{ attemptsAnalysed, minAnswers, report: { analysed, flagged, byFlag, items: [{ id, topicId, declaredDifficulty, key, n, pCorrect, discrimination, counts, upperCounts, flags }] } }`, worst first, capped at 100.
It is aggregate-only: no learner id and no per-learner answers are returned. Nothing is changed automatically; a reviewer decides.

| Flag | Meaning |
| :--- | :--- |
| `key-suspect` | Among the top 27% of learners (ranked by score on the *other* questions), another option beats the key by a z-score of 2.5 or more. The key or the wording is probably wrong. |
| `negative-discrimination` | Strong learners do at least 15 points worse than weak ones on this question. |
| `too-hard` | Under 15% answered correctly. |
| `difficulty-mismatch` | Labelled easy but under 35% correct, or labelled hard but over 85% correct. |
| `too-easy` | Over 97% correct. |

A question needs at least 30 answers to be flagged, and the upper and lower groups need at least 8 learners each for a discrimination figure. Measured on simulated cohorts (see `tests/question-quality.test.mjs`):

| Learners | Random-answer question called a bad key | Sound question called a bad key | Clearly wrong key caught | Wrong key caught when only the weaker learners know the right answer |
| :--- | :--- | :--- | :--- | :--- |
| 100 | 1.7% | 0% | 100% | 43% |
| 200 | 2.3% | 0% | 100% | 81% |
| 400 | 1.0% | 0% | 100% | 99.7% |

Treat a flag as "look at this", not as proof. With few answers a real problem can be missed, and about 1 in 50 noisy questions is flagged by chance.

## Admin content API (staff only)

`/api/admin/content` requires `Authorization: Bearer <supabase access token>`. The role is read from the verified user's `app_metadata.role` (`educator`, `reviewer` or `superadmin`); `user_metadata` and anything in the request body are never trusted. No token returns 401, a non-staff user returns 403.

- `GET` lists items. Educators see only their own; reviewers and superadmins see all.
- `POST { title, body, examId?, topicId? }` creates a `draft`.
- `PATCH { id, to }` moves an item between `draft`, `review`, `published` and `rejected`. A reviewer cannot approve their own item (four-eyes). Only a superadmin can publish directly from draft or unpublish. A concurrent change returns 409.
- `DELETE { id }` is superadmin only.

**Questions go live when published.** A `question` item must carry complete data, which the server validates on create:
`{ question: {en?, hi?, pa?}, options: {A,B,C,D: {en?, hi?, pa?}}, correct: 'A'|'B'|'C'|'D', explanation: {…}, difficulty?: 'easy'|'medium'|'hard', examTag? }`.
Every text needs English or Hindi; options must differ; a missing language falls back to the other. When an item becomes `published`
it joins the served bank under the id `cms-<item id>` (always namespaced, never colliding with built-in ids) and is served through
the same answer-protected `set` / `lookup` / `reveal` / `count` / `daily` / `attempts` routes. Moving it back to `draft`, or deleting it, removes it from new sets immediately on the instance that handled the change and on other instances within 60 seconds. A question that was served stays gradable for 24 hours so a learner mid-test is never failed by an edit. Lessons, videos and PDFs are recorded but not yet served.

`src/proxy.ts` redirects `/admin` to `/login/` when no Supabase session cookie exists. This is a convenience gate, not authorization; the API above is the enforcement point.
