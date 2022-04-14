import React from "react";
import { Button, Form, FormItemProps as AntItemProps } from "antd";
import { Row, RowProps } from "@layouts/Grid";
import { PlusCircleFilled, MinusCircleFilled } from "@ant-design/icons";

export type FormItemProps = {} & AntItemProps;

type InlineFieldProps = {} & RowProps;

export type ListItemProps = {
  name: number;
  key: number;
  remove: (index: number | number[]) => void;
};

export type FormListProps = {
  name: string;
  render: React.ComponentType<ListItemProps>;
  className?: string;
  addButtonText: string;
};

export const FormItem = ({
  className = "",
  children,
  ...rest
}: FormItemProps) => {
  return (
    <Form.Item className={`form-item ${className}`} {...rest}>
      {children}
    </Form.Item>
  );
};

export const FormList = ({
  name,
  render,
  addButtonText,
  className = "",
}: FormListProps) => {
  const Component = render;

  return (
    <Form.List name={name}>
      {(fields, { add, remove }) => (
        <div className={`form-list ${className}`}>
          <div className="form-list-inner">
            {fields.map((item) => (
              <Component {...item} remove={remove} />
            ))}
          </div>
          <div className="form-list-control">
            <Button
              type="link"
              className="add-btn"
              onClick={() => add()}
              block
              icon={<PlusCircleFilled />}
            >
              {addButtonText}
            </Button>
          </div>
        </div>
      )}
    </Form.List>
  );
};

FormList.Item = ({
  name,
  remove,
  className = "",
  children,
}: RowProps & ListItemProps) => {
  return (
    <Row gap="1em" className={`form-list-item ${className}`}>
      <div className="remove-btn" onClick={() => remove(name)}>
        <MinusCircleFilled />
      </div>
      {children}
    </Row>
  );
};

FormItem.InlineField = ({
  className = "",
  children,
  ...rest
}: InlineFieldProps) => {
  return (
    <Row
      gap="1.5em"
      align="flex-start"
      className={`inline-field ${className}`}
      {...rest}
    >
      {children}
    </Row>
  );
};

FormItem.Title = ({ children, ...rest }: React.ComponentProps<"div">) => {
  return (
    <div className="form-item-title" {...rest}>
      {children}
    </div>
  );
};
