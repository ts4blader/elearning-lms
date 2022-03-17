import React from "react";
import { Table } from "antd";
import ItemActions from "@components/ItemActions";
import DATA from "@seeds/thcs/subjects.json";
import { useAppSelector } from "@stores/hooks";

const SubjectTable = () => {
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
      <Column title="Type" dataIndex="type" key="type" />
      <Column title="1st semester" dataIndex="first" key="first" />
      <Column title="2nd semester" dataIndex="secondary" key="secondary" />
      <Column
        key="action"
        render={(text, record) => (
          <ItemActions
            name="môn học"
            onDelete={() => null}
            onEdit={() => null}
          />
        )}
      />
    </Table>
  );
};

export default SubjectTable;
