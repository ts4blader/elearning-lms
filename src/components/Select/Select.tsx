import React from "react";
import { Select as AntSelect, SelectProps as AntSelectProps } from "antd";
import Icon from "@assets/Icon";
import { BaseSelectRef } from "rc-select";

export type SelectProps = {
  data: string[];
  keyAffix: string;
  inputRef?: React.Ref<BaseSelectRef>;
} & AntSelectProps;

const Select = ({
  inputRef,
  data,
  keyAffix,
  className = "",
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
      {data.map((item, index) => (
        <Option key={`${index}-${keyAffix}`} value={item}>
          {item}
        </Option>
      ))}
    </AntSelect>
  );
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

export default Select;
