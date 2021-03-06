import React from "react";
import Icon from "@assets/Icon";

type ColumnTitleProps = {
  sortColumns: any;
  reactKey: React.Key | undefined;
  text: string;
  align?: "center" | "left" | "right";
};

export const ColumnTitle = ({
  sortColumns,
  reactKey,
  text,
  align = "left",
}: ColumnTitleProps) => {
  const sortedColumn = sortColumns?.find(
    (item: any) => item.column.key === reactKey
  );

  return (
    <div className="column-title" data-align={align}>
      <div className="text">{text}</div>
      <span className="sort-icons">
        {sortedColumn?.order === "ascend" && (
          <Icon src="caret.svg" alt="down" className="down-icon" />
        )}
        {sortedColumn?.order === "descend" && (
          <Icon src="caret.svg" alt="up" className="up-icon" />
        )}
        {sortedColumn?.order === undefined && (
          <div className="full">
            <Icon src="caret.svg" alt="up" className="up-icon" />
            <Icon src="caret.svg" alt="down" className="down-icon" />
          </div>
        )}
      </span>
    </div>
  );
};
