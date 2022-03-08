import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import scoreData from "@seeds/thcs/scores.json";
import { Button } from "antd";

export const PANEL = () => {
  return (
    <div className="table-panel">
      <div className="btn-grp">
        <Button
          className="add-btn"
          type="primary"
          size="large"
          icon={<PlusOutlined />}
        >
          Thêm mới
        </Button>
      </div>
    </div>
  );
};

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
