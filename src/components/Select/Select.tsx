import React from "react";
import { Select as AntSelect } from "antd";
import Icon from "@assets/Icon";
import Tag from "@components/Tag";
import { SelectProps, SelectOptionProps } from "@types";

const Select = ({
  inputRef,
  data,
  keyAffix = "",
  className = "",
  children,
  ...rest
}: SelectProps) => {
  const { Option } = AntSelect;

  return (
    <AntSelect
      ref={inputRef}
      className={`select ${className}`}
      suffixIcon={<Icon src="caret.svg" alt="caret" />}
      {...rest}
    >
      {data
        ? data.map((item, index) => (
            <Option key={`${index}-${keyAffix}`} value={item}>
              {item}
            </Option>
          ))
        : children}
    </AntSelect>
  );
};

const Option = ({ children, ...rest }: SelectOptionProps) => {
  return <AntSelect.Option {...rest}>{children}</AntSelect.Option>;
};

export const SelectInForm = (props: SelectProps) => {
  return (
    <Select
      size="large"
      className={`select-inform ${props.value ? "not-empty" : ""}`}
      {...props}
    />
  );
};

const MultiSelect = ({ className = "", data, ...rest }: SelectProps) => {
  const mappedData = data?.map((item) => {
    return {
      value: item,
      label: item,
    };
  });

  return (
    <AntSelect
      className={`select-multi ${className}`}
      mode="multiple"
      size="large"
      options={mappedData}
      tagRender={(props) => (
        <Tag.Closeable onClose={props.onClose}>{props.label}</Tag.Closeable>
      )}
      {...rest}
    />
  );
};

Select.Multi = MultiSelect;
Select.Option = Option;

export default Select;
