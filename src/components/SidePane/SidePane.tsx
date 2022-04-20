import React, { useEffect, useState } from "react";

type HeadProps = {
  title: string;
} & React.ComponentProps<"div">;

type BodyProps = {
  data: string[];
  onChange: (index: number, value?: string) => void;
} & Omit<React.ComponentProps<"ul">, "onChange">;

export type SidePaneProps = {} & React.ComponentProps<"div">;

const SidePane = ({ children, className = "", ...rest }: SidePaneProps) => {
  return (
    <div className={`side-pane ${className}`} {...rest}>
      {children}
    </div>
  );
};

const Head = ({ title, children, ...rest }: HeadProps) => {
  return (
    <div className="side-pane-head" {...rest}>
      <h4 className="side-pane-head-title">{title}</h4>
      {children}
    </div>
  );
};
const Body = ({ onChange, data, ...rest }: BodyProps) => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    onChange(selected);
  }, [selected, onChange]);

  return (
    <ul className="side-pane-body" {...rest}>
      {data.map((item, index) => (
        <li
          className="side-pane-body-item"
          key={item}
          data-selected={selected === index}
          onClick={() => setSelected(index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

SidePane.Head = Head;
SidePane.Body = Body;

export default SidePane;
