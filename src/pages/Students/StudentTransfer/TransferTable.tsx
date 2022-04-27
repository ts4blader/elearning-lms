import React from "react";
import { TABLE_COLUMN } from "./data";
import { ColumnTitle, Table } from "@components/Table";
import ItemActions from "@components/ItemActions";
import studentData from "@seeds/thcs/students.json";

export const TransferTable = () => {
  const { Column } = Table;

  return (
    <Table dataSource={studentData} rowKey={(record: any) => record.id}>
      {TABLE_COLUMN.map((item) => (
        <Column
          {...item}
          sorter={true}
          title={({ sortColumns }) => (
            <ColumnTitle
              reactKey={item.key}
              text={item.title}
              sortColumns={sortColumns}
            />
          )}
        />
      ))}
      <Column
        key="actions"
        render={(text, record: any) => (
          <ItemActions>
            <ItemActions.DetailButton to={`/dashboard/student/${record.id}`} />
          </ItemActions>
        )}
      />
    </Table>
  );
};

export default TransferTable;
