import React, { useEffect, useState } from "react";
import { Row } from "@layouts/Grid";

export type TabsProps = {
  onChange?: (index: number) => void;
  data: string[];
  keyAffix: string;
  variant?: "normal" | "separate";
} & Omit<React.ComponentProps<"div">, "onChange">;

const Tabs = ({
  onChange,
  data,
  variant = "normal",
  className = "",
  keyAffix,
  ...rest
}: TabsProps) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (onChange) onChange(active);
  }, [active, onChange]);

  return (
    <div className={`tabs ${className}`} data-variant={variant} {...rest}>
      <Row className="tabs-inner">
        {data.map((item, index) => (
          <div
            className="tabs-item"
            key={`${index}-${keyAffix}`}
            onClick={() => setActive(index)}
            data-active={active === index}
          >
            {item}
          </div>
        ))}
      </Row>
    </div>
  );
};

export default Tabs;
