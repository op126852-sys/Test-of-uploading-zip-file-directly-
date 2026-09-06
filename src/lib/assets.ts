/**
 * Prefix public asset paths with the deploy basePath.
 * In the local dev / production server build this is an empty string;
 * in the static export it is the GitHub Pages project path.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
