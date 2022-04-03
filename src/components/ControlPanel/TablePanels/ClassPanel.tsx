import React from "react";
import ControlPanel from "@components/ControlPanel";
import Select from "@components/Select";
import ClassForm from "@components/forms/ClassForm";
import UploadForm from "@components/forms/UploadForm";
import { useAppDispatch } from "@hooks";
import { showFormModal } from "@slices/formModalSlice";
import DropdownActions from "@components/DropdownActions";
import { Row } from "@layouts/Grid";

const ClassPanel = () => {
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
          <DropdownActions
            onManualClick={showForm}
            onImportClick={showImport}
          />
        </Row>
      </Group>
    </ControlPanel>
  );
};

export default ClassPanel;
