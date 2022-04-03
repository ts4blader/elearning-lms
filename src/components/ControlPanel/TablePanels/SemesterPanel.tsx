import React from "react";
import { Button } from "antd";
import ControlPanel from "@components/ControlPanel";
import { PlusOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@hooks";
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

  const { AddButton, Group } = ControlPanel;

  return (
    <ControlPanel arrange="flex-end">
      <Group>
        <AddButton onClick={showModal} />
      </Group>
    </ControlPanel>
  );
};
export default SemesterPanel;
