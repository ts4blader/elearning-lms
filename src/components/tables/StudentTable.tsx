import React from "react";
import ItemActions from "@components/ItemActions";
import { Table, Tag } from "antd";
import { useAppSelector } from "@stores/hooks";
import DATA from "@seeds/thcs/students.json";
import { EyeOutlined, SyncOutlined } from "@ant-design/icons";

type StudentType = typeof DATA[0];

const StudentTable = () => {
  const { Column } = Table;
  const pageSize = useAppSelector((state) => state.pageSize);

  return (
    <Table
      pagination={{
        showSizeChanger: false,
        pageSize: pageSize.value,
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
      <Column
        title="Birthday"
        dataIndex="birthday"
        key="birthday"
        sorter={true}
      />
      <Column title="Gender" dataIndex="gender" key="gender" sorter={true} />
      <Column title="Ethic" dataIndex="ethic" key="ethic" sorter={true} />
      <Column title="Class" dataIndex="class" key="class" sorter={true} />
      <Column
        title="Status"
        key="status"
        sorter={true}
        render={(text, record: StudentType) => (
          <Tag
            icon={<div className="dot"></div>}
            className={record.status.toLowerCase().split(" ").join("-")}
          >
            {record.status}
          </Tag>
        )}
      />
      <Column
        title=""
        render={(text, record) => (
          <ItemActions
            name="học viên"
            onDelete={() => null}
            onEdit={() => null}
            editIcon={SyncOutlined}
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

export default StudentTable;
