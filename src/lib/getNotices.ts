import { Notice, SheetNoticeRow } from "@/@types/notice";

const SHEET_URL =
  "https://opensheet.elk.sh/1Y5gevupwv6-aKJbI_hWsfNI4mkaW-sc0mG56grqm2R4/notices";

const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;

export async function getNotices(): Promise<Notice[]> {
  const res = await fetch(SHEET_URL, {
    next: { revalidate: 300 },
  });

  if (!res.ok) return [];

  const rows: SheetNoticeRow[] = await res.json();
  const now = Date.now(); // ✅ allowed in data layer

  const notices: Notice[] = rows.map((row) => {
    const noticeTime = new Date(row.Date).getTime();

    return {
      title: row.Title,
      date: row.Date,
      type: row.Type as Notice["type"],
      active: row.Active === "TRUE",
      isNew: noticeTime > now - SEVEN_DAYS,
    };
  });

  return notices
    .filter((n) => n.active)
    .sort(
      (a: Notice, b: Notice) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}
