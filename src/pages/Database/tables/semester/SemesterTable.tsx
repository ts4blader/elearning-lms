import React from "react";
import ItemActions from "@components/ItemActions";
import DATA from "@seeds/thcs/semesters.json";
import { SemesterForm } from "@components/Forms";
import { ColumnTitle, Table } from "@components/Table";

const SemesterTable = () => {
  const { Column } = Table;

  return (
    <Table dataSource={DATA} rowKey={(record) => record.id} countColumn={true}>
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle sortColumns={sortColumns} text="Name" reactKey="name" />
        )}
        dataIndex="name"
        key="name"
        sorter={true}
      />
      <Column title="Begin" dataIndex="begin" key="begin" />
      <Column title="End" dataIndex="end" key="end" />
      <Column
        key="action"
        render={(text, record) => (
          <ItemActions>
            <ItemActions.EditButton
              title="Thiết lập niên khóa"
              innerForm={SemesterForm}
            />
            <ItemActions.DeleteButton
              deleteName="niên khóa"
              onDelete={() => null}
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};

export default SemesterTable;
