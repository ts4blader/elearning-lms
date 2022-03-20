import React from "react";
import { Select, SelectProps } from "antd";

type Props = {
  data: string[];
  keyAffix: string;
} & SelectProps;

const Selection = ({ data, keyAffix, className = "", ...rest }: Props) => {
  return (
    <Select
      {...rest}
      className={`selection ${className}`}
      suffixIcon={<img src="/icons/caret.svg" alt="caret" />}
    >
      {data.map((item) => (
        <Select.Option key={`item-${keyAffix}`} value={item}>
          {item}
        </Select.Option>
      ))}
    </Select>
  );
};

export default Selection;
