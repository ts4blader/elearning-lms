import React from "react";
import { Table } from "antd";
import ItemActions from "@components/ItemActions";
import DATA from "@seeds/thcs/scores.json";
import { useAppSelector } from "@stores/hooks";
import ScoreForm from "@components/forms/ScoreForm";

const ScoreTable = () => {
  const { Column, ColumnGroup } = Table;
  const pageSize = useAppSelector((state) => state.pageSize);

  return (
    <Table
      pagination={{
        showSizeChanger: false,
        pageSize: pageSize.value,
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
