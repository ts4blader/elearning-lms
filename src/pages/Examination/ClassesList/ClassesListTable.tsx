import ItemActions from "@components/ItemActions";
import { ColumnTitle, Table } from "@components/Table";
import React from "react";
import { CLASSES_LIST_COLUMN, CARD_INFO_DATA } from "./data";
import classedListData from "@seeds/examination/classes-list.json";
import { ReadOutlined } from "@ant-design/icons";
import { Row } from "@layouts/Grid";
import TableFrame, { TableWrapper } from "@components/Table";
import { useRouteMatch } from "react-router-dom";
import Card from "@components/Card";

const ClassesListTable = () => {
  const { url } = useRouteMatch();

  return (
    <Row gap="2em" align="flex-start">
      <TableWrapper>
        <TableFrame.Title>Danh sách lớp tham gia</TableFrame.Title>
        <Table dataSource={classedListData} rowKey={(record) => record.id}>
          {CLASSES_LIST_COLUMN.map((item) =>
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
            align="center"
            title="Xem điểm"
            key="detail"
            render={(text, record) => (
              <ItemActions>
                <ItemActions.DetailButton
                  icon={ReadOutlined}
                  to={`${url}/transcript`}
                />
              </ItemActions>
            )}
          />
          <Table.Column
            key="actions"
            render={(text, record) => (
              <ItemActions>
                <ItemActions.EditButton title="" innerForm={() => null} />
                <ItemActions.DeleteButton deleteName="" onDelete={() => null} />
              </ItemActions>
            )}
          />
        </Table>
      </TableWrapper>
      <Card.Info
        data={CARD_INFO_DATA}
        status="success"
        titleText="Toán đại số"
      />
    </Row>
  );
};

export default ClassesListTable;
