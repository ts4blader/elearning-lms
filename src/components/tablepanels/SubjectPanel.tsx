import React from "react";
import { Button, Divider } from "antd";
import TablePanel from "@components/TablePanel";
import Selection from "@components/Selection";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import SubjectForm from "@components/forms/SubjectForm";
import { useAppDispatch } from "@stores/hooks";
import { showFormModal } from "@slices/formModalSlice";

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

  return (
    <TablePanel>
      <TablePanel.SelectionGrp>
        <TablePanel.Field>
          <div className="label">Khối</div>
          <Selection keyAffix="grade" data={["6", "7", "8"]} />
        </TablePanel.Field>
        <TablePanel.Field>
          <div className="label">Lớp</div>
          <Selection keyAffix="class" data={["6A", "6B", "6C", "6D"]} />
        </TablePanel.Field>
      </TablePanel.SelectionGrp>
      <TablePanel.ButtonGrp>
        <Button className="delete-btn" icon={<DeleteOutlined />}></Button>
        <Divider type="vertical" />
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

export default SubjectPanel;
