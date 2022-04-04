import React, { useState } from "react";
import { Button, Modal, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@hooks";
import { showDeleteModal } from "@slices/deleteModalSlice";

type Props = {
  name: string;
  onDelete: () => void;
  tableConfig: any;
  show: boolean;
  onCancel: () => void;
};

export const TableModal = ({
  name,
  onDelete,
  tableConfig,
  show,
  onCancel,
}: Props) => {
  const [disabled, setDisabled] = useState(true);
  const dispatch = useAppDispatch();

  return (
    <Modal
      visible={show}
      onCancel={onCancel}
      centered={true}
      footer={<></>}
      className="table-modal"
      title={`Danh sách ${name}`}
    >
      <div className="table-modal-content">
        {/* Top bar */}
        <div className="table-modal-content-header">
          <Button
            disabled={disabled}
            className="delete-btn"
            onClick={() =>
              dispatch(
                showDeleteModal({
                  name: "",
                  onAction: onDelete,
                })
              )
            }
            icon={<DeleteOutlined />}
          />
        </div>
        <div className="table-modal-content-body">
          <Table
            {...tableConfig}
            scroll={{
              y: 300,
            }}
            pagination={false}
            rowKey={(record) => record.id}
            rowSelection={{
              type: "checkbox",
              onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
                setDisabled(selectedRows.length === 0);
              },
              getCheckboxProps: (record: any) => ({
                disabled: record.name === "Disabled User", // Column configuration not to be checked
                name: record.name,
              }),
            }}
          />
        </div>
      </div>
    </Modal>
  );
};
