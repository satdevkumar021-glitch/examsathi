import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { generateMCQsFromNotes } from '@/lib/ai_gateway';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { content, count = 5, examTarget = 'Punjab Master Cadre SST' } = body;

    if (!content || typeof content !== 'string' || content.trim().length < 50) {
      return NextResponse.json({
        success: false,
        message: 'Content must be at least 50 characters of study notes or syllabus text.',
      }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey && !apiKey.startsWith('your-')) {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are a senior exam paper setter for Indian competitive examinations (${examTarget}).
Analyze this text containing study notes:
"""${content}"""

Generate exactly ${count} high-yield multiple choice questions (MCQs) in valid JSON array format.

JSON Schema format:
[
  {
    "id": "gemini-q-1",
    "topicId": "custom-notes",
    "subjectId": "general",
    "examTag": "${examTarget}",
    "question": {
      "hi": "Question in Hindi (Devanagari)",
      "pa": "Question in Punjabi (Gurmukhi)",
      "en": "Question in English"
    },
    "options": {
      "A": { "hi": "...", "pa": "...", "en": "..." },
      "B": { "hi": "...", "pa": "...", "en": "..." },
      "C": { "hi": "...", "pa": "...", "en": "..." },
      "D": { "hi": "...", "pa": "...", "en": "..." }
    },
    "correct": "A",
    "explanation": {
      "hi": "Detailed conceptual explanation in Hindi based on the notes",
      "pa": "Detailed explanation in Punjabi",
      "en": "Detailed explanation in English"
    },
    "thought": {
      "hi": "Examiner insight and distractor elimination trap",
      "pa": "...",
      "en": "..."
    },
    "difficulty": "medium",
    "year": 2024
  }
]
Only return raw valid JSON, no markdown codeblocks, no extra conversational text.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      const responseText = response.text || '';
      const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleanJson);

      return NextResponse.json({
        success: true,
        source: 'gemini_api',
        questions: parsed,
      });
    }

    // Procedural fallback generator when API key is unconfigured
    const fallback = await generateMCQsFromNotes(content, count);
    return NextResponse.json(fallback);
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: 'Generation failed: ' + err.message,
    }, { status: 500 });
  }
}
