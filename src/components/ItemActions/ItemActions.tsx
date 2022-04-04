import React from "react";
import { useAppDispatch } from "@hooks";
import { showDeleteModal } from "@slices/deleteModalSlice";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { showFormModal } from "@slices/formModalSlice";

type ButtonProps = {
  className: string;
  icon: typeof EditOutlined;
  onClick: () => void;
};

type DeleteButtonProps = {
  icon?: typeof EditOutlined;
  deleteName: string;
  onDelete: () => void;
};

type EditButtonProps = {
  icon?: typeof EditOutlined;
  title: string;
  innerForm: React.ComponentType<any>;
};

type MainProps = {
  children: React.ReactNode;
};

const ItemActions = ({ children }: MainProps) => {
  return <div className="item-actions">{children && children}</div>;
};

const DeleteButton = ({
  icon = DeleteOutlined,
  onDelete = () => null,
  deleteName,
}: DeleteButtonProps) => {
  const dispatch = useAppDispatch();

  return (
    <ItemActions.Button
      icon={icon}
      className="delete-btn"
      onClick={() =>
        dispatch(
          showDeleteModal({
            onAction: onDelete,
            name: deleteName,
          })
        )
      }
    />
  );
};

const EditButton = ({
  icon = EditOutlined,
  title,
  innerForm,
}: EditButtonProps) => {
  const dispatch = useAppDispatch();
  return (
    <ItemActions.Button
      className="edit-btn"
      icon={icon}
      onClick={() =>
        dispatch(
          showFormModal({
            title,
            innerForm,
          })
        )
      }
    />
  );
};

ItemActions.Button = ({ icon, className, onClick }: ButtonProps) => {
  const Icon = icon;

  return (
    <span className={className} onClick={onClick}>
      <Icon />
    </span>
  );
};

ItemActions.DeleteButton = DeleteButton;
ItemActions.EditButton = EditButton;

export default ItemActions;
