export interface Notice {
  title: string;
  date: string;
  type: "admission" | "exam" | "holiday" | "general";
  active: string;
}

const SHEET_URL =
  "https://opensheet.elk.sh/1Y5gevupwv6-aKJbI_hWsfNI4mkaW-sc0mG56grqm2R4/notices";

export async function getNotices(): Promise<Notice[]> {
  const res = await fetch(SHEET_URL, {
    next: { revalidate: 300 },
  });

  if (!res.ok) return [];

  const rawData = await res.json();

  // 🔑 NORMALIZE KEYS HERE
  const normalized: Notice[] = rawData.map((row: any) => ({
    title: row.Title,
    date: row.Date,
    type: row.Type,
    active: row.Active,
  }));

  return normalized
    .filter((n) => n.active === "TRUE")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
