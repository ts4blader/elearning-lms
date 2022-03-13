import React from "react";
import { Select } from "antd";

type Props = {
  data: string[];
  keyAffix: string;
  defaultValue?: string;
  selectConfig?: any;
  className?: string;
};

const Selection = ({
  data,
  className,
  keyAffix,
  defaultValue,
  selectConfig,
}: Props) => {
  return (
    <Select
      className={className}
      {...selectConfig}
      defaultValue={defaultValue ? defaultValue : data[0]}
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
