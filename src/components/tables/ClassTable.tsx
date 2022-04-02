import React from "react";
import { Table } from "antd";
import ItemActions from "@components/ItemActions";
import { EyeOutlined } from "@ant-design/icons";
import DATA from "@seeds/thcs/classes.json";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useAppSelector } from "@hooks";
import ClassForm from "@components/forms/ClassForm";
import ColumnTitle from "@components/ColumnTitle";

const ClassTable = () => {
  const { Column } = Table;
  const history = useHistory();
  const { path } = useRouteMatch();
  const pageSize = useAppSelector((state) => state.pageSize);

  return (
    <Table
      pagination={{
        showSizeChanger: false,
        pageSize: pageSize.value,
      }}
      dataSource={DATA}
      rowKey={(record) => record.id}
      rowSelection={{
        type: "checkbox",
        onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
          console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
          );
        },
        getCheckboxProps: (record: any) => ({
          disabled: record.name === "Disabled User", // Column configuration not to be checked
          name: record.name,
        }),
      }}
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
