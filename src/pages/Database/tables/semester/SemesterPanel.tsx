import React from "react";
import ControlPanel from "@components/ControlPanel";
import { useAppDispatch } from "@hooks";
import { showFormModal } from "@slices/formModalSlice";
import { SemesterForm } from "@components/Forms";

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
