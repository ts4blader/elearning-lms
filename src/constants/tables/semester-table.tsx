import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import semesterData from "@seeds/thcs/semesters.json";
import SemesterPanel from "@components/tablepanels/SemesterPanel";

export const PANEL = SemesterPanel;

export const DATA = semesterData;

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
        <span className="edit-btn btn">
          <EditOutlined />
        </span>
        <span className="delete-btn btn">
          <DeleteOutlined />
        </span>
      </>
    ),
  },
];
