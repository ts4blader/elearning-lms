import React from "react";
import { TABLE_COLUMN } from "./data";
import { ColumnTitle, Table } from "@components/Table";
import ItemActions from "@components/ItemActions";
import studentData from "@seeds/thcs/students.json";

export const ReverseTable = () => {
  const { Column } = Table;

  return (
    <Table dataSource={studentData} rowKey={(record: any) => record.id}>
      {TABLE_COLUMN.map((item) =>
        item.sorter ? (
          <Column
            {...item}
            title={({ sortColumns }) => (
              <ColumnTitle
                reactKey={item.key}
                text={item.title}
                sortColumns={sortColumns}
              />
            )}
          />
        ) : (
          <Column {...item} />
        )
      )}
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

export default ReverseTable;
