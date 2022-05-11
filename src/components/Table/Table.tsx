import React, { useEffect, useState } from "react";
import {
  Table as AntTable,
  TableProps as AntTableProps,
  TableColumnProps,
} from "antd";
import { useAppDispatch, useAppSelector } from "@hooks";
import { pushSelectedRows, setSelectedRow } from "@slices/selectedRowsSlice";

export type TableProps = {
  countColumn?: boolean;
  selectColumn?: string;
} & AntTableProps<any>;

type ColumnProps = {} & TableColumnProps<any>;

export const Table = ({
  selectColumn = "",
  countColumn = false,
  children,
  ...rest
}: TableProps) => {
  const pageSize = useAppSelector((state) => state.pageSize);
  const [page, setPage] = useState(1);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selectColumn)
      dispatch(
        pushSelectedRows({
          name: selectColumn,
          value: [],
        })
      );
  }, []);

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
                dispatch(
                  setSelectedRow({
                    name: selectColumn,
                    value: selectedRows,
                  })
                );
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
          title={"STT"}
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
