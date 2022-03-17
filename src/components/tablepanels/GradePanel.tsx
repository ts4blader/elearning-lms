import React from "react";
import TablePanel from "@components/TablePanel";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import GradeForm from "@components/forms/GradeForm";
import { useAppDispatch } from "@stores/hooks";
import { showFormModal } from "@slices/formModalSlice";

const GradePanel = () => {
  const dispatch = useAppDispatch();
  const showModal = () => {
    dispatch(
      showFormModal({
        title: "Thêm khoa khối",
        innerForm: GradeForm,
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

export default GradePanel;
