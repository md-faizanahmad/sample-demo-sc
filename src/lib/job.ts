// export type JobStatus = "active" | "inactive";

// export interface Job {
//   title: string;
//   department: string;
//   qualification: string;
//   last_date: string;
//   apply_link: string;
//   posted_date: string;
//   status: JobStatus;
// }

// export const JOBS_URL =
//   "https://opensheet.elk.sh/1yGzN0DAzP7fx9497m-irBT1J4sFGJCHJwP4e3irCBA0/Sheet1";

// // ---- helpers ----
// export function parseDate(date: string): Date {
//   return new Date(date.replace(/(\d{2}) (\w{3}) (\d{4})/, "$2 $1, $3"));
// }

// export function slugify(text: string): string {
//   return text
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/(^-|-$)+/g, "");
// }

// export async function getJobs(): Promise<Job[]> {
//   const res = await fetch(JOBS_URL, {
//     next: { revalidate: 100 },
//   });

//   if (!res.ok) throw new Error("Failed to fetch jobs");

//   return res.json();
// }
