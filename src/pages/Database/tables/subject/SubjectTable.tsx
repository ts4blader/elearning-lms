import React from "react";
import ItemActions from "@components/ItemActions";
import DATA from "@seeds/thcs/subjects.json";
import { SubjectForm } from "@components/Forms";
import { ColumnTitle, Table } from "@components/Table";

const SubjectTable = () => {
  const { Column } = Table;

  return (
    <Table
      dataSource={DATA}
      rowKey={(record) => record.id}
      selectColumn="subject-table"
    >
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle sortColumns={sortColumns} text="ID" reactKey="id" />
        )}
        dataIndex="id"
        key="id"
        sorter={true}
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle sortColumns={sortColumns} text="Name" reactKey="name" />
        )}
        dataIndex="name"
        key="name"
        sorter={true}
      />
      <Column title="Type" dataIndex="type" key="type" />
      <Column title="1st semester" dataIndex="first" key="first" />
      <Column title="2nd semester" dataIndex="secondary" key="secondary" />
      <Column
        key="action"
        render={(text, record) => (
          <ItemActions>
            <ItemActions.EditButton
              title="Thiết lập môn học"
              innerForm={SubjectForm}
            />
            <ItemActions.DeleteButton
              deleteName="môn học"
              onDelete={() => null}
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};

export default SubjectTable;
