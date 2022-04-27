import React from "react";
import Field from "@components/PseudoField";

type PillarProps = {
  data: {
    label: string;
    value: string;
  }[];
};

const Pillar = ({ data }: PillarProps) => {
  return (
    <ul className="pillar">
      {data.map((item) => (
        <li className="pillar-item" key={item.label}>
          <Field label={item.label} align="flex-start">
            {item.value}
          </Field>
        </li>
      ))}
    </ul>
  );
};

export default Pillar;
