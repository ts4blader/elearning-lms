import ItemActions from "@components/ItemActions";
import { ColumnTitle, Table } from "@components/Table";
import React from "react";
import { EXAMINATION_TABLE } from "./data";
import { OrderedListOutlined } from "@ant-design/icons";
import examData from "@seeds/examination/exam.json";
import { EyeOutlined } from "@ant-design/icons";
import ExamDetail from "./ExamDetail";
import { useHistory, useRouteMatch } from "react-router-dom";
import { ExaminationForms } from "@components/Forms";

const ExaminationTable = () => {
  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <Table
      className="examination-table"
      rowKey={(record) => record.id}
      dataSource={examData}
    >
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
              onClick={() => history.push(`${url}/${record.id}`)}
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
            <ItemActions.EditButton
              icon={EyeOutlined}
              title="Xem chi tiết lịch thi"
              showClose={true}
              innerForm={() => <ExamDetail examId={record.id} />}
            />
            <ItemActions.EditButton
              title="Chỉnh sửa lịch thi"
              innerForm={ExaminationForms}
            />
            <ItemActions.DeleteButton
              deleteName="lịch thi"
              onDelete={() => null}
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};

export default ExaminationTable;
