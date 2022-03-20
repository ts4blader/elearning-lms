import React from "react";

type ColumnTitleProps = {
  sortColumns: any;
  reactKey: React.Key | undefined;
  text: string;
};

const ColumnTitle = ({ sortColumns, reactKey, text }: ColumnTitleProps) => {
  const sortedColumn = sortColumns?.find(
    (item: any) => item.column.key === reactKey
  );

  return (
    <div className="column-title">
      <div className="text">{text}</div>
      <span className="sort-icons">
        {sortedColumn?.order === "ascend" && (
          <img src="/icons/caret.svg" alt="down" className="down-icon" />
        )}
        {sortedColumn?.order === "descend" && (
          <img src="/icons/caret.svg" alt="up" className="up-icon" />
        )}
        {sortedColumn?.order === undefined && (
          <div className="full">
            <img src="/icons/caret.svg" alt="up" className="up-icon" />
            <img src="/icons/caret.svg" alt="down" className="down-icon" />
          </div>
        )}
      </span>
    </div>
  );
};

export default ColumnTitle;
