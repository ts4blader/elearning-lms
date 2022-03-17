import React, { useState } from "react";
import { Table } from "antd";
import ItemActions from "@components/ItemActions";
import DATA from "@seeds/thcs/grades.json";
import { MenuOutlined } from "@ant-design/icons";
import TableModal from "@components/TableModal";
import CLASSES from "@seeds/thcs/classes.json";
import { useAppSelector } from "@stores/hooks";

const TABLE_MODAL = {
  dataSource: CLASSES,
  columns: [
    { title: "ID", dataIndex: "id", key: "id", sorter: true },
    { title: "Name", dataIndex: "name", key: "name", sorter: true },
  ],
};

const GradeTable = () => {
  const { Column } = Table;
  const [show, setShow] = useState(false);
  const pageSize = useAppSelector((state) => state.pageSize);

  return (
    <>
      <TableModal
        name="lớp học"
        onDelete={() => null}
        show={show}
        onCancel={() => setShow(false)}
        tableConfig={TABLE_MODAL}
      />
      <Table
        pagination={{
          showSizeChanger: false,
          pageSize: pageSize.value,
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

export default GradeTable;
