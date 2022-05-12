import STUDENTS from "@seeds/thcs/students.json";
import StudentTable from "./StudentTable";
import SubjectTable from "./SubjectTable";

export const TABLES = [
  {
    table: StudentTable,
  },
  {
    table: SubjectTable,
  },
];

export const BREADCRUMB_DATA = [
  {
    text: "Khai báo dữ liệu",
    link: "/dashboard/database",
  },
  {
    text: "Lớp học",
    link: "/dashboard/database",
  },
  {
    text: "Chi tiết lớp học",
    link: "/",
  },
];

export const STUDENT_CONFIG = {
  dataSource: STUDENTS,
  columns: [{ title: "" }],
};
