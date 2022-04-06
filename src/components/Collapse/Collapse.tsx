import React from "react";
import {
  Collapse as AntCollapse,
  CollapseProps as AntCollapseProps,
  CollapsePanelProps as AntPanelProps,
} from "antd";
import Icon from "@assets/Icon";

export type CollapseProps = {
  children: React.ReactNode;
} & AntCollapseProps;
export type PanelProps = {
  children: React.ReactNode;
} & AntPanelProps;

const Collapse = ({ children, className = "", ...rest }: CollapseProps) => {
  return (
    <AntCollapse
      expandIcon={() => <Icon src="caret.svg" alt="caret" />}
      className={`collapse ${className}`}
      {...rest}
    >
      {children}
    </AntCollapse>
  );
};

Collapse.Panel = ({ className = "", children, ...rest }: PanelProps) => {
  const { Panel } = AntCollapse;

  return (
    <Panel {...rest} className="collapse-item">
      {children}
    </Panel>
  );
};

export default Collapse;
