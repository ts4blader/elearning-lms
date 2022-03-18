import React, { useState } from "react";
import TableWrapper from "@components/TableWrapper";
import DATA from "@seeds/thcs/subjects.json";
import { Table } from "antd";
import { useAppSelector } from "@stores/hooks";

type TableEntry = typeof DATA[0];

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
          key="no"
          title="NO"
          render={(text, record: TableEntry, index) =>
            (page - 1) * pageSize.value + index + 1
          }
        />
        <Column key="id" title="ID" dataIndex="id" sorter={true} />
        <Column key="name" title="Name" dataIndex="name" sorter={true} />
        <Column key="type" title="Type" dataIndex="type" />
        <Column key="first" title="First" dataIndex="first" />
        <Column key="secondary" title="Secondary" dataIndex="secondary" />
      </Table>
    </TableWrapper>
  );
};

export default SubjectList;
