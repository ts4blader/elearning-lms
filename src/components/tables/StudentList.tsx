import { Button, Table, Tag } from "antd";
import React, { useState } from "react";
import DATA from "@seeds/thcs/students.json";
import { EditOutlined } from "@ant-design/icons";
import Selection from "@components/Selection";
import TableWrapper from "@components/TableWrapper";
import { useAppSelector } from "@stores/hooks";

const SubjectList = () => {
  const { Column } = Table;
  const [edit, setEdit] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = useAppSelector((state) => state.pageSize);

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
          render={(text, record: any, index) =>
            (page - 1) * pageSize.value + index + 1
          }
          align="center"
        />
        <Column key="id" title="ID" dataIndex="id" sorter={true} />
        <Column key="name" title="Name" dataIndex="name" sorter={true} />
        <Column key="birthday" title="Birthday" dataIndex="birthday" />
        <Column
          key="status"
          title="Status"
          render={(text, record: typeof DATA[0]) =>
            edit ? (
              <Selection data={["abc", "xyz"]} keyAffix="status" />
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
          render={(text, record) =>
            edit ? (
              <Button onClick={() => setEdit(false)}>Lưu</Button>
            ) : (
              <div className="item-actions">
                <span onClick={() => setEdit(true)}>
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
