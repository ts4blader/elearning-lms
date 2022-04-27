import React from "react";

export type ColProps = {
  flex?: number;
} & React.ComponentProps<"div">;

export const Col = ({ flex, children, className = "", ...rest }: ColProps) => {
  return (
    <div
      className={`col ${className}`}
      style={{
        flexGrow: flex,
        flexBasis: "100%",
      }}
      {...rest}
    >
      {children}
    </div>
  );
};
