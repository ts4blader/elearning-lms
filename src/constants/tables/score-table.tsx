import scoreData from "@seeds/thcs/scores.json";
import ScorePanel from "@components/tablepanels/ScorePanel";

export const PANEL = ScorePanel;

export const DATA = scoreData;

export const COLUMNS = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: true,
    align: "center",
  },
  {
    title: "Base",
    dataIndex: "base",
    key: "base",
    sorter: true,
    align: "center",
  },
  {
    title: "Minimum scores amount",
    align: "center",
    children: [
      {
        title: "1st semester",
        dataIndex: "first",
        key: "first",
        align: "center",
      },
      {
        title: "2nd semester",
        dataIndex: "secondary",
        key: "secondary",
        align: "center",
      },
    ],
  },
];
