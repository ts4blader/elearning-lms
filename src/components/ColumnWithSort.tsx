import React from "react";
import { Table } from "antd";
import ColumnTitle from "@components/ColumnTitle";

type ColumnProps = {
  titleText: string;
  key: React.Key | undefined;
} & React.ComponentProps<typeof Table.Column>;

const ColumnWithSort = ({ titleText, ...rest }: ColumnProps) => {
  return (
    <Table.Column
      {...rest}
      title={({ sortColumns }) => (
        <ColumnTitle
          reactKey={rest.key}
          sortColumns={sortColumns}
          text={titleText}
        />
      )}
      key={rest.key}
    />
  );
};

export default ColumnWithSort;
