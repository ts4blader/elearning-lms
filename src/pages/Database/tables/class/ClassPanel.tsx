import React from "react";
import ControlPanel from "@components/ControlPanel";
import Select from "@components/Select";
import { ClassForm, UploadForm } from "@components/Forms";
import { useAppDispatch } from "@hooks";
import { showFormModal } from "@slices/formModalSlice";
import Dropdown from "@components/Dropdown";
import { Row } from "@layouts/Grid";
import { Button } from "antd";

const DropdownContent = () => {
  const dispatch = useAppDispatch();
  const showForm = () => {
    dispatch(
      showFormModal({
        title: "Thêm lớp học",
        innerForm: ClassForm,
      })
    );
  };
  const showImport = () => {
    dispatch(
      showFormModal({
        title: "Tải file lên",
        innerForm: UploadForm,
      })
    );
  };

  return (
    <div className="dropdown-content-inner">
      <Button onClick={showImport}>Tải file lên</Button>
      <Button onClick={showForm}>Nhập thủ công</Button>
    </div>
  );
};

const ClassPanel = () => {
  const { Group, AddButton, ExportButton, DeleteButton } = ControlPanel;

  return (
    <ControlPanel arrange="space-between">
      <Group>
        <Select
          keyAffix="grade"
          data={["Tất cả các khối", "Khối 6", "Khối 7", "Khối 8"]}
          defaultValue="Tất cả các khối"
        />
      </Group>
      <Group>
        <Row gap="1em">
          <DeleteButton />
          <div className="divider"></div>
          <ExportButton />
          <Dropdown
            dropdownContent={<DropdownContent />}
            className="in-control-panel"
          >
            <AddButton />
          </Dropdown>
        </Row>
      </Group>
    </ControlPanel>
  );
};

export default ClassPanel;
