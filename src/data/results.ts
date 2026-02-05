export interface Topper {
  name: string;
  score: string;
}

export interface ResultYear {
  year: string;
  board: string;
  passPercentage: string;
  toppers: Topper[];
  achievements: string[];
}

export const resultsData: ResultYear[] = [
  {
    year: "2025",
    board: "CBSE",
    passPercentage: "100%",
    toppers: [
      { name: "Ankit Kumar", score: "97.2%" },
      { name: "Priya Kumari", score: "95.6%" },
      { name: "Rahul Singh", score: "94.8%" },
    ],
    achievements: [
      "School Topper in CBSE Class X Examination",
      "District Level Science Exhibition – 1st Position",
      "Selected for CBSE Regional Sports Meet",
    ],
  },
  {
    year: "2024",
    board: "CBSE",
    passPercentage: "98.6%",
    toppers: [
      { name: "Aman Kumar", score: "96%" },
      { name: "Riya Singh", score: "94%" },
      { name: "Saurabh Verma", score: "92.4%" },
    ],
    achievements: [
      "100% Pass Result in CBSE Class X",
      "District Level Mathematics Olympiad – Merit Holder",
      "Inter-School Debate Competition Winner",
    ],
  },
  {
    year: "2023",
    board: "CBSE",
    passPercentage: "97%",
    toppers: [
      { name: "Neha Kumari", score: "95.2%" },
      { name: "Vikas Yadav", score: "93.8%" },
    ],
    achievements: [
      "Best Performing School Award (Block Level)",
      "State-Level Sports Participation",
      "Excellent Results in Class XII (Science & Commerce)",
    ],
  },
];
