import React from "react";
import { Table } from "antd";
import ItemActions from "@components/ItemActions";
import { MenuOutlined } from "@ant-design/icons";
import DATA from "@seeds/thcs/groups.json";

const GroupTable = () => {
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
      <Column title="Name" dataIndex="name" key="name" sorter={true} />
      <Column title="Leader" dataIndex="leader" key="leader" />
      <Column
        key="action"
        render={(text, record) => (
          <ItemActions
            name="tổ - bộ môn"
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

export default GroupTable;
