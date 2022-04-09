import React from "react";
import { Table } from "antd";
import { TABLE_COLUMN } from "./data";
import { ColumnTitle } from "@components/Table";
import ItemActions from "@components/ItemActions";
import { EyeOutlined } from "@ant-design/icons";
import studentData from "@seeds/thcs/students.json";
import { useAppSelector } from "@hooks";
import { useHistory } from "react-router";

export const TransferTable = () => {
  const { Column } = Table;
  const pageSize = useAppSelector((state) => state.pageSize);
  const history = useHistory();

  return (
    <Table
      pagination={{
        showSizeChanger: false,
        pageSize: pageSize.value,
      }}
      dataSource={studentData}
      rowKey={(record: any) => record.id}
    >
      {TABLE_COLUMN.map((item) => (
        <Column
          {...item}
          sorter={true}
          title={({ sortColumns }) => (
            <ColumnTitle
              reactKey={item.key}
              text={item.title}
              sortColumns={sortColumns}
            />
          )}
        />
      ))}
      <Column
        key="actions"
        render={(text, record: any) => (
          <ItemActions>
            <ItemActions.Button
              className="detail-btn"
              icon={EyeOutlined}
              onClick={() => history.push(`/dashboard/student/${record.id}`)}
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};

export default TransferTable;
