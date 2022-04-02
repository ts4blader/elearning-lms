import React from "react";
import { Button } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Row, RowProps } from "@layouts/Grid";

export type ControlPanelProps = RowProps;
export type SharedProps = React.ComponentProps<"div">;

const ControlPanel = ({ className = "", children, ...rest }: SharedProps) => {
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
const DeleteButton = ({ onClick, className = "", ...rest }: SharedProps) => {
  return (
    <div className="delete-btn-wrapper" {...rest}>
      <Button
        className={`delete-btn ${className}`}
        type="primary"
        size="large"
        icon={<DeleteOutlined />}
        onClick={onClick}
      ></Button>
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

export default ControlPanel;
