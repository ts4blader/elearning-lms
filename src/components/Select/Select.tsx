import React from "react";
import { Select as AntSelect, SelectProps as AntSelectProps } from "antd";
import Icon from "@assets/Icon";
import { BaseSelectRef } from "rc-select";
import Tag from "@components/Tag";

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

const MultiSelect = ({ className = "", data, ...rest }: SelectProps) => {
  const mappedData = data.map((item) => {
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

export default Select;
