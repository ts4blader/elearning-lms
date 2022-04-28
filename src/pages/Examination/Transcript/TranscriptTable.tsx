import { ColumnTitle, Table, TableWrapper } from "@components/Table";
import React, { useState } from "react";
import { Table as AntTable } from "antd";
import { SEMESTER_COLUMN_GROUP, SEMESTER_COLUMN_TABLE } from "./data";
import { Row } from "@layouts/Grid";
import Icon from "@assets/Icon";
import transcriptData from "@seeds/examination/transcript-table.json";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";

const TranscriptTable = () => {
  const { Column } = Table;

  const [selectedSemester, setSelectedSemester] = useState(
    SEMESTER_COLUMN_GROUP[0]
  );

  const average = (obj: Object) => {
    let arr = Object.values(obj);
    let result =
      arr.reduce((total, current) => (total += current)) / arr.length;
    return result;
  };

  const finalAverage = (obj: any) => {
    return (average(obj.semester1) + average(obj.semester2)) / 2;
  };

  const isPass = (obj: any) => finalAverage(obj) >= 5;

  return (
    <TableWrapper>
      <Table
        countColumn={true}
        rowKey={(record) => record.id}
        dataSource={transcriptData}
      >
        {/* Name col */}
        <Column
          title={({ sortColumns }) => (
            <ColumnTitle
              reactKey="name"
              sortColumns={sortColumns}
              text="Họ và tên"
            />
          )}
          sorter={true}
          key="name"
          render={(text, record) => <b>{record.name}</b>}
        />
        {/* Birthday col */}
        <Column
          title="Ngày sinh"
          className="birthday-col"
          dataIndex="birthday"
          key="birthday"
        />
        <AntTable.ColumnGroup
          className="semester-colgrp"
          title={() => (
            // Generate semester title with arrows
            <Row gap="0.5em" arrange="center" className="semester-column-title">
              <Icon
                src="caret.svg"
                onClick={() => setSelectedSemester(SEMESTER_COLUMN_GROUP[0])}
                className="prev-btn"
                alt="caret"
              />
              <div className="text">{selectedSemester.text}</div>
              <Icon
                src="caret.svg"
                onClick={() => setSelectedSemester(SEMESTER_COLUMN_GROUP[1])}
                className="next-btn"
                alt="caret"
              />
            </Row>
          )}
        >
          <>
            {/* scores col */}
            {SEMESTER_COLUMN_TABLE.map((item) => (
              <Column
                {...item}
                render={(text, record) =>
                  record[selectedSemester.key][item.dataIndex]
                }
                align="center"
              />
            ))}
            {/* Average col */}
            <Column
              title="Trung bình"
              key="average"
              align="center"
              render={(text, record: any) => (
                <div className="average-cell">
                  {average(record[selectedSemester.key]).toFixed(1)}
                </div>
              )}
            />
          </>
        </AntTable.ColumnGroup>
        {/* Final average col */}
        <Column
          title="Điểm TB cả năm"
          className="final-average-col"
          align="center"
          key="finalAverage"
          render={(text, record) => (
            <div
              className={`${
                isPass(record) ? "success" : "failure"
              } final-average-cell`}
            >
              {finalAverage(record).toFixed(1)}
            </div>
          )}
        />
        {/* Is pass col */}
        <Column
          title="Đạt"
          key="isPass"
          align="center"
          render={(text, record) =>
            isPass(record) ? (
              <div className="success">
                <CheckCircleFilled />
              </div>
            ) : (
              <div className="failure">
                <CloseCircleFilled />
              </div>
            )
          }
        />
        {/* update day col */}
        <Column
          align="center"
          title="Ngày cập nhật"
          key="updateDay"
          render={(text, record) => <i>{record.updateDay}</i>}
        />
      </Table>
    </TableWrapper>
  );
};

export default TranscriptTable;
