import classData from "@seeds/thcs/classes.json";
import ClassPanel from "@components/tablepanels/ClassPanel";

export const PANEL = ClassPanel;

export const DATA = classData;

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
    sorter: true,
  },
  {
    title: "Leader",
    dataIndex: "leader",
    key: "leader",
    sorter: true,
  },
];
