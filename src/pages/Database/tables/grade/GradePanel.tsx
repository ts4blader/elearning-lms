import React from "react";
import ControlPanel from "@components/ControlPanel";
import { GradeForm } from "@components/Forms";
import { useAppDispatch } from "@hooks";
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

  const { AddButton, Group } = ControlPanel;

  return (
    <ControlPanel arrange="flex-end">
      <Group>
        <AddButton onClick={showModal} />
      </Group>
    </ControlPanel>
  );
};

export default GradePanel;
