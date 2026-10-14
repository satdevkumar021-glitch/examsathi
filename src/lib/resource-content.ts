// Educator resources: lessons, videos and document links. Pure validation shared by the admin API (authoritative),
// the loader that serves published items, and the tests.
//
// What students may be shown is deliberately narrow:
//  - lessons are PLAIN TEXT (never HTML), so an author cannot inject script or markup into a student's page;
//  - videos are YouTube only and stored as the validated 11-character id, never as a URL we would embed;
//  - documents are https links to a public host (no credentials, no IP addresses, no localhost), opened in a new tab.

export type Checked<T> = { ok: true; value: T } | { ok: false; message: string };
export type Lang = 'en' | 'hi' | 'pa';
export interface Localized { en?: string; hi?: string; pa?: string }

export const RESOURCE_TYPES = ['lesson', 'video', 'pdf'] as const;
export type ResourceType = typeof RESOURCE_TYPES[number];
export const isResourceType = (value: unknown): value is ResourceType => typeof value === 'string' && (RESOURCE_TYPES as readonly string[]).includes(value);

const LANGS: readonly Lang[] = ['en', 'hi', 'pa'];
const MAX = { lessonTitle: 200, lessonBody: 6000, channel: 100, duration: 20, publisher: 120, url: 500 };

/** The database limits `data` to 20,000 bytes. Hindi and Punjabi take 3 bytes a character, so count bytes, with headroom for jsonb spacing. */
export const MAX_DATA_BYTES = 16000;
export const byteLength = (value: unknown): number => new TextEncoder().encode(JSON.stringify(value) ?? '').length;

const isRecord = (value: unknown): value is Record<string, unknown> => !!value && typeof value === 'object' && !Array.isArray(value);

function localized(value: unknown, label: string, max: number): Checked<Localized> {
  if (!isRecord(value)) return { ok: false, message: `${label} is required.` };
  const out: Localized = {};
  for (const lang of LANGS) {
    const raw = value[lang];
    if (raw === undefined || raw === null || raw === '') continue;
    if (typeof raw !== 'string') return { ok: false, message: `${label} must be text.` };
    const text = raw.replace(/\r\n?/g, '\n').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim();
    if (text.length > max) return { ok: false, message: `${label} is too long (max ${max} characters per language).` };
    if (text) out[lang] = text;
  }
  if (!out.en && !out.hi) return { ok: false, message: `${label} needs English or Hindi text.` };
  return { ok: true, value: out };
}

const YOUTUBE_ID = /^[A-Za-z0-9_-]{11}$/;
const YOUTUBE_HOSTS = new Set(['youtube.com', 'www.youtube.com', 'm.youtube.com', 'music.youtube.com', 'youtube-nocookie.com', 'www.youtube-nocookie.com']);

/** Accepts a bare 11-character id or a youtube.com / youtu.be link, and returns only the validated id. */
export function youtubeIdFrom(input: unknown): string | null {
  if (typeof input !== 'string') return null;
  const text = input.trim();
  if (YOUTUBE_ID.test(text)) return text;
  let url: URL;
  try { url = new URL(text); } catch { return null; }
  if (url.protocol !== 'https:' && url.protocol !== 'http:') return null;
  const host = url.hostname.toLowerCase();
  let candidate: string | null = null;
  if (host === 'youtu.be') candidate = url.pathname.split('/')[1] || null;
  else if (YOUTUBE_HOSTS.has(host)) {
    const parts = url.pathname.split('/').filter(Boolean);
    if (parts[0] === 'watch') candidate = url.searchParams.get('v');
    else if (['embed', 'shorts', 'live', 'v'].includes(parts[0])) candidate = parts[1] ?? null;
  }
  return candidate && YOUTUBE_ID.test(candidate) ? candidate : null;
}

const PRIVATE_HOST = /(^|\.)(localhost|local|internal|lan|home|corp|intranet)$/i;

/** https only, a real public hostname, no credentials. Returns the normalised URL. */
export function safeHttpsUrl(input: unknown): string | null {
  if (typeof input !== 'string') return null;
  const text = input.trim();
  if (!text || text.length > MAX.url) return null;
  let url: URL;
  try { url = new URL(text); } catch { return null; }
  if (url.protocol !== 'https:' || url.username || url.password) return null;
  const host = url.hostname.toLowerCase();
  if (!host.includes('.') || host.startsWith('[') || /^[\d.]+$/.test(host) || PRIVATE_HOST.test(host)) return null;
  if (url.port && url.port !== '443') return null;
  return url.href;
}

function text(value: unknown, label: string, max: number, required = false): Checked<string | undefined> {
  if (value === undefined || value === null || value === '') return required ? { ok: false, message: `${label} is required.` } : { ok: true, value: undefined };
  if (typeof value !== 'string') return { ok: false, message: `${label} must be text.` };
  const clean = value.replace(/[\u0000-\u001F\u007F]/g, ' ').replace(/\s+/g, ' ').trim();
  if (clean.length > max) return { ok: false, message: `${label} is too long (max ${max} characters).` };
  if (!clean) return required ? { ok: false, message: `${label} is required.` } : { ok: true, value: undefined };
  return { ok: true, value: clean };
}

function language(value: unknown): Lang {
  return typeof value === 'string' && (LANGS as readonly string[]).includes(value) ? (value as Lang) : 'hi';
}

export interface LessonData { title: Localized; body: Localized }
export interface VideoData { youtubeId: string; channel?: string; duration?: string; language: Lang }
export interface DocumentData { url: string; language: Lang; publisher?: string }
export type ResourceData = LessonData | VideoData | DocumentData;

/** Strict check of a lesson, video or document. The result is what is stored and, once approved, what students receive. */
export function validateResourceData(type: ResourceType, data: unknown): Checked<ResourceData> {
  if (!isRecord(data)) return { ok: false, message: 'Invalid item data.' };
  if (byteLength(data) > MAX_DATA_BYTES) return { ok: false, message: 'This item is too large. Shorten the text.' };
  if (type === 'lesson') {
    const title = localized(data.title, 'Lesson title', MAX.lessonTitle);
    if (!title.ok) return title;
    const body = localized(data.body, 'Lesson text', MAX.lessonBody);
    if (!body.ok) return body;
    const value: LessonData = { title: title.value, body: body.value };
    if (byteLength(value) > MAX_DATA_BYTES) return { ok: false, message: 'This lesson is too long. Shorten the text or split it into two lessons.' };
    return { ok: true, value };
  }
  if (type === 'video') {
    const youtubeId = youtubeIdFrom(data.youtubeId ?? data.url);
    if (!youtubeId) return { ok: false, message: 'Enter a YouTube link (youtube.com or youtu.be) or an 11-character video id.' };
    const channel = text(data.channel, 'Channel', MAX.channel);
    if (!channel.ok) return channel;
    const duration = text(data.duration, 'Duration', MAX.duration);
    if (!duration.ok) return duration;
    return { ok: true, value: { youtubeId, channel: channel.value, duration: duration.value, language: language(data.language) } };
  }
  const url = safeHttpsUrl(data.url);
  if (!url) return { ok: false, message: 'Enter a public https link. Plain http, IP addresses, localhost and links with a password are not allowed.' };
  const publisher = text(data.publisher, 'Publisher', MAX.publisher);
  if (!publisher.ok) return publisher;
  return { ok: true, value: { url, language: language(data.language), publisher: publisher.value } };
}

/** What the public API returns for a published item. Never includes the author, reviewer or any internal field. */
export interface PublicResource {
  id: string;
  type: ResourceType;
  topicId: string;
  title: string;
  lesson?: { title: Localized; body: Localized };
  video?: { youtubeId: string; channel?: string; duration?: string; language: Lang };
  document?: { url: string; language: Lang; publisher?: string };
}

export function toPublicResource(row: { id: string; type: string; title: string; topicId: string; data: unknown }): PublicResource | null {
  if (!isResourceType(row.type)) return null;
  const checked = validateResourceData(row.type, row.data);
  if (!checked.ok) return null; // a malformed row is never served
  const base = { id: row.id, type: row.type, topicId: row.topicId, title: row.title };
  if (row.type === 'lesson') return { ...base, lesson: checked.value as LessonData };
  if (row.type === 'video') return { ...base, video: checked.value as VideoData };
  return { ...base, document: checked.value as DocumentData };
}
