import React from "react";
import TableFrame from "@components/Table";
import { Table as AntTable } from "antd";
import { PRIZED_COLUMN } from "./tables-data";
import tableData from "@seeds/student/prized-list.json";
import ItemActions from "@components/ItemActions";
import { StudentActionForms } from "@components/Forms";

const Table = () => {
  const { Column } = AntTable;

  return (
    <AntTable
      pagination={false}
      dataSource={tableData}
      rowKey={(record) => record.id}
      scroll={{ y: 400 }}
    >
      <Column
        title="STT"
        align="center"
        key="no"
        render={(text, record, index) => index + 1}
      />
      {PRIZED_COLUMN.map((item) => (
        <Column {...item} align="center" />
      ))}
      <Column
        align="center"
        key="actions"
        render={(text, record) => (
          <ItemActions>
            <ItemActions.EditButton
              title="Cập nhật khen thưởng"
              innerForm={StudentActionForms.Prized}
            />
            <ItemActions.DeleteButton deleteName="" onDelete={() => null} />
          </ItemActions>
        )}
      />
    </AntTable>
  );
};

export const RewardList = () => {
  return (
    <div className="reward-list">
      <TableFrame title="" table={Table} />
    </div>
  );
};
