import React from "react";

export type ColProps = {
  flex?: number;
} & React.ComponentProps<"div">;

export const Col = ({ flex, className = "", ...rest }: ColProps) => {
  return <div className={`col ${className}`} style={{ flex }} {...rest}></div>;
};
