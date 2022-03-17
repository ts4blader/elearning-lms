import React from "react";
import TablePanel from "@components/TablePanel";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ScoreForm from "@components/forms/ScoreForm";
import { useAppDispatch } from "@stores/hooks";
import { showFormModal } from "@slices/formModalSlice";

const ScorePanel = () => {
  const dispatch = useAppDispatch();
  const showModal = () => {
    dispatch(
      showFormModal({
        title: "Thêm loại điểm",
        innerForm: ScoreForm,
      })
    );
  };

  return (
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
  );
};

export default ScorePanel;
