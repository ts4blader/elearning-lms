import * as SEMESTER from "@constants/tables/semester-table";
import * as GROUP from "@constants/tables/group-table";
import * as GRADE from "@constants/tables/grade-table";
import * as SUBJECT from "@constants/tables/subject-table";
import * as CLASS from "@constants/tables/class-table";
import * as SCORE from "@constants/tables/score-table";

export const TABLES = [
  {
    name: "semester",
    text: "Niên khóa",
    table: SEMESTER.TABLE,
    panel: SEMESTER.PANEL,
  },
  {
    name: "group",
    text: "Tổ - Bộ môn",
    table: GROUP.TABLE,
    panel: GROUP.PANEL,
  },
  {
    name: "grade",
    text: "Khoa khối",
    table: GRADE.TABLE,
    panel: GRADE.PANEL,
  },
  {
    name: "subject",
    text: "Môn học",
    table: SUBJECT.TABLE,
    panel: SUBJECT.PANEL,
  },
  {
    name: "class",
    text: "Lớp học",
    table: CLASS.TABLE,
    panel: CLASS.PANEL,
  },
  {
    name: "score",
    text: "Loại điểm",
    table: SCORE.TABLE,
    panel: SCORE.PANEL,
  },
];

export const SCHOOL_DROPDOWN = ["THCS", "THPT"];
export const SEMESTERS_DROPDOWN = ["2021-2022", "2023-2024", "2025-2026"];
