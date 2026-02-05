export interface SheetNoticeRow {
  Title: string;
  Date: string;
  Type: string;
  Active: "TRUE" | "FALSE";
}
export interface Notice {
  title: string;
  date: string;
  type: "admission" | "exam" | "holiday" | "general";
  active: boolean;
  isNew: boolean;
}
