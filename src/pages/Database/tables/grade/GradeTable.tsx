import React, { useState } from "react";
import { Table } from "antd";
import ItemActions from "@components/ItemActions";
import DATA from "@seeds/thcs/grades.json";
import { MenuOutlined } from "@ant-design/icons";
import CLASSES from "@seeds/thcs/classes.json";
import { useAppSelector } from "@hooks";
import { GradeForm } from "@components/Forms";
import { ColumnTitle, TableModal } from "@components/Table";
import { SUBTABLE_COLUMNS } from "../sub-table";

const TABLE_MODAL = {
  dataSource: CLASSES,
  columns: SUBTABLE_COLUMNS,
};

const GradeTable = () => {
  const { Column } = Table;
  const [show, setShow] = useState(false);
  const pageSize = useAppSelector((state) => state.pageSize);

  return (
    <>
      <TableModal
        name="lớp học"
        onDelete={() => null}
        show={show}
        onCancel={() => setShow(false)}
        tableConfig={TABLE_MODAL}
      />
      <Table
        pagination={{
          showSizeChanger: false,
          pageSize: pageSize.value,
        }}
        dataSource={DATA}
        rowKey={(record) => record.id}
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
            <ColumnTitle
              sortColumns={sortColumns}
              text="Name"
              reactKey="name"
            />
          )}
          dataIndex="name"
          key="name"
          sorter={true}
        />
        <Column
          key="action"
          render={(text, record) => (
            <ItemActions>
              <ItemActions.Button
                icon={MenuOutlined}
                className="menu-btn"
                onClick={() => setShow(true)}
              />
              <ItemActions.EditButton
                title="Thiết lập khoa khối"
                innerForm={GradeForm}
              />
              <ItemActions.DeleteButton
                deleteName="khoa khối"
                onDelete={() => null}
              />
            </ItemActions>
          )}
        />
      </Table>
    </>
  );
};

export default GradeTable;
