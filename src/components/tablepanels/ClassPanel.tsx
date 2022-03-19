import React from "react";
import TablePanel from "@components/TablePanel";
import Selection from "@components/Selection";
import { Button, Divider } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import ClassForm from "@components/forms/ClassForm";
import { useAppDispatch } from "@stores/hooks";
import { showFormModal } from "@slices/formModalSlice";

const ClassPanel = () => {
  const dispatch = useAppDispatch();
  const showModal = () => {
    dispatch(
      showFormModal({
        title: "Thêm lớp học",
        innerForm: ClassForm,
      })
    );
  };

  return (
    <TablePanel>
      <TablePanel.SelectionGrp>
        <TablePanel.Field>
          <Selection
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
        <Button
          className="add-btn"
          type="primary"
          size="large"
          icon={<PlusOutlined />}
          onClick={showModal}
        >
          Thêm mới
        </Button>
      </TablePanel.ButtonGrp>
    </TablePanel>
  );
};

export default ClassPanel;
