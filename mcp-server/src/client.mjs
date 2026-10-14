// Thin HTTP client for the ExamSathi API. No MCP code here, so it can be tested with a fake fetch.

const TIMEOUT_MS = 15000;

export class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

/** Normalises the base URL and refuses plain http for anything but localhost, so a token is never sent in clear text. */
export function parseBaseUrl(raw) {
  let url;
  try { url = new URL(raw); } catch { throw new Error('EXAMSATHI_API_URL must be a valid URL, for example https://examsathi.example.com'); }
  const local = ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname);
  if (url.protocol !== 'https:' && !(url.protocol === 'http:' && local)) {
    throw new Error('EXAMSATHI_API_URL must use https (http is allowed for localhost only).');
  }
  return url.origin;
}

export function createClient({ baseUrl, token, fetchImpl = fetch }) {
  const origin = parseBaseUrl(baseUrl);

  async function request(method, path, { body, auth = false } = {}) {
    if (auth && !token) {
      throw new ApiError(401, 'This tool needs EXAMSATHI_STAFF_TOKEN (a Supabase access token of a staff user).');
    }
    const headers = { Accept: 'application/json' };
    if (body !== undefined) headers['Content-Type'] = 'application/json';
    if (auth) headers.Authorization = `Bearer ${token}`;
    let res;
    try {
      res = await fetchImpl(origin + path, {
        method,
        headers,
        body: body === undefined ? undefined : JSON.stringify(body),
        signal: AbortSignal.timeout(TIMEOUT_MS),
      });
    } catch {
      throw new ApiError(0, 'Could not reach the ExamSathi API.');
    }
    let json = null;
    try { json = await res.json(); } catch { /* non-JSON error page */ }
    if (!res.ok || json?.success === false) {
      // Only the server's own message is surfaced, never headers or the token.
      throw new ApiError(res.status, json?.message || `ExamSathi API returned ${res.status}.`);
    }
    return json;
  }

  return {
    get: (path, opts) => request('GET', path, opts),
    post: (path, body, opts) => request('POST', path, { ...opts, body }),
  };
}
