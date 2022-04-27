export const EXAMINATION_TABLE = [
  {
    title: "Học kỳ",
    dataIndex: "semester",
    key: "semester",
    sorter: true,
  },
  {
    title: "Ngày làm",
    dataIndex: "day",
    key: "day",
  },
  {
    title: "Khoa-Khối",
    dataIndex: "grade",
    key: "grade",
    sorter: true,
  },
  {
    title: "Môn thi",
    dataIndex: "subject",
    key: "subject",
    sorter: true,
  },
  {
    title: "Tên kì thi",
    dataIndex: "name",
    key: "name",
    sorter: true,
  },
  {
    title: "Tình trạng",
    render: (text: string, record: any) => (
      <div className="status-cell">{record.status}</div>
    ),
    key: "status",
    sorter: true,
  },
];
