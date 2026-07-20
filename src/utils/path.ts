/**
 * Path helpers for active nav state and trailing-slash differences.
 */

/** Normalize a pathname for comparison (strip trailing slash except root). */
export function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

/** True when current path matches a nav href. */
export function isActivePath(currentPath: string, href: string): boolean {
  return normalizePath(currentPath) === normalizePath(href);
}
