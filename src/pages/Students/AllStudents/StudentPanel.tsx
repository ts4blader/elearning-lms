import ControlPanel from "@components/ControlPanel";
import Dropdown from "@components/Dropdown";
import { UploadForm, StudentActionForms } from "@components/Forms";
import { useAppDispatch } from "@hooks";
import { Row } from "@layouts/Grid";
import { showFormModal } from "@slices/formModalSlice";
import { Button } from "antd";
import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

const DropdownContent = () => {
  const history = useHistory();
  const { path } = useRouteMatch();

  const dispatch = useAppDispatch();
  const showImport = () =>
    dispatch(
      showFormModal({
        title: "Tải file lên",
        innerForm: UploadForm,
      })
    );
  const showForm = () => history.push(`${path}/add-student`);

  return (
    <div className="dropdown-content-inner">
      <Button onClick={showImport}>Tải file lên</Button>
      <Button onClick={showForm}>Nhập thủ công</Button>
    </div>
  );
};

export default function StudentPanel() {}

StudentPanel.All = () => {
  const { DeleteButton, ExportButton, AddButton } = ControlPanel;

  return (
    <Row gap="1em">
      <DeleteButton
        selectedName="student-table"
        name="học viên"
        onDelete={() => null}
      />
      <div className="divider"></div>
      <ExportButton />
      <Dropdown
        dropdownContent={<DropdownContent />}
        className="in-control-panel"
      >
        <AddButton />
      </Dropdown>
    </Row>
  );
};

const Prized = () => {
  const { AddButton } = ControlPanel;

  const dispatch = useAppDispatch();
  const showForm = () => {
    dispatch(
      showFormModal({
        title: "Cập nhật khen thưởng",
        innerForm: StudentActionForms.Prized,
      })
    );
  };

  return <AddButton onClick={showForm} />;
};

const Disciplined = () => {
  const { AddButton } = ControlPanel;

  const dispatch = useAppDispatch();
  const showForm = () => {
    dispatch(
      showFormModal({
        title: "Cập nhật kỷ luật",
        innerForm: StudentActionForms.Disciplined,
      })
    );
  };

  return <AddButton onClick={showForm} />;
};

StudentPanel.Prized = Prized;
StudentPanel.Disciplined = Disciplined;
