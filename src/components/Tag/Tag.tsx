import React from "react";
import { Tag as AntTag, TagProps as AntTagProps } from "antd";
import Icon from "@assets/Icon";

export type TagProps = {} & AntTagProps;

type StatusTagProps = {
  status: string;
} & TagProps;

type CheckAbleTagProps = {
  className?: string;
  onChange?: (value: boolean) => void;
  onClick?: () => void;
  children?: React.ReactNode;
  checked: boolean;
};

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

Tag.CheckAble = ({ className = "", children, ...rest }: CheckAbleTagProps) => {
  return (
    <AntTag.CheckableTag className={`checkable-tag ${className}`} {...rest}>
      {children}
    </AntTag.CheckableTag>
  );
};

Tag.Closeable = ({ className = "", ...rest }: TagProps) => {
  return (
    <Tag
      closeIcon={<Icon src="cross.svg" alt="close" />}
      className={`tag-closeable ${className}`}
      closable
      {...rest}
    />
  );
};

export default Tag;
