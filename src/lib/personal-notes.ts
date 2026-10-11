import { studyStorage } from './storage';

// ============================================================
// ExamSathi - Personal Notes & Document Storage Engine
// Compliant with Master AI Specification Section 8:
// - Private notes attached to exact exam and topic
// - Draft autosave state & recoverable deletion (trash/restore)
// - Fast search, inline edit, and multi-format export (Markdown/JSON/TXT)
// - Strict privacy boundary: private uploads/notes remain private
//   Public contribution requires explicit rights confirmation & moderation
// ============================================================

export interface PersonalNote {
  id: string;
  examId: string;
  topicId: string;
  title: string;
  content: string;
  tags?: string[];
  sourceExcerpt?: string;
  createdAt: number;
  updatedAt: number;
  isDeleted?: boolean;
  deletedAt?: number;
  isPublic?: boolean;
  moderationStatus?: 'private' | 'pending-review' | 'approved' | 'rejected';
}

const STORAGE_NOTES_PREFIX = 'examsathi_pnotes_';
const DRAFT_PREFIX = 'examsathi_draft_';

function getScopedStorageKey(examId: string, topicId: string): string {
  const safeExam = (examId || 'general').trim().toLowerCase().replace(/[^a-z0-9_-]+/g, '_');
  const safeTopic = (topicId || 'general').trim().toLowerCase().replace(/[^a-z0-9_-]+/g, '_');
  return `${STORAGE_NOTES_PREFIX}${safeExam}_${safeTopic}`;
}

function readScopedNotes(examId: string, topicId: string): PersonalNote[] {
  try {
    const raw = studyStorage.getItem(getScopedStorageKey(examId, topicId));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeScopedNotes(examId: string, topicId: string, notes: PersonalNote[]): void {
  try {
    studyStorage.setItem(getScopedStorageKey(examId, topicId), JSON.stringify(notes));
  } catch {
    // Storage quota fallback
  }
}

/**
 * Creates a new private note attached to exact exam and topic.
 */
export function createPersonalNote(params: {
  examId?: string;
  topicId: string;
  title?: string;
  content: string;
  tags?: string[];
  sourceExcerpt?: string;
}): PersonalNote {
  const examId = params.examId || 'general';
  const topicId = params.topicId;
  const now = Date.now();

  const note: PersonalNote = {
    id: `note-${now}-${Math.random().toString(36).slice(2, 7)}`,
    examId,
    topicId,
    title: (params.title || '').trim(),
    content: params.content.trim(),
    tags: params.tags || [],
    sourceExcerpt: params.sourceExcerpt?.trim(),
    createdAt: now,
    updatedAt: now,
    isDeleted: false,
    isPublic: false,
    moderationStatus: 'private',
  };

  const existing = readScopedNotes(examId, topicId);
  writeScopedNotes(examId, topicId, [note, ...existing]);

  // Clear draft on successful save
  clearNoteDraft(topicId, examId);

  return note;
}

/**
 * Updates an existing private note.
 */
export function updatePersonalNote(
  id: string,
  examId: string,
  topicId: string,
  updates: Partial<Pick<PersonalNote, 'title' | 'content' | 'tags' | 'sourceExcerpt'>>
): PersonalNote | null {
  const notes = readScopedNotes(examId, topicId);
  const index = notes.findIndex(n => n.id === id);
  if (index === -1) return null;

  const updated: PersonalNote = {
    ...notes[index],
    ...updates,
    updatedAt: Date.now(),
  };

  notes[index] = updated;
  writeScopedNotes(examId, topicId, notes);
  return updated;
}

/**
 * Soft-deletes a note (recoverable deletion) or permanently destroys it.
 */
export function deletePersonalNote(
  id: string,
  examId: string,
  topicId: string,
  recoverable = true
): boolean {
  const notes = readScopedNotes(examId, topicId);
  const index = notes.findIndex(n => n.id === id);
  if (index === -1) return false;

  if (recoverable) {
    notes[index].isDeleted = true;
    notes[index].deletedAt = Date.now();
  } else {
    notes.splice(index, 1);
  }

  writeScopedNotes(examId, topicId, notes);
  return true;
}

/**
 * Recovers a soft-deleted note back into the active note list.
 */
export function restorePersonalNote(
  id: string,
  examId: string,
  topicId: string
): PersonalNote | null {
  const notes = readScopedNotes(examId, topicId);
  const index = notes.findIndex(n => n.id === id);
  if (index === -1) return null;

  notes[index].isDeleted = false;
  notes[index].deletedAt = undefined;
  notes[index].updatedAt = Date.now();

  writeScopedNotes(examId, topicId, notes);
  return notes[index];
}

/**
 * Retrieves notes with optional search, exam/topic filtering, and trash inclusion.
 */
export function getPersonalNotes(filters: {
  examId?: string;
  topicId: string;
  searchQuery?: string;
  includeDeleted?: boolean;
}): PersonalNote[] {
  const examId = filters.examId || 'general';
  let notes = readScopedNotes(examId, filters.topicId);

  if (!filters.includeDeleted) {
    notes = notes.filter(n => !n.isDeleted);
  } else {
    notes = notes.filter(n => n.isDeleted);
  }

  if (filters.searchQuery && filters.searchQuery.trim()) {
    const q = filters.searchQuery.trim().toLowerCase();
    notes = notes.filter(n => 
      n.title.toLowerCase().includes(q) ||
      n.content.toLowerCase().includes(q) ||
      (n.sourceExcerpt && n.sourceExcerpt.toLowerCase().includes(q)) ||
      (n.tags && n.tags.some(t => t.toLowerCase().includes(q)))
    );
  }

  return notes;
}

/**
 * Autosaves unfinished draft text for a specific topic.
 */
export function saveNoteDraft(topicId: string, text: string, examId = 'general'): void {
  try {
    const key = `${DRAFT_PREFIX}${examId}_${topicId}`;
    if (!text || !text.trim()) {
      studyStorage.removeItem(key);
    } else {
      studyStorage.setItem(key, text);
    }
  } catch {}
}

/**
 * Retrieves the autosaved draft for a specific topic.
 */
export function getNoteDraft(topicId: string, examId = 'general'): string {
  try {
    const key = `${DRAFT_PREFIX}${examId}_${topicId}`;
    return studyStorage.getItem(key) || '';
  } catch {
    return '';
  }
}

/**
 * Clears the autosaved draft.
 */
export function clearNoteDraft(topicId: string, examId = 'general'): void {
  try {
    studyStorage.removeItem(`${DRAFT_PREFIX}${examId}_${topicId}`);
  } catch {}
}

/**
 * Exports notes into standard formats (Markdown, JSON, or TXT).
 */
export function exportPersonalNotes(
  notes: PersonalNote[],
  format: 'markdown' | 'json' | 'txt' = 'markdown',
  topicTitle = 'Study Notes'
): string {
  if (format === 'json') {
    return JSON.stringify(notes, null, 2);
  }

  if (format === 'txt') {
    return notes
      .map(n => `=== ${n.title || 'Untitled Note'} (${new Date(n.createdAt).toLocaleDateString('en-IN')}) ===\n${n.content}\n${n.sourceExcerpt ? `Source Excerpt: ${n.sourceExcerpt}\n` : ''}`)
      .join('\n\n');
  }

  // Markdown format
  const lines: string[] = [
    `# ${topicTitle} — Personal Study Notes`,
    `*Exported on ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} from ExamSathi*`,
    '',
  ];

  for (const n of notes) {
    const dateStr = new Date(n.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    lines.push(`## ${n.title || 'Note'} (${dateStr})`);
    if (n.tags && n.tags.length > 0) {
      lines.push(`**Tags:** ${n.tags.map(t => `\`#${t}\``).join(' ')}`);
    }
    lines.push('');
    lines.push(n.content);
    if (n.sourceExcerpt) {
      lines.push('');
      lines.push(`> 📖 **Source Reference:** ${n.sourceExcerpt}`);
    }
    lines.push('');
    lines.push('---');
    lines.push('');
  }

  return lines.join('\n');
}

/**
 * Privacy & Moderation Guard:
 * Personal notes are strictly private by default.
 * Public contribution requires explicit submission, rights confirmation, and moderation.
 */
export function submitNoteForModeration(
  id: string,
  examId: string,
  topicId: string,
  rightsConfirmed: boolean
): { success: boolean; message: string } {
  if (!rightsConfirmed) {
    return {
      success: false,
      message: 'Rights confirmation required. You must confirm you hold rights to publish this content.',
    };
  }

  const notes = readScopedNotes(examId, topicId);
  const index = notes.findIndex(n => n.id === id);
  if (index === -1) {
    return { success: false, message: 'Note not found.' };
  }

  notes[index].isPublic = false; // Remains non-public until approved by editorial review
  notes[index].moderationStatus = 'pending-review';
  writeScopedNotes(examId, topicId, notes);

  return {
    success: true,
    message: 'Submitted for editorial moderation. Personal notes remain private until reviewed.',
  };
}

/**
 * Migrates legacy topic notes (`examsathi_notes_${topicId}`) into the scoped engine.
 */
export function migrateLegacyTopicNotes(topicId: string, examId = 'general'): PersonalNote[] {
  const current = readScopedNotes(examId, topicId);
  try {
    const legacyKey = `examsathi_notes_${topicId}`;
    const legacyRaw = studyStorage.getItem(legacyKey);
    if (!legacyRaw) return current;

    const legacyList = JSON.parse(legacyRaw);
    if (!Array.isArray(legacyList) || legacyList.length === 0) return current;

    const existingIds = new Set(current.map(n => n.id));
    const imported: PersonalNote[] = [];

    for (const item of legacyList) {
      if (!item || !item.text) continue;
      const itemId = item.id || `leg-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
      if (existingIds.has(itemId)) continue;

      imported.push({
        id: itemId,
        examId,
        topicId,
        title: item.title || 'Study Note',
        content: item.text,
        createdAt: item.date ? new Date(item.date).getTime() || Date.now() : Date.now(),
        updatedAt: Date.now(),
        isDeleted: false,
        isPublic: false,
        moderationStatus: 'private',
      });
    }

    if (imported.length > 0) {
      const merged = [...imported, ...current];
      writeScopedNotes(examId, topicId, merged);
      return merged;
    }
  } catch {}
  return current;
}
