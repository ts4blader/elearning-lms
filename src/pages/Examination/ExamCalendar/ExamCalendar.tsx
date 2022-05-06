import { Row } from "@layouts/Grid";
import { Calendar, Divider } from "antd";
import React, { useState } from "react";
import Badge from "@components/Badge";
import moment, { Moment } from "moment";
import Icon from "@assets/Icon";
import Tabs from "@components/Tabs";
import Card from "@components/Card";
import { TABS_DATA } from "./data";
import { CARD_INFO_DATA } from "./data";

type CellProps = {
  value: any;
};

const CellRender = ({ value }: CellProps) => {
  const listData = [
    { type: "success", title: "Final Math Exam", duration: "10mins" },
  ];

  return (
    <ul className="calendar-events">
      {listData.map((item) => (
        <li key={item.title}>
          <Badge.PillBadge type={item.type as any}>
            <Badge.Title>{item.title}</Badge.Title>
            <Badge.Content>{item.duration}</Badge.Content>
          </Badge.PillBadge>
        </li>
      ))}
    </ul>
  );
};

const HeaderRender = ({ value, type, onChange, onTypeChange }: any) => {
  const nextMonth = () => {
    let clone = moment(value);

    let month = clone.month() + 1;
    let year = clone.year();

    if (month < 12) {
      onChange(moment(`${year}/${month + 1}/01`));
    } else {
      onChange(moment(`${year + 1}/01/01`));
    }
  };

  const prevMonth = () => {
    let clone = moment(value);
    let month = clone.month() + 1;
    let year = clone.year();

    if (month > 1) {
      onChange(moment(`${year}/${month - 1}/01`));
    } else {
      onChange(moment(`${year - 1}/12/01`));
    }
  };

  return (
    <Row className="calendar-header" arrange="space-between">
      <Row className="date-time-pane" gap="1em">
        <Icon
          alt="prev"
          src="caret.svg"
          className="prev-icon"
          onClick={prevMonth}
        />
        <div className="date-time-value">{`Tháng ${value.format(
          "M"
        )}  - ${value.format("YYYY")}`}</div>
        <Icon
          alt="next"
          src="caret.svg"
          className="next-icon"
          onClick={nextMonth}
        />
      </Row>
      <div className="week-month-pane">
        <Tabs
          data={TABS_DATA.map((item) => item.text)}
          onChange={(index) => onTypeChange(TABS_DATA[index].key)}
          keyAffix="week-month-tabs"
        />
      </div>
    </Row>
  );
};

const ExamCalendar = () => {
  const [date, setDate] = useState<Moment>(moment("2022/1/31"));

  return (
    <Row gap="2em" align="flex-start">
      <div className="exam-calendar">
        <div className="exam-calendar-title">Danh sách bài thi</div>
        <Calendar
          value={date}
          onSelect={(value) => setDate(value)}
          headerRender={(props) => <HeaderRender {...props} />}
          dateCellRender={({ date }) => <CellRender value={date} />}
        />
      </div>
      <div className="events-display">
        <div className="events-display-header">
          <div className="day">{date.format("D")}</div>
          <div className="dayofweek">{date.format("dddd")}</div>
          <div className="month-n-year">{date.format("MMMM, yyyy")}</div>
        </div>

        <Divider />

        <div className="events-display-body">
          <Card.Info
            data={CARD_INFO_DATA}
            status="processing"
            titleText="Ngữ văn"
          />
          <Divider />
        </div>
      </div>
    </Row>
  );
};

export default ExamCalendar;
