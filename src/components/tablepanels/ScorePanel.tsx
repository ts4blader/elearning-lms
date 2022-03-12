import React, { useState } from "react";
import TablePanel from "@components/TablePanel";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ScoreForm from "@components/forms/ScoreForm";

const ScorePanel = () => {
  const [show, setShow] = useState(false);

  return (
    <TablePanel
      onCancel={() => setShow(false)}
      innerForm={ScoreForm}
      show={show}
      popUpTitle="Thêm loại điểm"
    >
      <TablePanel.ButtonGrp>
        <Button
          className="add-btn"
          type="primary"
          size="large"
          icon={<PlusOutlined />}
          onClick={() => setShow(true)}
        >
          Thêm mới
        </Button>
      </TablePanel.ButtonGrp>
    </TablePanel>
  );
};

export default ScorePanel;
