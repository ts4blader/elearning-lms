import { Button } from "antd";
import React, { useState } from "react";
import DATA from "@seeds/thcs/students.json";
import { EditOutlined } from "@ant-design/icons";
import Select from "@components/Select";
import { TableWrapper, ColumnTitle, Table } from "@components/Table";
import Tag from "@components/Tag";

const SubjectList = () => {
  const { Column } = Table;
  const [edit, setEdit] = useState("");

  const isEditing = (record: any) => record.id === edit;

  return (
    <TableWrapper>
      <Table
        dataSource={DATA}
        rowKey={(record) => record.id}
        countColumn={true}
      >
        <Column
          key="id"
          title={({ sortColumns }) => (
            <ColumnTitle sortColumns={sortColumns} reactKey="id" text="ID" />
          )}
          dataIndex="id"
          sorter={true}
        />
        <Column
          key="name"
          title={({ sortColumns }) => (
            <ColumnTitle
              sortColumns={sortColumns}
              reactKey="name"
              text="Name"
            />
          )}
          dataIndex="name"
          sorter={true}
        />
        <Column
          key="birthday"
          title={({ sortColumns }) => (
            <ColumnTitle
              sortColumns={sortColumns}
              reactKey="birthday"
              text="Birthday"
            />
          )}
          dataIndex="birthday"
        />
        <Column
          key="status"
          title={({ sortColumns }) => (
            <ColumnTitle
              sortColumns={sortColumns}
              reactKey="status"
              text="Status"
            />
          )}
          render={(text, record: any) =>
            isEditing(record) ? (
              <Select
                data={["abc", "xyz"]}
                defaultValue="abc"
                keyAffix="status"
              />
            ) : (
              <Tag.Status status={record.status}>{record.status}</Tag.Status>
            )
          }
        />
        <Column
          key="actions"
          render={(text, record: any) =>
            isEditing(record) ? (
              <Button className="save-btn" onClick={() => setEdit("")}>
                Lưu
              </Button>
            ) : (
              <div className="item-actions">
                <span onClick={() => setEdit(record.id)}>
                  <EditOutlined />
                </span>
              </div>
            )
          }
        />
      </Table>
    </TableWrapper>
  );
};

export default SubjectList;
