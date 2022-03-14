import React from "react";
import { Table } from "antd";
import { useAppDispatch } from "@stores/hooks";
import { showDeleteModal } from "@slices/deleteModalSlice";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const SemesterTable = () => {
  const { Column } = Table;
  const dispatch = useAppDispatch();

  return (
    <Table
      pagination={{
        showSizeChanger: true,
        pageSizeOptions: [8, 10, 15],
        defaultPageSize: 8,
      }}
      rowKey={(record) => record.id}
    >
      <Column title="ID" dataIndex="id" key="id" sorter={true} />
      <Column title="Name" dataIndex="name" key="name" sorter={true} />
      <Column title="Begin" dataIndex="begin" key="begin" />
      <Column title="End" dataIndex="end" key="end" />
      <Column
        key="action"
        render={(text, record) => (
          <div className="item-actions">
            <span className="edit-btn">
              <EditOutlined />
            </span>
            <span className="delete-btn">
              <DeleteOutlined />
            </span>
          </div>
        )}
      />
    </Table>
  );
};
