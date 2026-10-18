import { getNotices } from "@/lib/getNotices";
import NoticeBell from "./NoticeBell";

export default async function NoticeAside() {
  const notices = await getNotices();

  if (notices.length === 0) return null;

  return <NoticeBell notices={notices} />;
}
