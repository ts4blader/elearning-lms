import React from "react";
import { Property } from "csstype";

export type RowProps = {
  gap?: Property.Gap;
  align?: Property.AlignItems;
  arrange?: Property.JustifyContent;
  direction?: Property.FlexDirection;
} & React.ComponentProps<"div">;

export const Row = ({
  className = "",
  children,
  gap,
  align = "center",
  direction = "row",
  arrange,
  ...rest
}: RowProps) => {
  const style = {
    gap,
    alignItems: align,
    display: "flex",
    flexDirection: direction,
    justifyContent: arrange,
  };

  return (
    <div className={`row ${className}`} style={style} {...rest}>
      {children}
    </div>
  );
};
