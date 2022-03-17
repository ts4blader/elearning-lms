import React from "react";
import { Table } from "antd";
import ItemActions from "@components/ItemActions";
import { EyeOutlined } from "@ant-design/icons";
import DATA from "@seeds/thcs/classes.json";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useAppSelector } from "@stores/hooks";

const ClassTable = () => {
  const { Column } = Table;
  const history = useHistory();
  const { path } = useRouteMatch();
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
      <Column title="Leader" dataIndex="leader" key="leader" />
      <Column
        key="action"
        render={(text, record: any) => (
          <ItemActions
            name="lớp học"
            onDelete={() => null}
            onEdit={() => null}
            buttons={[
              {
                className: "detail-btn",
                icon: EyeOutlined,
                onClick: () => history.push(`${path}/classes/${record.id}`),
              },
            ]}
          />
        )}
      />
    </Table>
  );
};

export default ClassTable;
