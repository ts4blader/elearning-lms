import React, { useState } from "react";
import TablePanel from "@components/TablePanel";
import { Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import GroupForm from "@components/forms/GroupForm";

const GroupPanel = () => {
  const [showModal, setShowModal] = useState(false);

  const show = () => setShowModal(true);
  const hide = () => setShowModal(false);

  return (
    <>
      <Modal
        title="Thêm tổ - bộ môn"
        visible={showModal}
        onCancel={hide}
        footer={<></>}
        centered={true}
      >
        <GroupForm onCancel={hide} />
      </Modal>
      <TablePanel>
        <TablePanel.ButtonGrp>
          <Button
            className="add-btn"
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            onClick={show}
          >
            Thêm mới
          </Button>
        </TablePanel.ButtonGrp>
      </TablePanel>
    </>
  );
};

export default GroupPanel;
