import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { TableWrapper } from "./TableWrapper";
import { Row } from "@layouts/Grid";

export type TableFrameProps = {
  children: React.ReactNode;
  title: string;
  className?: string;
  table: React.ComponentType<any>;
} & React.ComponentProps<"div">;

const TableFrame = ({
  children,
  title,
  table,
  className = "",
  ...rest
}: TableFrameProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const DataTable = table;

  return (
    <div className={`table-frame ${className}`} {...rest}>
      <div className="table-frame-header">{children}</div>
      <div className="table-frame-body">
        <Row data-length={searchTerm.length !== 0}>
          <h3 className="title">{title}</h3>
          <Input
            onChange={({ target }) => setSearchTerm(target.value)}
            prefix={<SearchOutlined />}
            placeholder="Tìm kiếm"
          />
        </Row>
        <TableWrapper>
          <DataTable />
        </TableWrapper>
      </div>
    </div>
  );
};

export default TableFrame;
