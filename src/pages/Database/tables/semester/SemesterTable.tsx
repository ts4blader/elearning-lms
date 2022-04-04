import React, { useState } from "react";
import { Table } from "antd";
import ItemActions from "@components/ItemActions";
import DATA from "@seeds/thcs/semesters.json";
import { useAppSelector } from "@hooks";
import SemesterForm from "@components/forms/SemesterForm";
import { ColumnTitle } from "@components/Table";

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
        title={({ sortColumns }) => (
          <ColumnTitle sortColumns={sortColumns} reactKey="no" text="NO" />
        )}
        key="no"
        sorter={true}
        render={(text, record, index) =>
          (page - 1) * pageSize.value + index + 1
        }
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle sortColumns={sortColumns} text="Name" reactKey="name" />
        )}
        dataIndex="name"
        key="name"
        sorter={true}
      />
      <Column title="Begin" dataIndex="begin" key="begin" />
      <Column title="End" dataIndex="end" key="end" />
      <Column
        key="action"
        render={(text, record) => (
          <ItemActions>
            <ItemActions.EditButton
              title="Thiết lập niên khóa"
              innerForm={SemesterForm}
            />
            <ItemActions.DeleteButton
              deleteName="niên khóa"
              onDelete={() => null}
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};

export default SemesterTable;
