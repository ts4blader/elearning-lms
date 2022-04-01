import React from "react";
import { Property } from "csstype";

export type RowProps = {
  gapX?: string;
  gapY?: string;
  gap?: Property.Gap;
  align?: Property.AlignItems;
  direction?: Property.FlexDirection;
} & React.ComponentProps<"div">;

const Row = ({
  className = "",
  children,
  gap,
  gapX,
  gapY,
  align = "center",
  direction = "row",
  ...rest
}: RowProps) => {
  const style = {
    gap,
    alignItems: align,
    rowGap: gapX,
    columnGap: gapY,
    display: "flex",
    flexDirection: direction,
  };

  return (
    <div className={`row ${className}`} style={style} {...rest}>
      {children}
    </div>
  );
};

export default Row;
