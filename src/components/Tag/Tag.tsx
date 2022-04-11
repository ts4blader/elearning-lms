import React from "react";
import { Tag as AntTag, TagProps as AntTagProps } from "antd";

export type TagProps = {} & AntTagProps;
type StatusTagProps = {
  status: string;
} & TagProps;

const Tag = ({ children, className = "", ...rest }: TagProps) => {
  return (
    <AntTag {...rest} className={`tag ${className}`}>
      {children}
    </AntTag>
  );
};

Tag.Status = ({
  status,
  children,
  className = "",
  ...rest
}: StatusTagProps) => {
  const statusCode = status.toLowerCase().split(" ").join("-");

  return (
    <Tag
      {...rest}
      icon={<div className="dot"></div>}
      className={`status-tag ${statusCode} ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Tag;
