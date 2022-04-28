export const BREADCRUMB_DATA = [
  {
    text: "Quản lý bài kiểm tra",
    link: "/dashboard/examination",
  },
  {
    text: "Danh sách lớp tham gia",
    link: "/",
  },
];

export const CLASSES_LIST_COLUMN = [
  {
    title: "Mã lớp",
    dataIndex: "id",
    key: "id",
    sorter: true,
  },
  {
    title: "Tên lớp",
    dataIndex: "name",
    key: "name",
    sorter: true,
  },
  {
    title: "GVCN",
    dataIndex: "leader",
    key: "leader",
  },
  {
    title: "HS tham gia",
    render: (text: string, record: any) => (
      <div>{`${record.studentAmount}/50`}</div>
    ),
    key: "studentAmount",
  },
  {
    title: "GV chấm thi",
    dataIndex: "supervisor",
    key: "supervisor",
  },
];
