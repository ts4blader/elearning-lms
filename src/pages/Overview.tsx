import React from "react";
import Section from "@components/Section";
import moment from "moment";
import Selection from "@components/Selection";
import Card from "@components/Card";
import { Progress, DatePicker } from "antd";
import StatisticalEntry from "@components/StatisticalEntry";
import VisitChart from "@components/VisitChart";
import ColumnGroupChart from "@components/ColumnGroupChart";
import {
  SEMESTER,
  CARDS,
  CLASSES,
  LEVELS,
  STUDENTS_AMOUNT,
} from "@constants/overview";

const MAX_STUDENT = 500;

const Overview = () => {
  const weekFormat = (value: any) => {
    return `${moment(value).startOf("week").format("DD/MM/YYYY")} - ${moment(
      value
    )
      .endOf("week")
      .format("DD/MM/YYYY")}`;
  };

  return (
    <Section className="overview-section" title="Tổng quan">
      {/* Overview row */}
      <div className="overview-row row">
        <div className="semester-dropdown-wrapper">
          <div className="row-label">Niên khóa</div>
          <Selection keyAffix="semester" data={SEMESTER} />
        </div>
        <ul className="overview-cards">
          {CARDS.map((item) => (
            <li
              className="overview-card-item"
              key={`overview-card-${item.title}`}
            >
              <Card
                title={item.title}
                description={item.description}
                variant={item.variant as "primary" | "secondary"}
              />
            </li>
          ))}
        </ul>
      </div>
      {/* Statistical row */}
      <div className="statistical-row">
        {/* Study result chart */}
        <StatisticalEntry className="study-result">
          <StatisticalEntry.Header>
            <h3 className="title">Thống kê kết quả học tập</h3>
            <Selection keyAffix="class" data={CLASSES} />
          </StatisticalEntry.Header>
          <StatisticalEntry.Content>
            <ColumnGroupChart />
          </StatisticalEntry.Content>
        </StatisticalEntry>
        {/* Statistical Students */}
        <StatisticalEntry className="students-amount">
          <StatisticalEntry.Header>
            <h3 className="title">Số lượng học viên</h3>
            <Selection keyAffix="level" data={LEVELS} />
          </StatisticalEntry.Header>
          <StatisticalEntry.Content>
            <ul className="students-amount-list">
              {STUDENTS_AMOUNT.map((item) => (
                <li
                  className="students-amount-item"
                  key={`grade-${item.class}`}
                >
                  <div className="info-row">
                    <div className="info-row-label">{`Khối ${item.class}`}</div>
                    <div className="info-row-max">{MAX_STUDENT}</div>
                  </div>
                  <Progress
                    percent={(item.value / MAX_STUDENT) * 100}
                    showInfo={false}
                  />
                </li>
              ))}
            </ul>
          </StatisticalEntry.Content>
        </StatisticalEntry>
        {/* Visit Ratio */}
        <StatisticalEntry className="visit-ratio">
          <StatisticalEntry.Header>
            <h3 className="title">Thống kê lưu lượng truy cập</h3>
            <DatePicker
              allowClear={false}
              defaultValue={moment()}
              format={weekFormat}
              picker="week"
            />
          </StatisticalEntry.Header>
          <StatisticalEntry.Content>
            <VisitChart />
          </StatisticalEntry.Content>
        </StatisticalEntry>
      </div>
    </Section>
  );
};

export default Overview;
