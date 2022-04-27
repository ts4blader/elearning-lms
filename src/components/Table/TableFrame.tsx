import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { TableWrapper } from "./TableWrapper";
import { Row } from "@layouts/Grid";
import TextInput from "@components/TextInput";
import { TableProps } from "@components/Table";

export type TableFrameProps = {
  children?: React.ReactNode;
  className?: string;
  table: React.ComponentType<TableProps>;
  pageChanger?: boolean;
} & Omit<React.ComponentProps<"div">, "title"> &
  TableFrameTitleProps;

type TableFrameTitleProps = {
  renderTitle: React.ComponentType<any> | string;
};

const Title = ({ renderTitle }: TableFrameTitleProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const Component = renderTitle;

  if (typeof renderTitle === typeof "")
    return (
      <Row data-length={searchTerm.length !== 0} arrange="space-between">
        <h3 className="table-frame-title">{renderTitle}</h3>
        <TextInput
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
          prefix={<SearchOutlined />}
          placeholder="Tìm kiếm"
        />
      </Row>
    );
  else return <Component />;
};

const TableFrame = ({
  children,
  table,
  className = "",
  pageChanger = true,
  renderTitle,
  ...rest
}: TableFrameProps) => {
  const DataTable = table;

  return (
    <div className={`table-frame ${className}`} {...rest}>
      <div className="table-frame-header">{children}</div>
      <div className="table-frame-body">
        <Title renderTitle={renderTitle} />
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

TableFrame.Title = ({ children, ...rest }: React.ComponentProps<"h3">) => {
  return (
    <h3 className="table-frame-title" {...rest}>
      {children}
    </h3>
  );
};

export default TableFrame;
