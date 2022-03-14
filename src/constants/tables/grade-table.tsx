import gradesData from "@seeds/thcs/grades.json";
import GradePanel from "@components/tablepanels/GradePanel";

export const PANEL = GradePanel;

export const DATA = gradesData;

export const COLUMNS = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: true,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a: any, b: any) => a.length - b.length,
  },
];
