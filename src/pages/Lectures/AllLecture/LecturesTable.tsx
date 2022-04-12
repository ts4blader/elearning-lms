import React from "react";
import { Table } from "antd";
import { TABLE_COLUMN } from "./data";
import { ColumnTitle } from "@components/Table";
import lectureData from "@seeds/thcs/lectures.json";
import Tag from "@components/Tag";
import { useAppSelector } from "@hooks";
import ItemActions from "@components/ItemActions";
import { EyeOutlined } from "@ant-design/icons";
import { OptionDropdown } from "./OptionDropdown";

export const LecturesTable = () => {
  const { Column } = Table;
  const pageSize = useAppSelector((state) => state.pageSize);

  return (
    <Table
      rowKey={(record: any) => record.id}
      pagination={{
        showSizeChanger: false,
        pageSize: pageSize.value,
      }}
      dataSource={lectureData}
      rowSelection={{
        type: "checkbox",
        onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
          console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
          );
        },
        getCheckboxProps: (record: any) => ({
          disabled: record.name === "Disabled User", // Column configuration not to be checked
          name: record.name,
        }),
      }}
    >
      {TABLE_COLUMN.map((item) => (
        <Column
          {...item}
          sorter={true}
          title={({ sortColumns }) => (
            <ColumnTitle
              sortColumns={sortColumns}
              reactKey={item.key}
              text={item.title}
            />
          )}
        />
      ))}
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            reactKey="status"
            text="Tình trạng"
          />
        )}
        render={(text, record: any) => (
          <Tag.Status status={record.status}>{record.status}</Tag.Status>
        )}
        key="status"
      />
      <Column
        key="actions"
        render={(text, record: any) => (
          <ItemActions>
            <ItemActions.Button
              icon={EyeOutlined}
              onClick={() => null}
              className="detail-btn"
            />
            <span>
              <OptionDropdown lectureId={record.id} />
            </span>
            <ItemActions.DeleteButton
              deleteName="giảng viên"
              onDelete={() => null}
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};
