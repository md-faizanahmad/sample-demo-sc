export function getAcademicSession(): string {
  const now = new Date();
  // Academic year starts in April.
  const startYear =
    now.getMonth() >= 3 ? now.getFullYear() : now.getFullYear() - 1;

  const endYear = String((startYear + 1) % 100).padStart(2, "0");
  return `${startYear}–${endYear}`;
}
