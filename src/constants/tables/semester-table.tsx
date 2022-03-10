import { useState } from "react";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import semesterData from "@seeds/thcs/semesters.json";
import { Button, Modal } from "antd";
import TablePanel from "@components/TablePanel";
import SemesterForm from "@components/SemesterForm";

export const PANEL = () => {
  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  return (
    <>
      <Modal
        title="Thêm niên khóa"
        visible={show}
        onCancel={hideModal}
        footer={<></>}
        centered={true}
      >
        <SemesterForm onCancel={hideModal} />
      </Modal>
      <TablePanel>
        <TablePanel.ButtonGrp>
          <Button
            className="add-btn"
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            onClick={showModal}
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
