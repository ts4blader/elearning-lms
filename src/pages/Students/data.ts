import StudentTable from "./StudentTable";

export const TABLES = [
  {
    title: "Danh sách học viên",
    table: StudentTable,
    tab: {
      name: "all-student",
      text: "Tất cả hồ sơ",
    },
  },
  {
    title: "Danh sách khen thưởng của học viên",
    table: null,
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

export const TABS = ["Tất cả hồ sơ", "Khen thưởng", "Kỷ luật"];
