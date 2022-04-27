import React, { useState } from "react";
import { Row, Col } from "@layouts/Grid";
import { OVERVIEW } from "./tables-data";
import Tabs from "@components/Tabs";
import { Table } from "antd";
import { TABS, RESULT_TABLE } from "./tables-data";

type SemesterReportColProps = {
  data: typeof OVERVIEW[0];
};

const SemesterReportCol = ({ data }: SemesterReportColProps) => {
  return (
    <Col>
      <div className="semester-report-header">{data.semester}</div>
      <Row className="report-entry">
        <Col>
          <div className="report-entry-title">Học lực</div>
          <div className="report-entry-value">{data.rank}</div>
        </Col>
        <Col>
          <div className="report-entry-title">Hạnh kiểm</div>
          <div className="report-entry-value">{data.conduct}</div>
        </Col>
        <Col>
          <div className="report-entry-title">Điểm trung bình</div>
          <div className="report-entry-value">{data.average}</div>
        </Col>
      </Row>
    </Col>
  );
};

export const StudentReport = () => {
  const [selected, setSelected] = useState(TABS[0]);
  const { Column } = Table;

  return (
    <div className="student-report">
      <Row className="semester-report">
        {OVERVIEW.map((item) => (
          <SemesterReportCol data={item} key={item.semester} />
        ))}
      </Row>
      <div className="score-report">
        <Tabs
          onChange={(value) => setSelected(TABS[value])}
          data={["Học kỳ I", "Học kỳ II"]}
          keyAffix="score-report"
        />
        <div className="data-table">
          <Table
            pagination={false}
            rowKey={(record: any) => record.subject + record.average}
            dataSource={selected.source}
          >
            {RESULT_TABLE.map((item) => (
              <Column {...item} align="center" />
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};
