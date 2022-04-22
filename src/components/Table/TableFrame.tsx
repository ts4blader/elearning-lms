import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { TableWrapper } from "./TableWrapper";
import { Row } from "@layouts/Grid";
import TextInput from "@components/TextInput";
import { TableProps } from "@components/Table";

export type TableFrameProps = {
  children?: React.ReactNode;
  title: React.ReactNode | string;
  className?: string;
  table: React.ComponentType<TableProps>;
  pageChanger?: boolean;
} & Omit<React.ComponentProps<"div">, "title">;

const TableFrame = ({
  children,
  title,
  table,
  className = "",
  pageChanger = true,
  ...rest
}: TableFrameProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const DataTable = table;

  return (
    <div className={`table-frame ${className}`} {...rest}>
      <div className="table-frame-header">{children}</div>
      <div className="table-frame-body">
        <Row data-length={searchTerm.length !== 0} arrange="space-between">
          <h3 className="title">{title}</h3>
          <TextInput
            value={searchTerm}
            onChange={({ target }) => setSearchTerm(target.value)}
            prefix={<SearchOutlined />}
            placeholder="Tìm kiếm"
          />
        </Row>
        {pageChanger ? (
          <TableWrapper>
            <DataTable />
          </TableWrapper>
        ) : (
          <DataTable />
        )}
      </div>
    </div>
  );
};

export default TableFrame;
