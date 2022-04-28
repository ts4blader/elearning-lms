import ItemActions from "@components/ItemActions";
import { ColumnTitle, Table } from "@components/Table";
import React from "react";
import { CLASSES_LIST_COLUMN } from "./data";
import classedListData from "@seeds/examination/classes-list.json";
import { ReadOutlined } from "@ant-design/icons";
import { Row } from "@layouts/Grid";
import PseudoField from "@components/PseudoField";
import TableFrame, { TableWrapper } from "@components/Table";

const ClassesListTable = () => {
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
                <ItemActions.DetailButton icon={ReadOutlined} to="/" />
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
      <div className="main-info">
        <Row arrange="space-between" className="main-info-head">
          <div className="text">Toán đại số</div>
          <ItemActions>
            <ItemActions.EditButton innerForm={() => null} title="" />
            <ItemActions.DeleteButton deleteName="" onDelete={() => null} />
          </ItemActions>
        </Row>
        <div className="main-info-fields">
          <PseudoField label="Khối">6</PseudoField>
          <PseudoField label="Tên kỳ thi">Giữa kỳ</PseudoField>
          <PseudoField label="Học kỳ">1</PseudoField>
          <PseudoField label="Ngày làm bài">20/01/2022</PseudoField>
          <PseudoField label="Tình trạng">Đã kết thúc</PseudoField>
        </div>
      </div>
    </Row>
  );
};

export default ClassesListTable;
