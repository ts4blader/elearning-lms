import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import classData from "@seeds/thcs/classes.json";
import { Button, Divider } from "antd";
import DropdownMenu from "@components/DropdownMenu";

export const PANEL = () => {
  return (
    <div className="table-panel">
      <div className="selections-grp">
        <div className="field">
          <DropdownMenu data={["Khối 6", "Khối 7", "Khối 8"]} />
        </div>
      </div>
      <div className="btn-grp">
        <Button className="delete-btn" icon={<DeleteOutlined />}></Button>
        <Divider type="vertical" />
        <Button className="export-btn" type="primary" size="large" ghost>
          Xuất file
        </Button>
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

export const DATA = classData;
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
          <EyeOutlined />
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
