import { Button, Table, Tag } from "antd";
import React, { useState } from "react";
import DATA from "@seeds/thcs/students.json";
import { EditOutlined } from "@ant-design/icons";
import Selection from "@components/Selection";
import TableWrapper from "@components/TableWrapper";
import { useAppSelector } from "@stores/hooks";

type TableEntry = typeof DATA[0];

const SubjectList = () => {
  const { Column } = Table;
  const [edit, setEdit] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = useAppSelector((state) => state.pageSize);

  const isEditing = (record: TableEntry) => record.id === edit;

  return (
    <TableWrapper>
      <Table
        dataSource={DATA}
        rowKey={(record) => record.id}
        pagination={{
          showSizeChanger: false,
          pageSize: pageSize.value,
          onChange: (current) => {
            setPage(current);
          },
        }}
      >
        <Column
          key="no"
          title="NO"
          render={(text, record: TableEntry, index) =>
            (page - 1) * pageSize.value + index + 1
          }
        />
        <Column key="id" title="ID" dataIndex="id" sorter={true} />
        <Column key="name" title="Name" dataIndex="name" sorter={true} />
        <Column key="birthday" title="Birthday" dataIndex="birthday" />
        <Column
          key="status"
          title="Status"
          render={(text, record: TableEntry) =>
            isEditing(record) ? (
              <Selection
                data={["abc", "xyz"]}
                defaultValue="abc"
                keyAffix="status"
              />
            ) : (
              <Tag
                icon={<div className="dot"></div>}
                className={record.status.toLowerCase().split(" ").join("-")}
              >
                {record.status}
              </Tag>
            )
          }
        />
        <Column
          key="actions"
          render={(text, record: TableEntry) =>
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
