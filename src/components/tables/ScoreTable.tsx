import React from "react";
import { Table } from "antd";
import ItemActions from "@components/ItemActions";
import DATA from "@seeds/thcs/scores.json";

const ScoreTable = () => {
  const { Column, ColumnGroup } = Table;

  return (
    <Table
      pagination={{
        showSizeChanger: true,
        pageSizeOptions: [8, 10, 15],
        defaultPageSize: 8,
      }}
      rowKey={(record) => record.id}
      dataSource={DATA}
    >
      <Column title="Name" dataIndex="name" key="name" sorter={true} />
      <Column title="Base" dataIndex="base" key="base" sorter={true} />

      <ColumnGroup title="Minimum scores amount" align="center">
        <Column
          title="1st semester"
          dataIndex="first"
          key="first"
          align="center"
        />
        <Column
          title="2nd semester"
          dataIndex="secondary"
          key="secondary"
          align="center"
        />
      </ColumnGroup>
      {/* Item actions */}
      <Column
        key="action"
        render={(text, record) => (
          <ItemActions
            name="loại điểm"
            onDelete={() => null}
            onEdit={() => null}
          />
        )}
      />
    </Table>
  );
};

export default ScoreTable;
