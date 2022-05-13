import React from "react";
import { Select as AntSelect } from "antd";
import Icon from "@assets/Icon";
import Tag from "@components/Tag";
import { SelectProps, SelectOptionProps, SelectIdProps } from "@types";
import Item from "antd/lib/list/Item";

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

const Search = ({ className = "", children, ...rest }: SelectProps) => {
  return (
    <SelectInForm
      className={`select-search ${className}`}
      showSearch
      optionFilterProp="children"
      filterOption={(input, option) =>
        option?.children
          ?.toString()
          .toLowerCase()
          .includes(input.toLowerCase()) || false
      }
      {...rest}
    >
      {children}
    </SelectInForm>
  );
};

const Option = ({ children, ...rest }: SelectOptionProps) => {
  return <AntSelect.Option {...rest}>{children}</AntSelect.Option>;
};

export const SelectInForm = ({ className = "", ...rest }: SelectProps) => {
  return (
    <Select
      size="large"
      className={`select-inform ${rest.value ? "not-empty" : ""} ${className}`}
      {...rest}
    >
      {rest.children}
    </Select>
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

const SelectId = ({
  renderChild,
  variant = "origin",
  className = "",
  data = [],
  ...rest
}: SelectIdProps) => {
  const Component = renderChild;

  return (
    <Select className={`select-id ${className} select-${variant}`} {...rest}>
      {data.map((el) => (
        <Select.Option value={el.id} key={el.id}>
          {Component ? <Component record={el} /> : el.name}
        </Select.Option>
      ))}
    </Select>
  );
};

Select.Multi = MultiSelect;
Select.Option = Option;
Select.Search = Search;

export default Select;
