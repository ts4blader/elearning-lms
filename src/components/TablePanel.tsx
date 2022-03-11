import React from "react";
import { Modal } from "antd";

type Props = {
  className?: string;
} & React.ComponentProps<"div">;

type Additional = {
  innerForm: React.ComponentType<any>;
  show: boolean;
  onCancel: () => void;
  popUpTitle: string;
};

const TablePanel = ({
  children,
  className,
  innerForm,
  show,
  onCancel,
  popUpTitle,
  ...rest
}: Props & Additional) => {
  const Form = innerForm;

  return (
    <>
      <Modal
        title={popUpTitle}
        visible={show}
        onCancel={onCancel}
        footer={<></>}
        centered={true}
      >
        <Form onCancel={onCancel} />
      </Modal>
      <div className={`table-panel ${className}`} {...rest}>
        {children}
      </div>
    </>
  );
};

TablePanel.SelectionGrp = ({ children, className, ...rest }: Props) => {
  return (
    <div className={`selection-grp ${className}`} {...rest}>
      {children}
    </div>
  );
};

TablePanel.Field = ({ children, className, ...rest }: Props) => {
  return (
    <div className={`field ${className}`} {...rest}>
      {children}
    </div>
  );
};

TablePanel.ButtonGrp = ({ children, className, ...rest }: Props) => {
  return (
    <div className={`btn-grp ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default TablePanel;
