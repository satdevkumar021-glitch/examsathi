const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === 'production' ? '/examsathi' : '')).replace(/\/$/, '');

/** Next Link adds basePath itself; use this for assets, fetch and native URLs. */
export function publicPath(path: string): string {
  return `${basePath}/${path.replace(/^\//, '')}`;
}

export function apiUrl(path: string): string | null {
  const backend = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '');
  if (backend) return `${backend}/${path.replace(/^\//, '')}`;
  return process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true' ? null : publicPath(path);
}
