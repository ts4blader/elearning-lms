import React, { useState } from "react";
import { Button } from "antd";
import TablePanel from "@components/TablePanel";
import SemesterForm from "@components/forms/SemesterForm";
import { PlusOutlined } from "@ant-design/icons";

const SemesterPanel = () => {
  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  return (
    <TablePanel
      popUpTitle="Thêm niên khóa"
      innerForm={SemesterForm}
      show={show}
      onCancel={hideModal}
    >
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
  );
};
export default SemesterPanel;
