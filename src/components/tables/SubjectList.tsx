import React, { useState } from "react";
import TableWrapper from "@components/TableWrapper";
import DATA from "@seeds/thcs/subjects.json";
import { Table } from "antd";
import { useAppSelector } from "@stores/hooks";
import ColumnTitle from "@components/ColumnTitle";

const SubjectList = () => {
  const { Column } = Table;
  const pageSize = useAppSelector((state) => state.pageSize);
  const [page, setPage] = useState(1);
  return (
    <TableWrapper>
      <Table
        dataSource={DATA}
        rowKey={(record) => record.id}
        pagination={{
          showSizeChanger: false,
          pageSize: pageSize.value,
          onChange: (current) => {
            setPage(current);
          },
        }}
      >
        <Column
          title="NO"
          key="no"
          render={(text, record: any, index) =>
            (page - 1) * pageSize.value + index + 1
          }
        />
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
