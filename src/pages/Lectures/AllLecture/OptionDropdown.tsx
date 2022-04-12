import { useAppDispatch } from "@hooks";
import React, { useState } from "react";
import { Dropdown } from "antd";
import { showFormModal } from "@slices/formModalSlice";
import { useHistory, useRouteMatch } from "react-router-dom";
import { SyncOutlined } from "@ant-design/icons";

type OverlayProps = {
  onItemClick: () => void;
  lectureId: string;
};

type OptionDropdownProps = {
  lectureId: string;
};

const Overlay = ({ onItemClick, lectureId }: OverlayProps) => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { url } = useRouteMatch();
  const showModal = (title: string, innerForm: React.ComponentType<any>) => {
    onItemClick();
    dispatch(
      showFormModal({
        title,
        innerForm,
      })
    );
  };

  return (
    <ul className="option-dropdown-overlay">
      <li onClick={() => history.push(`${url}/${lectureId}/edit`)}>
        Sửa hồ sơ
      </li>
      <li onClick={() => showModal("Cập nhật nghỉ hưu", () => null)}>
        Cập nhật nghỉ hưu
      </li>
      <li onClick={() => showModal("Cập nhật nghỉ việc", () => null)}>
        Cập nhật nghỉ việc
      </li>
      <li onClick={() => showModal("Cập nhật tạm nghỉ", () => null)}>
        Cập nhật tạm nghỉ
      </li>
    </ul>
  );
};

export const OptionDropdown = ({ lectureId }: OptionDropdownProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <Dropdown
      overlay={
        <Overlay lectureId={lectureId} onItemClick={() => setVisible(false)} />
      }
      trigger={["click"]}
      visible={visible}
      onVisibleChange={(value) => setVisible(value)}
    >
      <SyncOutlined />
    </Dropdown>
  );
};
