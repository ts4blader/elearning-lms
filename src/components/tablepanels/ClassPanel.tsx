import React from "react";
import TablePanel from "@components/TablePanel";
import Select from "@components/Select";
import { Button, Divider } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import ClassForm from "@components/forms/ClassForm";
import UploadForm from "@components/forms/UploadForm";
import { useAppDispatch } from "@hooks";
import { showFormModal } from "@slices/formModalSlice";
import DropdownActions from "@components/DropdownActions";

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

  return (
    <TablePanel>
      <TablePanel.SelectionGrp>
        <TablePanel.Field>
          <Select
            keyAffix="grade"
            data={["Tất cả các khối", "Khối 6", "Khối 7", "Khối 8"]}
            defaultValue="Tất cả các khối"
          />
        </TablePanel.Field>
      </TablePanel.SelectionGrp>
      <TablePanel.ButtonGrp>
        <Button className="delete-btn" icon={<DeleteOutlined />}></Button>
        <Divider type="vertical" />
        <Button className="export-btn" type="primary" size="large" ghost>
          Xuất file
        </Button>
        <DropdownActions onManualClick={showForm} onImportClick={showImport} />
      </TablePanel.ButtonGrp>
    </TablePanel>
  );
};

export default ClassPanel;
