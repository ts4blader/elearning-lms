import React from "react";
import ControlPanel from "@components/ControlPanel";
import Select from "@components/Select";
import { Row } from "@layouts/Grid";
import SubjectForm from "@components/forms/SubjectForm";
import { useAppDispatch } from "@hooks";
import { showFormModal } from "@slices/formModalSlice";
import { showDeleteModal } from "@slices/deleteModalSlice";

const SubjectPanel = () => {
  const dispatch = useAppDispatch();

  const showModal = () => {
    dispatch(
      showFormModal({
        title: "Thêm môn học",
        innerForm: SubjectForm,
      })
    );
  };
  const deleteModal = () => {
    dispatch(
      showDeleteModal({
        name: "môn học",
        onAction: () => null,
      })
    );
  };

  const { AddButton, Group, DeleteButton } = ControlPanel;

  return (
    <ControlPanel arrange="space-between">
      <Group>
        <Row gap="1.5em">
          <Row className="field" gap="0.7em">
            <div className="label">Khối</div>
            <Select keyAffix="grade" data={["6", "7", "8"]} defaultValue="6" />
          </Row>
          <Row className="field" gap="0.5em">
            <div className="label">Lớp</div>
            <Select
              defaultValue="6A"
              keyAffix="class"
              data={["6A", "6B", "6C", "6D"]}
            />
          </Row>
        </Row>
      </Group>
      <Group>
        <Row gap="1em">
          <DeleteButton onClick={deleteModal} />
          <div className="divider"></div>
          <AddButton onClick={showModal} />
        </Row>
      </Group>
    </ControlPanel>
  );
};

export default SubjectPanel;
