import React, { useEffect } from "react";
import ItemActions from "@components/ItemActions";
import { EyeOutlined } from "@ant-design/icons";
import DATA from "@seeds/thcs/classes.json";
import { useHistory, useRouteMatch } from "react-router-dom";
import { ClassForm } from "@components/Forms";
import { ColumnTitle, Table } from "@components/Table";

const ClassTable = () => {
  const { Column } = Table;

  const history = useHistory();
  const { path } = useRouteMatch();

  return (
    <Table
      dataSource={DATA}
      rowKey={(record) => record.id}
      selectColumn="class-table"
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
      <Column title="Leader" dataIndex="leader" key="leader" />
      <Column
        key="action"
        render={(text, record: any) => (
          <ItemActions>
            <ItemActions.Button
              icon={EyeOutlined}
              className="detail-btn"
              onClick={() => history.push(`${path}/classes/${record.id}`)}
            />
            <ItemActions.EditButton
              title="Thiết lập lớp học"
              innerForm={ClassForm}
            />
            <ItemActions.DeleteButton
              deleteName="lớp học"
              onDelete={() => null}
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};

export default ClassTable;
