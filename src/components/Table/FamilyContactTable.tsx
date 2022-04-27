import ItemActions from "@components/ItemActions";
import { Table } from "antd";
import React from "react";
import { DeleteOutlined } from "@ant-design/icons";

export type FamilyContactProps = {
  name: string;
  address: string;
  phoneNumber: string;
};

type FamilyContactTableProps = {
  familyContacts: FamilyContactProps[];
  setFamilyContacts: (value: FamilyContactProps[]) => void;
};

export const FamilyContactTable = ({
  familyContacts,
  setFamilyContacts,
}: FamilyContactTableProps) => {
  const { Column } = Table;

  return (
    <Table
      rowKey={(record: FamilyContactProps) => record.name}
      dataSource={familyContacts}
      pagination={false}
      className="family-contacts-table"
    >
      <Column dataIndex="name" title="Người liên hệ" key="name" />
      <Column dataIndex="address" title="Địa chỉ" key="address" />
      <Column dataIndex="phoneNumber" title="SĐT" key="phoneNumber" />
      <Column
        key="actions"
        render={(text, record: FamilyContactProps) => (
          <ItemActions>
            <ItemActions.Button
              className="delete-btn"
              icon={DeleteOutlined}
              onClick={() =>
                setFamilyContacts(
                  familyContacts.filter((item) => item.name !== record.name)
                )
              }
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};
