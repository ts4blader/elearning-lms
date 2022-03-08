import React from "react";
import { Table, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

type Props = {
  children: React.ReactNode;
  title: string;
  tableConfig: any;
  className?: string;
} & React.ComponentProps<"div">;

const TableFrame = ({
  children,
  title,
  tableConfig,
  className,
  ...rest
}: Props) => {
  return (
    <div className={`table-frame ${className}`} {...rest}>
      <div className="table-frame-header">{children}</div>
      <div className="table-frame-body">
        <div className="row">
          <h3 className="title">{title}</h3>
          <Input prefix={<SearchOutlined />} placeholder="Tìm kiếm" />
        </div>
        <Table
          pagination={{
            showSizeChanger: true,
            pageSizeOptions: [8, 10, 15],
            defaultPageSize: 8,
          }}
          rowKey={(record) => record.id}
          {...tableConfig}
        />
      </div>
    </div>
  );
};

export default TableFrame;
