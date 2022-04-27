import React from "react";
import ControlPanel from "@components/ControlPanel";
import { ScoreForm } from "@components/Forms";
import { useAppDispatch } from "@hooks";
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

  const { Group, AddButton } = ControlPanel;

  return (
    <ControlPanel arrange="flex-end">
      <Group>
        <AddButton onClick={showModal} />
      </Group>
    </ControlPanel>
  );
};

export default ScorePanel;
