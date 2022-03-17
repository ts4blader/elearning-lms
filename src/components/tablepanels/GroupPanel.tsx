import React from "react";
import TablePanel from "@components/TablePanel";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import GroupForm from "@components/forms/GroupForm";
import { useAppDispatch } from "@stores/hooks";
import { showFormModal } from "@slices/formModalSlice";

const GroupPanel = () => {
  const dispatch = useAppDispatch();
  const showModal = () => {
    dispatch(
      showFormModal({
        title: "Thêm tổ - bộ môn",
        innerForm: GroupForm,
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

export default GroupPanel;
