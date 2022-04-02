import React from "react";
import Page from "@components/Page";
import moment from "moment";
import Select from "@components/Select";
import Card from "@components/Card";
import { Progress } from "antd";
import StatisticalEntry from "./StatisticalEntry";
import VisitChart from "./VisitChart";
import ColumnGroupChart from "./ColumnGroupChart";
import DatePicker from "@components/DatePicker";
import { SEMESTER, CARDS, CLASSES, LEVELS, STUDENTS_AMOUNT } from "./data";

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
    <Page className="overview-page" title="Tổng quan">
      {/* Overview row */}
      <div className="overview-row row">
        <div className="semester-dropdown-wrapper">
          <div className="row-label">Niên khóa</div>
          <Select
            keyAffix="semester"
            data={SEMESTER}
            defaultValue={SEMESTER[0]}
          />
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
            <Select keyAffix="class" data={CLASSES} placeholder="Chọn khối" />
          </StatisticalEntry.Header>
          <StatisticalEntry.Content>
            <ColumnGroupChart />
          </StatisticalEntry.Content>
        </StatisticalEntry>
        {/* Statistical Students */}
        <StatisticalEntry className="students-amount">
          <StatisticalEntry.Header>
            <h3 className="title">Số lượng học viên</h3>
            <Select keyAffix="level" data={LEVELS} defaultValue={LEVELS[0]} />
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
    </Page>
  );
};

export default Overview;
