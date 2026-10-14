const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/, '');

/** Next Link adds basePath itself; use this for assets, fetch and native URLs. */
export function publicPath(path: string): string {
  return `${basePath}/${path.replace(/^\//, '')}`;
}

/** Same-origin API URL, or a separate backend when NEXT_PUBLIC_API_URL is set (which needs a CORS allowlist). */
export function apiUrl(path: string): string {
  const backend = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '');
  return backend ? `${backend}/${path.replace(/^\//, '')}` : publicPath(path);
}
