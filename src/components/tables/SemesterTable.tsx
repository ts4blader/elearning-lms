import React, { useState } from "react";
import { Table } from "antd";
import ItemActions from "@components/ItemActions";
import DATA from "@seeds/thcs/semesters.json";
import { useAppSelector } from "@stores/hooks";

const SemesterTable = () => {
  const { Column } = Table;
  const pageSize = useAppSelector((state) => state.pageSize);
  const [page, setPage] = useState(1);

  return (
    <Table
      pagination={{
        showSizeChanger: false,
        pageSize: pageSize.value,
        onChange: (current) => setPage(current),
      }}
      dataSource={DATA}
      rowKey={(record) => record.id}
    >
      <Column
        title="NO"
        key="id"
        sorter={true}
        render={(text, record, index) =>
          (page - 1) * pageSize.value + index + 1
        }
      />
      <Column title="Name" dataIndex="name" key="name" sorter={true} />
      <Column title="Begin" dataIndex="begin" key="begin" />
      <Column title="End" dataIndex="end" key="end" />
      <Column
        key="action"
        render={(text, record) => (
          <ItemActions
            name="niên khóa"
            onDelete={() => null}
            onEdit={() => null}
          />
        )}
      />
    </Table>
  );
};

export default SemesterTable;
