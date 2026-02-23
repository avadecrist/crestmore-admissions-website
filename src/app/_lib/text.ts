// text utilities
export function truncate(text: string, max = 170) {
  const clean = text.trim();
  if (clean.length <= max) return clean;
  return clean.slice(0, max).trimEnd() + "…";
}