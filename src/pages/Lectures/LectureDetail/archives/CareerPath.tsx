import React from "react";
import TableFrame from "@components/Table/TableFrame";
import { Button, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@hooks";
import { showFormModal } from "@slices/formModalSlice";
import careerData from "@seeds/lecture/career-path.json";
import { CAREER_TABLE } from "./data";
import { ColumnTitle } from "@components/Table";
import ItemActions from "@components/ItemActions";

const AddButton = () => {
  const dispatch = useAppDispatch();
  const showModal = () => {
    dispatch(
      showFormModal({
        title: "",
        innerForm: null,
      })
    );
  };

  return (
    <Button
      type="primary"
      size="large"
      icon={<PlusOutlined />}
      onClick={showModal}
    >
      Thêm
    </Button>
  );
};

const DataTable = () => {
  const { Column } = Table;

  return (
    <Table
      pagination={false}
      rowKey={(record) => record.id}
      dataSource={careerData}
      scroll={{
        y: 300,
      }}
    >
      {CAREER_TABLE.map((item) => (
        <Column
          {...item}
          title={({ sortColumns }) => (
            <ColumnTitle
              reactKey={item.key}
              text={item.title}
              sortColumns={sortColumns}
              align="center"
            />
          )}
          sorter={true}
          align="center"
        />
      ))}
      <Column
        key="actions"
        align="center"
        render={(text, record) => (
          <ItemActions>
            <ItemActions.EditButton title="" innerForm={() => null} />
            <ItemActions.DeleteButton deleteName="" onDelete={() => null} />
          </ItemActions>
        )}
      />
    </Table>
  );
};

export const CareerPath = () => {
  return (
    <TableFrame pageChanger={false} title={<AddButton />} table={DataTable} />
  );
};
