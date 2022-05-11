import React, { useCallback, useMemo } from "react";
import ControlPanel from "@components/ControlPanel";
import Select from "@components/Select";
import { ClassForm, UploadForm } from "@components/Forms";
import { useAppDispatch, useAppSelector } from "@hooks";
import { showFormModal } from "@slices/formModalSlice";
import Dropdown from "@components/Dropdown";
import { Row } from "@layouts/Grid";
import { Button } from "antd";
import { removeClass } from "@slices/classSlice";
import { resetSelectedRow } from "@slices/selectedRowsSlice";

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

  // redux hook
  const dispatch = useAppDispatch();
  const grade = useAppSelector((state) => state.grade);
  const selectedRows = useAppSelector((state) => state.selectedRows);
  // inview methods
  const deleteSelected = useCallback(() => {
    let rows = selectedRows.find((item) => item.name === "class-table");

    //* remove class
    rows?.value.forEach((item) => dispatch(removeClass(item.id)));

    //* clear the selected rows
    dispatch(resetSelectedRow("class-table"));
  }, [selectedRows]);

  return (
    <ControlPanel arrange="space-between">
      <Group>
        <Select defaultValue={"Tất cả các khối"}>
          {grade.value.map((item) => (
            <Select.Option
              value={item.id}
              key={item.id}
            >{`Khối ${item.name}`}</Select.Option>
          ))}
        </Select>
      </Group>
      <Group>
        <Row gap="1em">
          <DeleteButton
            name="học viên"
            onDelete={deleteSelected}
            selectedName="class-table"
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
      </Group>
    </ControlPanel>
  );
};

export default ClassPanel;
