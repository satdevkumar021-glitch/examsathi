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
