import React from "react";
import { Table } from "antd";
import ItemActions from "@components/ItemActions";
import DATA from "@seeds/thcs/grades.json";
import { MenuOutlined } from "@ant-design/icons";

const GradeTable = () => {
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
    >
      <Column title="ID" dataIndex="id" key="id" sorter={true} />
      <Column title="Name" dataIndex="name" key="name" sorter={true} />
      <Column
        key="action"
        render={(text, record) => (
          <ItemActions
            name="khoa - khối"
            onDelete={() => null}
            onEdit={() => null}
            buttons={[
              {
                className: "menu-btn",
                icon: MenuOutlined,
                onClick: () => null,
              },
            ]}
          />
        )}
      />
    </Table>
  );
};

export default GradeTable;
