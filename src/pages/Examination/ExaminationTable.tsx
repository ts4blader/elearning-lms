import ItemActions from "@components/ItemActions";
import { ColumnTitle, Table } from "@components/Table";
import React from "react";
import { EXAMINATION_TABLE } from "./data";
import { OrderedListOutlined } from "@ant-design/icons";

const ExaminationTable = () => {
  return (
    <Table rowKey={(record) => record.id}>
      {EXAMINATION_TABLE.map((item) =>
        item.sorter ? (
          <Table.Column
            {...item}
            title={({ sortColumns }) => (
              <ColumnTitle
                reactKey={item.key}
                sortColumns={sortColumns}
                text={item.title}
              />
            )}
          />
        ) : (
          <Table.Column {...item} />
        )
      )}
      <Table.Column
        title="Danh sách lớp thi"
        align="center"
        key="detailList"
        render={(text, record) => (
          <ItemActions>
            <ItemActions.Button
              className="detail-list-btn"
              icon={OrderedListOutlined}
              onClick={() => null}
            />
          </ItemActions>
        )}
      />
      <Table.Column
        title="Phân công chấm thi"
        dataIndex="supervisor"
        key="supervisor"
      />
      <Table.Column
        key="actions"
        render={(text, record) => (
          <ItemActions>
            <ItemActions.DetailButton to="/" />
            <ItemActions.EditButton title="" innerForm={() => null} />
            <ItemActions.DeleteButton deleteName="" onDelete={() => null} />
          </ItemActions>
        )}
      />
    </Table>
  );
};

export default ExaminationTable;
