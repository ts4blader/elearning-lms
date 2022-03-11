import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import subjectData from "@seeds/thcs/subjects.json";
import SubjectPanel from "@components/tablepanels/SubjectPanel";

export const PANEL = SubjectPanel;

export const DATA = subjectData;

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
    title: "Type",
    dataIndex: "type",
    key: "type",
    sorter: true,
  },
  {
    title: "1st semester",
    dataIndex: "first",
    key: "first",
  },
  {
    title: "2nd semester",
    dataIndex: "secondary",
    key: "secondary",
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
