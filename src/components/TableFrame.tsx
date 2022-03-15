import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

type Props = {
  children: React.ReactNode;
  title: string;
  className?: string;
  table: any;
} & React.ComponentProps<"div">;

const TableFrame = ({
  children,
  title,
  table,
  className = "",
  ...rest
}: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const DataTable = table;

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
        <DataTable />
      </div>
    </div>
  );
};

export default TableFrame;
