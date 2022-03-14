import groupData from "@seeds/thcs/groups.json";
import GroupPanel from "@components/tablepanels/GroupPanel";

export const PANEL = GroupPanel;

export const DATA = groupData;

export const COLUMNS = [
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
