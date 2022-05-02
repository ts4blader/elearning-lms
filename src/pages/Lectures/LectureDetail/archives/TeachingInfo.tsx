import React from "react";
import { useAppDispatch } from "@hooks";
import { showFormModal } from "@slices/formModalSlice";
import { Button, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TableFrame from "@components/Table/TableFrame";
import ItemActions from "@components/ItemActions";
import teachingData from "@seeds/lecture/teaching-info.json";
import { TEACHING_TABLE } from "./data";
import { ColumnTitle } from "@components/Table";
import TeachingForm from "./TeachingForm";
import { Row } from "@layouts/Grid";

const AddButton = () => {
  const dispatch = useAppDispatch();
  const showModal = () => {
    dispatch(
      showFormModal({
        title: "Thêm mới chương trình đào tạo",
        innerForm: TeachingForm,
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
      dataSource={teachingData}
      scroll={{
        y: 300,
      }}
    >
      {TEACHING_TABLE.map((item) =>
        item.sorter ? (
          <Column
            {...item}
            align="center"
            title={({ sortColumns }) => (
              <ColumnTitle
                reactKey={item.key}
                text={item.title}
                sortColumns={sortColumns}
                align="center"
              />
            )}
          />
        ) : (
          <Column {...item} align="center" />
        )
      )}
      <Column
        key="actions"
        align="center"
        render={(text, record) => (
          <ItemActions>
            <ItemActions.EditButton
              title="Thiết lập chương trình đào tạo"
              innerForm={TeachingForm}
            />
            <ItemActions.DeleteButton deleteName="" onDelete={() => null} />
          </ItemActions>
        )}
      />
    </Table>
  );
};

export const TeachingInfo = () => {
  return (
    <TableFrame
      pageChanger={false}
      renderTitle={() => (
        <Row arrange="space-between">
          <TableFrame.SearchBar />
          <AddButton />
        </Row>
      )}
      table={DataTable}
    />
  );
};
