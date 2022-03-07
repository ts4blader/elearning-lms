import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export const SEMESTER_COLUMNS = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a: any, b: any) => a.length - b.length,
  },
  {
    title: "Begin",
    dataIndex: "begin",
    key: "begin",
  },
  {
    title: "End",
    dataIndex: "end",
    key: "end",
  },
  {
    title: "",
    key: "action",
    render: (text: string, record: any) => (
      <>
        <span className="edit-btn">
          <EditOutlined />
        </span>
        <span className="edit-btn">
          <DeleteOutlined />
        </span>
      </>
    ),
  },
];
