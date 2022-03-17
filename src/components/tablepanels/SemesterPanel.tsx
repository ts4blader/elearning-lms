import React from "react";
import { Button } from "antd";
import TablePanel from "@components/TablePanel";
import { PlusOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@stores/hooks";
import { showFormModal } from "@slices/formModalSlice";
import SemesterForm from "@components/forms/SemesterForm";

const SemesterPanel = () => {
  const dispatch = useAppDispatch();
  const showModal = () => {
    dispatch(
      showFormModal({
        title: "Thêm niên khóa",
        innerForm: SemesterForm,
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
export default SemesterPanel;
