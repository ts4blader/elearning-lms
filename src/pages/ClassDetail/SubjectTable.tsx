import React, { useState } from "react";
import { TableWrapper, ColumnTitle, Table } from "@components/Table";
import DATA from "@seeds/thcs/subjects.json";

const SubjectList = () => {
  const { Column } = Table;
  return (
    <TableWrapper>
      <Table
        dataSource={DATA}
        rowKey={(record) => record.id}
        countColumn={true}
      >
        <Column
          key="id"
          title={({ sortColumns }) => (
            <ColumnTitle sortColumns={sortColumns} reactKey="id" text="ID" />
          )}
          dataIndex="id"
          sorter={true}
        />
        <Column
          key="name"
          title={({ sortColumns }) => (
            <ColumnTitle
              sortColumns={sortColumns}
              reactKey="name"
              text="Name"
            />
          )}
          dataIndex="name"
          sorter={true}
        />
        <Column
          key="type"
          title={({ sortColumns }) => (
            <ColumnTitle
              sortColumns={sortColumns}
              reactKey="type"
              text="Type"
            />
          )}
          dataIndex="type"
        />
        <Column
          key="first"
          title={({ sortColumns }) => (
            <ColumnTitle
              sortColumns={sortColumns}
              reactKey="first"
              text="First"
            />
          )}
          dataIndex="first"
        />
        <Column
          key="secondary"
          title={({ sortColumns }) => (
            <ColumnTitle
              sortColumns={sortColumns}
              reactKey="secondary"
              text="Secondary"
            />
          )}
          dataIndex="secondary"
        />
      </Table>
    </TableWrapper>
  );
};

export default SubjectList;
