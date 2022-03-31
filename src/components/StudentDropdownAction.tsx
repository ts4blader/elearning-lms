import React, { useState } from "react";
import { Dropdown } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@stores/hooks";
import { showFormModal } from "@slices/formModalSlice";
import StudentForm from "@components/forms/StudentActionForms";

type OverlayProps = {
  onItemClick: () => void;
};

const Overlay = ({ onItemClick }: OverlayProps) => {
  const dispatch = useAppDispatch();
  const showModal = (title: string, innerForm: any) => {
    onItemClick();
    dispatch(
      showFormModal({
        innerForm,
        title,
      })
    );
  };

  return (
    <ul className="edit-student-dropdown-overlay">
      <li onClick={() => null}>Sửa hồ sơ</li>
      <li
        onClick={() => {
          showModal("Cap nhat chuyen lop", StudentForm.ClassTransfer);
        }}
      >
        Chuyển lớp
      </li>
      <li
        onClick={() =>
          showModal("Cap nhat chuyen truong", StudentForm.SchoolTransfer)
        }
      >
        Chuyển trường
      </li>
      <li onClick={() => showModal("Cap nhat bao luu", StudentForm.Reserve)}>
        Bảo lưu
      </li>
      <li onClick={() => showModal("Cap nhat mien giam", StudentForm.Discount)}>
        Cập nhật miễn giảm
      </li>
      <li onClick={() => showModal("Cap nhat khen thuong", StudentForm.Prized)}>
        Cập nhật khen thưởng
      </li>
      <li
        onClick={() => showModal("Cap nhat ky luat", StudentForm.Disciplined)}
      >
        Cập nhật kỷ luật
      </li>
    </ul>
  );
};

const StudentDropdownAction = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Dropdown
      destroyPopupOnHide={true}
      overlay={<Overlay onItemClick={() => setVisible(false)} />}
      trigger={["click"]}
      visible={visible}
      onVisibleChange={(value) => setVisible(value)}
    >
      <SyncOutlined />
    </Dropdown>
  );
};

export default StudentDropdownAction;
