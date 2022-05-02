import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { TableWrapper } from "./TableWrapper";
import { Row } from "@layouts/Grid";
import TextInput from "@components/TextInput";
import { TableProps } from "@components/Table";

export type TableFrameProps = {
  children?: React.ReactNode;
  className?: string;
  pageChanger?: boolean;
  table: React.ComponentType<TableProps>;
  render?: React.ReactNode;
} & Omit<React.ComponentProps<"div">, "title"> &
  TableFrameTitleProps;

type TableFrameTitleProps = {
  renderTitle: React.ComponentType<any> | string;
};

const Title = ({ renderTitle }: TableFrameTitleProps) => {
  const Component = renderTitle;

  if (typeof renderTitle === typeof "")
    return (
      <Row arrange="space-between">
        <TableFrame.Title>{renderTitle}</TableFrame.Title>
        <TableFrame.SearchBar />
      </Row>
    );
  return <Component />;
};

const TableFrame = ({
  children,
  table,
  className = "",
  pageChanger = true,
  render,
  renderTitle,
  ...rest
}: TableFrameProps) => {
  const DataTable = table;

  return (
    <div className={`table-frame ${className}`} {...rest}>
      <div className="table-frame-header">{children}</div>
      <div className="table-frame-body">
        {render ? (
          render
        ) : (
          <>
            <Title renderTitle={renderTitle} />
            {pageChanger ? (
              <TableWrapper>
                <DataTable />
              </TableWrapper>
            ) : (
              <DataTable />
            )}
          </>
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

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <TextInput
      value={searchTerm}
      onChange={({ target }) => setSearchTerm(target.value)}
      prefix={<SearchOutlined />}
      placeholder="Tìm kiếm"
    />
  );
};

TableFrame.SearchBar = SearchBar;

export default TableFrame;
