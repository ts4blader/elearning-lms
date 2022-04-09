import React from "react";
import { Button, ButtonProps } from "antd";
import { Row, RowProps } from "@layouts/Grid";

type FormButtonProps = {} & ButtonProps;
type ContainerProps = RowProps;

export const FormButton = ({
  children,
  className = "",
  ...rest
}: FormButtonProps) => {
  return (
    <Button {...rest} className={`form-btn ${className}`} size="large">
      {children}
    </Button>
  );
};

FormButton.CancelButton = ({
  children = "Hủy",
  className = "",
  ...rest
}: FormButtonProps) => {
  return (
    <FormButton {...rest} className="cancel-btn">
      {children}
    </FormButton>
  );
};
FormButton.SaveButton = ({
  children = "Lưu",
  className = "",
  ...rest
}: FormButtonProps) => {
  return (
    <FormButton {...rest} className="save-btn" htmlType="submit" type="primary">
      {children}
    </FormButton>
  );
};

FormButton.Container = ({ children, ...rest }: ContainerProps) => {
  return (
    <Row {...rest} className="form-btn-container" gap="2em" arrange="center">
      {children}
    </Row>
  );
};
