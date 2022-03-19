import React from "react";
import { Select, SelectProps } from "antd";

type Props = {
  data: string[];
  keyAffix: string;
} & SelectProps;

const Selection = ({ data, keyAffix, ...rest }: Props) => {
  return (
    <Select {...rest}>
      {data.map((item) => (
        <Select.Option key={`item-${keyAffix}`} value={item}>
          {item}
        </Select.Option>
      ))}
    </Select>
  );
};

export default Selection;
