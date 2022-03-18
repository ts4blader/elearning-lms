import React from "react";

type Props = {
  className?: string;
} & React.ComponentProps<"div">;

const TablePanel = ({ children, className = "", ...rest }: Props) => {
  return (
    <div className={`table-panel ${className}`} {...rest}>
      {children}
    </div>
  );
};

TablePanel.SelectionGrp = ({ children, className = "", ...rest }: Props) => {
  return (
    <div className={`selection-grp ${className}`} {...rest}>
      {children}
    </div>
  );
};

TablePanel.Field = ({ children, className = "", ...rest }: Props) => {
  return (
    <div className={`field ${className}`} {...rest}>
      {children}
    </div>
  );
};

TablePanel.ButtonGrp = ({ children, className = "", ...rest }: Props) => {
  return (
    <div className={`btn-grp ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default TablePanel;
