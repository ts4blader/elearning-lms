import React, { useMemo, useState } from "react";
import ControlPanel from "@components/ControlPanel";
import Select from "@components/Select";
import { Row } from "@layouts/Grid";
import { SubjectForm } from "@components/Forms";
import { useAppDispatch, useAppSelector } from "@hooks";
import { showFormModal } from "@slices/formModalSlice";
import { showDeleteModal } from "@slices/deleteModalSlice";
import { removeSubject } from "@slices/subjectSlice";
import { resetSelectedRow } from "@slices/selectedRowsSlice";

const SubjectPanel = () => {
  const { AddButton, Group, DeleteButton } = ControlPanel;
  // redux hook
  const dispatch = useAppDispatch();
  const grade = useAppSelector((state) => state.grade);
  const classData = useAppSelector((state) => state.class);
  const selectedRows = useAppSelector((state) => state.selectedRows);
  // dispatch method
  const showModal = () => {
    dispatch(
      showFormModal({
        title: "Thêm môn học",
        innerForm: SubjectForm,
      })
    );
  };
  const onDelete = () => {
    let subjectsId = selectedRows.find((item) => item.name === "subject-table");
    //* remove subject
    subjectsId?.value.forEach((item) => dispatch(removeSubject(item.id)));
    //* clear the selected rows
    dispatch(resetSelectedRow("subject-table"));
  };
  //* state define
  const [selectedGrade, setSelectedGrade] = useState(grade.value[0].id);
  // get derived data
  const gradeClass = useMemo(() => {
    return classData.value.filter((item) => item.gradeId === selectedGrade);
  }, [selectedGrade, classData]);

  return (
    <ControlPanel arrange="space-between">
      <Group>
        <Row gap="1.5em">
          <Row className="field" gap="0.7em">
            <div className="label">Khối</div>
            <Select
              defaultValue={selectedGrade}
              onChange={(value) => setSelectedGrade(value)}
            >
              {grade.value.map((item) => (
                <Select.Option value={item.id} key={item.id}>
                  {`Khối ${item.name}`}
                </Select.Option>
              ))}
            </Select>
          </Row>
          <Row className="field" gap="0.5em">
            <div className="label">Lớp</div>
            <Select value={gradeClass[0]?.id}>
              {gradeClass?.map((item) => (
                <Select.Option value={item.id} key={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Row>
        </Row>
      </Group>
      <Group>
        <Row gap="1em">
          <DeleteButton
            name="môn học"
            onDelete={onDelete}
            selectedName="subject-table"
          />
          <div className="divider"></div>
          <AddButton onClick={showModal} />
        </Row>
      </Group>
    </ControlPanel>
  );
};

export default SubjectPanel;
