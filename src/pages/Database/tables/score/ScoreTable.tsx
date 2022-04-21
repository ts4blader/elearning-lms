import React from "react";
import ItemActions from "@components/ItemActions";
import DATA from "@seeds/thcs/scores.json";
import { ScoreForm } from "@components/Forms";
import { ColumnTitle, Table } from "@components/Table";
import { Table as AntTable } from "antd";

const ScoreTable = () => {
  const { Column } = Table;
  const { ColumnGroup } = AntTable;

  return (
    <Table rowKey={(record) => record.id} dataSource={DATA}>
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle sortColumns={sortColumns} text="Name" reactKey="name" />
        )}
        dataIndex="name"
        key="name"
        sorter={true}
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle sortColumns={sortColumns} text="Base" reactKey="base" />
        )}
        dataIndex="base"
        key="base"
        sorter={true}
      />

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
          <ItemActions>
            <ItemActions.EditButton
              title="Thiết lập loại điểm"
              innerForm={ScoreForm}
            />
            <ItemActions.DeleteButton
              deleteName="loại điểm"
              onDelete={() => null}
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};

export default ScoreTable;
