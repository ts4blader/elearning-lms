import React, { useState } from "react";
import { Table } from "antd";
import ItemActions from "@components/ItemActions";
import { MenuOutlined } from "@ant-design/icons";
import DATA from "@seeds/thcs/groups.json";
import SUBJECTS from "@seeds/thcs/subjects.json";
import TableModal from "@components/TableModal";

const tableConfig = {
  dataSource: SUBJECTS,
  columns: [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: true,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: true,
    },
  ],
};

const GroupTable = () => {
  const { Column } = Table;
  const [show, setShow] = useState(false);

  return (
    <>
      <TableModal
        name="môn học"
        onDelete={() => null}
        tableConfig={tableConfig}
        show={show}
        onCancel={() => setShow(false)}
      />
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
                  onClick: () => setShow(true),
                },
              ]}
            />
          )}
        />
      </Table>
    </>
  );
};

export default GroupTable;
