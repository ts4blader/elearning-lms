import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import subjectData from "@seeds/thcs/subjects.json";
import { Button, Divider } from "antd";
import DropdownMenu from "@components/DropdownMenu";
import TablePanel from "@components/TablePanel";

export const PANEL = () => {
  return (
    <TablePanel>
      <TablePanel.SelectionGrp>
        <TablePanel.Field>
          <div className="label">Khối</div>
          <DropdownMenu data={["6", "7", "8"]} />
        </TablePanel.Field>
        <TablePanel.Field>
          <div className="label">Lớp</div>
          <DropdownMenu data={["6A", "6B", "6C", "6D"]} />
        </TablePanel.Field>
      </TablePanel.SelectionGrp>
      <TablePanel.ButtonGrp>
        <Button className="delete-btn" icon={<DeleteOutlined />}></Button>
        <Divider type="vertical" />
        <Button
          className="add-btn"
          type="primary"
          size="large"
          icon={<PlusOutlined />}
        >
          Thêm mới
        </Button>
      </TablePanel.ButtonGrp>
    </TablePanel>
  );
};

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
