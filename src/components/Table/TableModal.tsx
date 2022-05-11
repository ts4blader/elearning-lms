import React, { useState } from "react";
import { Table } from "antd";
import { Row } from "@layouts/Grid";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@hooks";
import { showDeleteModal } from "@slices/deleteModalSlice";

type TableModalProps = {
  name: string;
  onDelete: (value: any) => void;
  columns: any[];
  data: any[];
};

export const TableModal = ({
  name,
  onDelete,
  data,
  columns,
}: TableModalProps) => {
  const [selected, setSelected] = useState<any[]>([]);

  const dispatch = useAppDispatch();
  const deleteItem = () =>
    dispatch(
      showDeleteModal({
        name: name,
        onAction: () => {
          onDelete(selected);
        },
      })
    );

  return (
    <div className="table-modal">
      <Row arrange={"flex-end"}>
        <Button
          size="large"
          className="delete-btn"
          icon={<DeleteOutlined />}
          disabled={selected.length === 0}
          onClick={deleteItem}
        />
      </Row>
      <Table
        pagination={false}
        dataSource={data}
        columns={columns}
        rowKey={(record) => record.id}
        scroll={{
          y: 300,
        }}
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
            console.log(selectedRows);
            setSelected(selectedRows);
          },
          getCheckboxProps: (record: any) => ({
            disabled: record.name === "Disabled User", // Column configuration not to be checked
            name: record.name,
          }),
        }}
      />
    </div>
  );
};
