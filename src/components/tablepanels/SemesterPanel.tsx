import React, { useState } from "react";
import { Modal, Button } from "antd";
import TablePanel from "@components/TablePanel";
import SemesterForm from "@components/forms/SemesterForm";
import { PlusOutlined } from "@ant-design/icons";

const SemesterPanel = () => {
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
export default SemesterPanel;
