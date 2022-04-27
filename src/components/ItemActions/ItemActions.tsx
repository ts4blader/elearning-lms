import React from "react";
import { useAppDispatch } from "@hooks";
import { showDeleteModal } from "@slices/deleteModalSlice";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { showFormModal } from "@slices/formModalSlice";
import { useHistory } from "react-router-dom";

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

type DetailButtonProps = {
  icon?: typeof EditOutlined;
  to: string;
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

const DetailButton = ({ to, icon = EyeOutlined }: DetailButtonProps) => {
  const history = useHistory();

  return (
    <ItemActions.Button
      className="detail-btn"
      icon={icon}
      onClick={() => history.push(to)}
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
ItemActions.DetailButton = DetailButton;

export default ItemActions;
