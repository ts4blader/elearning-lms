import React from "react";
import { Button, ButtonProps } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Row, RowProps } from "@layouts/Grid";

export type ControlPanelProps = RowProps;
export type SharedProps = React.ComponentProps<"div">;

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
const DeleteButton = ({ className = "", ...rest }: SharedProps) => {
  return (
    <div className="delete-btn-wrapper" {...rest}>
      <div className="delete-btn">
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
