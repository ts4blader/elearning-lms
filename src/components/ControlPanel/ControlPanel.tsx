import React, { useMemo } from "react";
import { Button, ButtonProps } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Row, RowProps } from "@layouts/Grid";
import { useAppDispatch, useAppSelector } from "@hooks";
import { showDeleteModal } from "@slices/deleteModalSlice";

export type ControlPanelProps = RowProps;
export type SharedProps = React.ComponentProps<"div">;

type DeleteButtonProps = {
  name: string;
  onDelete: () => void;
  disabled?: boolean;
  selectedName?: string;
} & SharedProps;

const ControlPanel = ({ className = "", children, ...rest }: RowProps) => {
  return (
    <Row className={`control-panel ${className}`} gap="2em" {...rest}>
      {children}
    </Row>
  );
};
const Group = ({ className = "", children, ...rest }: SharedProps) => {
  return (
    <div className={`control-panel-group ${className}`} {...rest}>
      {children}
    </div>
  );
};
//* Buttons
const FeatureButton = (props: ButtonProps) => {
  return (
    <div className="button-wrapper">
      <Button {...props}>{props.children}</Button>
    </div>
  );
};
const AddButton = ({ onClick, className = "", ...rest }: SharedProps) => {
  return (
    <div className="add-btn-wrapper" {...rest}>
      <Button
        className={`add-btn ${className}`}
        type="primary"
        size="large"
        icon={<PlusOutlined />}
        onClick={onClick}
      >
        Thêm mới
      </Button>
    </div>
  );
};
const DeleteButton = ({
  name = "",
  onDelete = () => null,
  disabled = false,
  selectedName = "",
  className = "",
  ...rest
}: DeleteButtonProps) => {
  const dispatch = useAppDispatch();
  const showDelete = () => {
    dispatch(
      showDeleteModal({
        name: name,
        onAction: onDelete,
      })
    );
  };

  const selectedRows = useAppSelector((state) => state.selectedRows);

  const isDisabled = () => {
    let foundItem = selectedRows.find((item) => item.name === selectedName);
    if (foundItem) return foundItem.value.length === 0;
    return false;
  };

  return (
    <div className="delete-btn-wrapper" {...rest}>
      <div
        className="delete-btn"
        onClick={showDelete}
        data-disabled={isDisabled()}
      >
        <DeleteOutlined />
      </div>
    </div>
  );
};
const ExportButton = ({ onClick, className = "", ...rest }: SharedProps) => {
  return (
    <div className="export-btn-wrapper" {...rest}>
      <Button
        className={`export-btn ${className}`}
        type="primary"
        size="large"
        onClick={onClick}
        ghost
      >
        Xuất file
      </Button>
    </div>
  );
};

//* namespace assign
ControlPanel.Group = Group;
ControlPanel.AddButton = AddButton;
ControlPanel.DeleteButton = DeleteButton;
ControlPanel.ExportButton = ExportButton;
ControlPanel.Button = FeatureButton;

export default ControlPanel;
