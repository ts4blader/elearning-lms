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

export const CARD_INFO_DATA = [
  {
    label: "Khối",
    text: "6",
  },
  {
    label: "Tên kỳ thi",
    text: "Giữa kỳ",
  },
  {
    label: "Học kỳ",
    text: "1",
  },
  {
    label: "Ngày làm bài",
    text: "20/02/2022",
  },
  {
    label: "Tình trạng",
    text: "Đã kết thúc",
  },
];
