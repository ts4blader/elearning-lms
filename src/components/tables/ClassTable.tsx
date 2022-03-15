import React from "react";
import { Table } from "antd";
import ItemActions from "@components/ItemActions";
import { EyeOutlined } from "@ant-design/icons";
import DATA from "@seeds/thcs/classes.json";

const ClassTable = () => {
  const { Column } = Table;

  return (
    <Table
      pagination={{
        showSizeChanger: true,
        pageSizeOptions: [8, 10, 15],
        defaultPageSize: 8,
      }}
      dataSource={DATA}
      rowKey={(record) => record.id}
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
      <Column title="ID" dataIndex="id" key="id" sorter={true} />
      <Column title="Name" dataIndex="name" key="name" sorter={true} />
      <Column title="Leader" dataIndex="leader" key="leader" />
      <Column
        key="action"
        render={(text, record) => (
          <ItemActions
            name="lớp học"
            onDelete={() => null}
            onEdit={() => null}
            buttons={[
              {
                className: "detail-btn",
                icon: EyeOutlined,
                onClick: () => null,
              },
            ]}
          />
        )}
      />
    </Table>
  );
};

export default ClassTable;
