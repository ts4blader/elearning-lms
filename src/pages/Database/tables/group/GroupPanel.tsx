import React from "react";
import ControlPanel from "@components/ControlPanel";
import GroupForm from "@components/forms/GroupForm";
import { useAppDispatch } from "@hooks";
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

  const { AddButton, Group } = ControlPanel;

  return (
    <ControlPanel arrange="flex-end">
      <Group>
        <AddButton onClick={showModal} />
      </Group>
    </ControlPanel>
  );
};

export default GroupPanel;
