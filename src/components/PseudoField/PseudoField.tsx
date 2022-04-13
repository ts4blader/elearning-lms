import { Row, RowProps } from "@layouts/Grid";
import React from "react";

type PseudoFieldProps = {
  label: string;
} & RowProps;

const PseudoField = ({
  label,
  children,
  className = "",
  ...rest
}: PseudoFieldProps) => {
  return (
    <Row className={`pseudo-field ${className}`} {...rest}>
      <div className="pseudo-field-label">{label && label + ":"}</div>
      <div className="pseudo-field-control">{children}</div>
    </Row>
  );
};

export default PseudoField;
