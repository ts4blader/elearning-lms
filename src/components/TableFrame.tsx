import React, { useState } from "react";
import { Table, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ItemActions from "@components/ItemActions";

type Props = {
  children: React.ReactNode;
  title: string;
  tableConfig: any;
  className?: string;
  columns: any[];
} & React.ComponentProps<"div">;

const TableFrame = ({
  children,
  title,
  tableConfig,
  columns,
  className = "",
  ...rest
}: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={`table-frame ${className}`} {...rest}>
      <div className="table-frame-header">{children}</div>
      <div className="table-frame-body">
        <div className="row" data-length={searchTerm.length !== 0}>
          <h3 className="title">{title}</h3>
          <Input
            value={searchTerm}
            onChange={({ target }) => setSearchTerm(target.value)}
            prefix={<SearchOutlined />}
            placeholder="Tìm kiếm"
          />
        </div>
        <Table
          pagination={{
            showSizeChanger: true,
            pageSizeOptions: [8, 10, 15],
            defaultPageSize: 8,
          }}
          rowKey={(record) => record.id}
          {...tableConfig}
        >
          {columns.map((item: any) =>
            item.children ? (
              <Table.ColumnGroup title={item.title} align={item.align}>
                {item.children.map((el: any) => (
                  <Table.Column {...el} />
                ))}
              </Table.ColumnGroup>
            ) : (
              <Table.Column {...item} />
            )
          )}
          <Table.Column
            key="action"
            render={(text, record) => (
              <ItemActions
                name={title}
                onDelete={() => null}
                onEdit={() => null}
              />
            )}
          />
        </Table>
      </div>
    </div>
  );
};

export default TableFrame;
