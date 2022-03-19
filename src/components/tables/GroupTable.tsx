import React, { useState } from "react";
import { Table } from "antd";
import ItemActions from "@components/ItemActions";
import { MenuOutlined } from "@ant-design/icons";
import DATA from "@seeds/thcs/groups.json";
import SUBJECTS from "@seeds/thcs/subjects.json";
import TableModal from "@components/TableModal";
import { useAppSelector } from "@stores/hooks";
import GroupForm from "@components/forms/GroupForm";

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
  const pageSize = useAppSelector((state) => state.pageSize);

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
          showSizeChanger: false,
          pageSize: pageSize.value,
        }}
        dataSource={DATA}
        rowKey={(record) => record.id}
      >
        <Column title="Name" dataIndex="name" key="name" sorter={true} />
        <Column title="Leader" dataIndex="leader" key="leader" />
        <Column
          key="action"
          render={(text, record) => (
            <ItemActions>
              <ItemActions.Button
                icon={MenuOutlined}
                className="menu-btn"
                onClick={() => setShow(true)}
              />
              <ItemActions.EditButton
                title="Thiết lập tổ - bộ môn"
                innerForm={GroupForm}
              />
              <ItemActions.DeleteButton
                deleteName="tổ - bộ môn"
                onDelete={() => null}
              />
            </ItemActions>
          )}
        />
      </Table>
    </>
  );
};

export default GroupTable;
