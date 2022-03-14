import React from "react";
import { useAppDispatch } from "@stores/hooks";
import { showDeleteModal } from "@slices/deleteModalSlice";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

type Additional = {
  className: string;
  icon: typeof EditOutlined;
  onClick: () => void;
};

type Props = {
  name: string;
  onDelete: () => void;
  onEdit: () => void;
  buttons?: Additional[];
};

const ItemActions = ({ name, onDelete, onEdit, buttons }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="item-actions">
      {buttons?.map((item) => (
        <span className={item.className} onClick={item.onClick}>
          <item.icon />
        </span>
      ))}
      <span
        className="edit-btn"
        onClick={() =>
          dispatch(
            showDeleteModal({
              onAction: onDelete,
              name: name,
            })
          )
        }
      >
        <EditOutlined />
      </span>
      <span className="delete-btn">
        <DeleteOutlined />
      </span>
    </div>
  );
};

export default ItemActions;
