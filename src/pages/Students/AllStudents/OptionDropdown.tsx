import React, { useState } from "react";
import { Dropdown } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@hooks";
import { showFormModal } from "@slices/formModalSlice";
import { StudentActionForms } from "@components/Forms";
import { useHistory, useRouteMatch } from "react-router-dom";

type OverlayProps = {
  onItemClick: () => void;
  studentId: string;
};

type OptionDropdownProps = {
  studentId: string;
};

const Overlay = ({ onItemClick, studentId }: OverlayProps) => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { url } = useRouteMatch();
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
    <ul className="option-dropdown-overlay">
      <li onClick={() => history.push(`${url}/${studentId}/edit`)}>
        Sửa hồ sơ
      </li>
      <li
        onClick={() => {
          showModal("Cap nhat chuyen lop", StudentActionForms.ClassTransfer);
        }}
      >
        Chuyển lớp
      </li>
      <li
        onClick={() =>
          showModal("Cap nhat chuyen truong", StudentActionForms.SchoolTransfer)
        }
      >
        Chuyển trường
      </li>
      <li
        onClick={() =>
          showModal("Cap nhat bao luu", StudentActionForms.Reserve)
        }
      >
        Bảo lưu
      </li>
      <li
        onClick={() =>
          showModal("Cap nhat mien giam", StudentActionForms.Discount)
        }
      >
        Cập nhật miễn giảm
      </li>
      <li
        onClick={() =>
          showModal("Cap nhat khen thuong", StudentActionForms.Prized)
        }
      >
        Cập nhật khen thưởng
      </li>
      <li
        onClick={() =>
          showModal("Cap nhat ky luat", StudentActionForms.Disciplined)
        }
      >
        Cập nhật kỷ luật
      </li>
    </ul>
  );
};

const OptionDropdown = ({ studentId }: OptionDropdownProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <Dropdown
      destroyPopupOnHide={true}
      overlay={
        <Overlay onItemClick={() => setVisible(false)} studentId={studentId} />
      }
      trigger={["click"]}
      visible={visible}
      onVisibleChange={(value) => setVisible(value)}
    >
      <SyncOutlined />
    </Dropdown>
  );
};

export default OptionDropdown;
