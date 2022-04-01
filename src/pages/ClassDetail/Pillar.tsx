import React from "react";
import { Space } from "antd";

type PillarProps = {
  data: any[];
};

const Pillar = ({ data }: PillarProps) => {
  return (
    <ul className="pillar">
      {data.map((item) => (
        <li className="pillar-item" key={item.key}>
          <Space size={20} align="start">
            <div className="label">{item.key}</div>
            <div className="value">{item.value}</div>
          </Space>
        </li>
      ))}
    </ul>
  );
};

export default Pillar;
