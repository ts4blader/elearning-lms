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
    tableConfig: {
      dataSource: SEMESTER.DATA,
      columns: SEMESTER.COLUMNS,
    },
    panel: SEMESTER.PANEL,
  },
  {
    name: "group",
    text: "Tổ - Bộ môn",
    tableConfig: {
      dataSource: GROUP.DATA,
      columns: GROUP.COLUMNS,
    },
    panel: GROUP.PANEL,
  },
  {
    name: "grade",
    text: "Khoa khối",
    tableConfig: {
      dataSource: GRADE.DATA,
      columns: GRADE.COLUMNS,
    },
    panel: GRADE.PANEL,
  },
  {
    name: "subject",
    text: "Môn học",
    tableConfig: {
      dataSource: SUBJECT.DATA,
      columns: SUBJECT.COLUMNS,
      rowSelection: {
        type: "checkbox",
        onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record: any) => ({
          disabled: record.name === 'Disabled User', // Column configuration not to be checked
          name: record.name,
        }),
      }
    },
    panel: SUBJECT.PANEL,
  },
  {
    name: "class",
    text: "Lớp học",
    tableConfig: {
      dataSource: CLASS.DATA,
      columns: CLASS.COLUMNS,
      rowSelection: {
        type: "checkbox",
        onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record: any) => ({
          disabled: record.name === 'Disabled User', // Column configuration not to be checked
          name: record.name,
        }),
      }
    },
    panel: CLASS.PANEL,
  },
  {
    name: "score",
    text: "Loại điểm",
    tableConfig: {
      dataSource: SCORE.DATA,
      columns: SCORE.COLUMNS,
    },
    panel: SCORE.PANEL,
  },
];

export const SCHOOL_DROPDOWN = ["THCS", "THPT"];
export const SEMESTERS_DROPDOWN = ["2021-2022", "2023-2024", "2025-2026"];
