// src/app/_lib/dates.ts
export function toISODateKey(input: string): string {
  // release_date can be in "day" "month" or "year" format
  // Normalize to use "YYYY-MM-DD" format

  // If already in YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(input)) return input;

  // If it's YYYY-MM, default to day 01
  if (/^\d{4}-\d{2}$/.test(input)) return `${input}-01`;

  // If it's YYYY, default to Jan 01
  if (/^\d{4}$/.test(input)) return `${input}-01-01`;

  // Fallback: try Date parsing, then format to YYYY-MM-DD in UTC
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return input; // don't crash; return original

  const yyyy = d.getUTCFullYear();
  const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(d.getUTCDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}