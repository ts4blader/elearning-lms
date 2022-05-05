import { Row } from "@layouts/Grid";
import { Calendar } from "antd";
import React from "react";
import Badge from "@components/Badge";

type SharedProps = {
  value: any;
};

const CellRender = ({ value }: SharedProps) => {
  const listData = [
    { type: "success", title: "Final Math Exam", duration: "10mins" },
  ];

  return (
    <ul className="events">
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

const ExamCalendar = () => {
  return (
    <Row gap="2em">
      <div className="exam-calendar">
        <div className="exam-calendar-title">Danh sách bài thi</div>
        <Calendar dateCellRender={({ date }) => <CellRender value={date} />} />
      </div>
    </Row>
  );
};

export default ExamCalendar;
