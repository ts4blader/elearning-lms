import React from "react";
import ItemActions from "@components/ItemActions";
import { Table } from "antd";
import { useAppSelector } from "@hooks";
import DATA from "@seeds/thcs/students.json";
import { EyeOutlined } from "@ant-design/icons";
import { ColumnTitle } from "@components/Table";
import StudentDropdownAction from "./StudentDropdownAction";
import { useHistory, useRouteMatch } from "react-router-dom";
import Tag from "@components/Tag";

type StudentType = typeof DATA[0];

const StudentTable = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const { Column } = Table;
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
          <ColumnTitle sortColumns={sortColumns} reactKey="id" text="ID" />
        )}
        dataIndex="id"
        key="id"
        sorter={true}
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle sortColumns={sortColumns} reactKey="name" text="Name" />
        )}
        dataIndex="name"
        key="name"
        sorter={true}
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            reactKey="birthday"
            text="Birthday"
          />
        )}
        dataIndex="birthday"
        key="birthday"
        sorter={true}
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            reactKey="gender"
            text="Gender"
          />
        )}
        dataIndex="gender"
        key="gender"
        sorter={true}
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            reactKey="ethic"
            text="Ethic"
          />
        )}
        dataIndex="ethic"
        key="ethic"
        sorter={true}
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            reactKey="class"
            text="Class"
          />
        )}
        dataIndex="class"
        key="class"
        sorter={true}
      />
      <Column
        title="Status"
        key="status"
        render={(text, record: StudentType) => (
          <Tag.Status status={record.status}>{record.status}</Tag.Status>
        )}
        sorter={true}
      />
      <Column
        render={(text, record: any) => (
          <ItemActions>
            <ItemActions.Button
              className="detail-btn"
              icon={EyeOutlined}
              onClick={() => history.push(`${path}/${record.id}`)}
            />
            <span>
              <StudentDropdownAction studentId={record.id} />
            </span>
            <ItemActions.DeleteButton
              deleteName="học viên"
              onDelete={() => null}
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};

export default StudentTable;
