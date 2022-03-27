import React, { useState } from "react";
import { Select as AntSelect, SelectProps as AntSelectProps } from "antd";

export type SelectProps = {
  data: string[];
  keyAffix: string;
} & AntSelectProps;

const Select = ({ data, keyAffix, className = "", ...rest }: SelectProps) => {
  const { Option } = AntSelect;

  return (
    <AntSelect
      className={`select ${className}`}
      suffixIcon={<img src="/icons/caret.svg" alt="caret" />}
      {...rest}
    >
      {data.map((item) => (
        <Option
          key={`${item}-${keyAffix}`}
          value={item.toLowerCase().split(" ").join("-")}
        >
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
