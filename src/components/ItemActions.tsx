import React from "react";
import { useAppDispatch } from "@stores/hooks";
import { showDeleteModal } from "@slices/deleteModalSlice";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

type Button = {
  className: string;
  icon: typeof EditOutlined;
  onClick: () => void;
};

type Props = {
  name: string;
  onDelete: () => void;
  onEdit: () => void;
  buttons?: Button[];
  editIcon?: typeof EditOutlined;
  deleteIcon?: typeof EditOutlined;
};

const ItemActions = ({
  name,
  onDelete,
  onEdit,
  buttons,
  editIcon = EditOutlined,
  deleteIcon = DeleteOutlined,
}: Props) => {
  const EditIcon = editIcon;
  const DeleteIcon = deleteIcon;
  const dispatch = useAppDispatch();
  return (
    <div className="item-actions">
      {buttons?.map((item) => (
        <span
          key={`item-action-${item.className}`}
          className={item.className}
          onClick={item.onClick}
        >
          <item.icon />
        </span>
      ))}
      <span className="edit-btn">
        <EditIcon />
      </span>
      <span
        className="delete-btn"
        onClick={() =>
          dispatch(
            showDeleteModal({
              onAction: onDelete,
              name: name,
            })
          )
        }
      >
        <DeleteIcon />
      </span>
    </div>
  );
};

export default ItemActions;
