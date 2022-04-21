import React, { useState } from "react";
import {
  Table as AntTable,
  TableProps as AntTableProps,
  TableColumnProps,
} from "antd";
import { useAppSelector } from "@hooks";
import { ColumnTitle } from "./ColumnTitle";

export type TableProps = {
  countColumn?: boolean;
  selectColumn?: boolean;
  onSelectedChange?: (values: any[]) => void;
} & AntTableProps<any>;

type ColumnProps = {} & TableColumnProps<any>;

export const Table = ({
  selectColumn = false,
  countColumn = false,
  onSelectedChange = () => null,
  children,
  ...rest
}: TableProps) => {
  const pageSize = useAppSelector((state) => state.pageSize);
  const [page, setPage] = useState(1);

  return (
    <AntTable
      pagination={{
        pageSize: pageSize.value,
        showSizeChanger: false,
        onChange: (value) => setPage(value),
      }}
      rowSelection={
        selectColumn
          ? {
              type: "checkbox",
              onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
                console.log(
                  `selectedRowKeys: ${selectedRowKeys}`,
                  "selectedRows: ",
                  selectedRows
                );
                onSelectedChange(selectedRows);
              },
              getCheckboxProps: (record: any) => ({
                disabled: record.name === "Disabled User", // Column configuration not to be checked
                name: record.name,
              }),
            }
          : undefined
      }
      {...rest}
    >
      {countColumn && (
        <Table.Column
          title={({ sortColumns }) => (
            <ColumnTitle sortColumns={sortColumns} reactKey="no" text="STT" />
          )}
          sorter={true}
          key="no"
          render={(text, record: any, index) =>
            (page - 1) * pageSize.value + index + 1
          }
        />
      )}
      {children}
    </AntTable>
  );
};

Table.Column = ({ className = "", ...rest }: ColumnProps) => {
  return <AntTable.Column className={`table-column ${className}`} {...rest} />;
};
