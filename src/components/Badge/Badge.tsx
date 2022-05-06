import React from "react";
import { Badge as AntBagde, BadgeProps as AntBagdeProps } from "antd";

export type BadgeProps = {} & AntBagdeProps;

type PillBadgeProps = {
  type: "warning" | "success" | "error" | "default" | "processing";
  children?: React.ReactNode;
} & React.ComponentProps<"div">;

const Badge = ({ className = "", ...rest }: BadgeProps) => {
  return <AntBagde className="badge" {...rest} data-type={rest.status} />;
};

const Title = (props: React.ComponentProps<"div">) => {
  return (
    <div className="badge-title" {...props}>
      {props.children}
    </div>
  );
};

const Content = (props: React.ComponentProps<"div">) => {
  return (
    <div className="badge-content" {...props}>
      {props.children}
    </div>
  );
};

const PillBadge = ({
  type = "default",
  className = "",
  children,
  ...rest
}: PillBadgeProps) => {
  return (
    <div className={`badge-pill ${className}`} data-type={type} {...rest}>
      {children}
    </div>
  );
};

Badge.PillBadge = PillBadge;
Badge.Title = Title;
Badge.Content = Content;

export default Badge;
