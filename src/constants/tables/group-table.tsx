import { EditOutlined, DeleteOutlined, MenuOutlined } from "@ant-design/icons";
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
  {
    title: "",
    key: "action",
    render: (text: string, record: any) => (
      <>
        <span className="edit-btn btn">
          <MenuOutlined />
        </span>
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
