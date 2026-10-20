export function getAcademicSession(): string {
  const now = new Date();
  // Academic year starts in April.
  const startYear =
    now.getMonth() >= 3 ? now.getFullYear() : now.getFullYear() - 1;

  const endYear = String((startYear + 1) % 100).padStart(2, "0");
  return `${startYear}–${endYear}`;
}

export function getPreviousMonth(): string {
  const date = new Date();

  date.setDate(1);
  date.setMonth(date.getMonth() - 1);

  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}
