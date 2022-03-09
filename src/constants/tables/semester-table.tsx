import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import semesterData from "@seeds/thcs/semesters.json";
import { Button, Modal } from "antd";
import TablePanel from "@components/TablePanel";

const AddModalFooter = () => {
  return (
    <div className="modal-footer add-modal">
      <Button>Hủy</Button>
      <Button type="primary" size="large">
        Lưu
      </Button>
    </div>
  );
};

export const PANEL = () => {
  return (
    <>
      {/* <Modal
        title="Thêm niên khóa"
        visible={true}
        footer={<AddModalFooter />}
        centered={true}
      >
        something
      </Modal> */}
      <TablePanel>
        <TablePanel.ButtonGrp>
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
    </>
  );
};

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
