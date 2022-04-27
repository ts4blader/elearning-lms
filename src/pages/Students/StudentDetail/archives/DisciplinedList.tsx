import React from "react";
import TableFrame from "@components/Table";
import { Table as AntTable } from "antd";
import { DISCIPLINED_COLUMN } from "./tables-data";
import tableData from "@seeds/student/disciplined-list.json";
import ItemActions from "@components/ItemActions";
import { StudentActionForms } from "@components/Forms";

const Table = () => {
  const { Column } = AntTable;

  return (
    <AntTable
      pagination={false}
      dataSource={tableData}
      rowKey={(record) => record.id}
      scroll={{ y: 300 }}
    >
      <Column
        title="STT"
        align="center"
        key="no"
        render={(text, record, index) => index + 1}
      />
      {DISCIPLINED_COLUMN.map((item) => (
        <Column {...item} align="center" />
      ))}
      <Column
        align="center"
        key="actions"
        render={(text, record) => (
          <ItemActions>
            <ItemActions.EditButton
              title="Cập nhật kỷ luật"
              innerForm={StudentActionForms.Disciplined}
            />
            <ItemActions.DeleteButton deleteName="" onDelete={() => null} />
          </ItemActions>
        )}
      />
    </AntTable>
  );
};

export const DisciplinedList = () => {
  return (
    <div className="disciplined-list">
      <TableFrame renderTitle="" pageChanger={false} table={Table} />
    </div>
  );
};
