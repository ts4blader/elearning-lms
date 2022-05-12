import StudentTable from "./StudentTable";
import StudentPanel from "./StudentPanel";

export const TABLES = [
  {
    title: "Danh sách học viên",
    table: StudentTable,
    panel: StudentPanel.All,
    tab: {
      name: "all-student",
      text: "Tất cả hồ sơ",
    },
  },
  {
    title: "Danh sách khen thưởng của học viên",
    table: null,
    panel: StudentPanel.Prized,
    filter: (item: any) => item.prized !== 0,
    tab: {
      name: "praised-student",
      text: "Khen thưởng",
    },
    columns: [
      { title: "ID", dataIndex: "id", key: "id", sorter: true },
      { title: "Name", dataIndex: "name", key: "name", sorter: true },
      {
        title: "Birthday",
        dataIndex: "birthday",
        key: "birthday",
        sorter: true,
      },
      { title: "Gender", dataIndex: "gender", key: "gender", sorter: true },
      { title: "Prized", dataIndex: "prized", key: "prized", sorter: true },
    ],
  },
  {
    title: "Danh sách kỷ luật của học viên",
    table: null,
    panel: StudentPanel.Disciplined,
    filter: (item: any) => item.disciplined !== 0,
    tab: {
      name: "disciplined-student",
      text: "Kỷ luật",
    },
    columns: [
      { title: "ID", dataIndex: "id", key: "id", sorter: true },
      { title: "Name", dataIndex: "name", key: "name", sorter: true },
      {
        title: "Birthday",
        dataIndex: "birthday",
        key: "birthday",
        sorter: true,
      },
      { title: "Gender", dataIndex: "gender", key: "gender", sorter: true },
      {
        title: "Disciplined",
        dataIndex: "disciplined",
        key: "disciplined",
        sorter: true,
      },
    ],
  },
];

export const STATUS = [
  {
    prioty: 1,
    text: "Đang theo học",
  },
  {
    prioty: 2,
    text: "Đã tốt nghiệp",
  },
  {
    prioty: 3,
    text: "Đã chuyển lớp",
  },
  {
    prioty: 4,
    text: "Đã chuyển trường",
  },
  {
    prioty: 5,
    text: "Đã thôi học",
  },
];
