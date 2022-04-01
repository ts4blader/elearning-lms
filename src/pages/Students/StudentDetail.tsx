import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import Section from "@components/Section";
import { BREADCRUMB_DATA } from "@constants/student-detail";
import { Space } from "antd";

const TABS = ["Thông tin chung", "Quá trình học tập"];

const Title = () => {
  return <Breadcrumb data={BREADCRUMB_DATA} keyAffix="section-title" />;
};

const StudentDetail = () => {
  const [tab, setTab] = useState(TABS[0]);

  return (
    <Section title={<Title />} className="student-detail-section">
      <div className="panel">
        {/* Tabs */}
        <div className="tabs">
          {TABS.map((item) => (
            <div
              className="tab"
              data-active={tab === item}
              key={item}
              onClick={() => setTab(item)}
            >
              {item}
            </div>
          ))}
        </div>
        {/* control buttons */}
        <Space className="control-btns"></Space>
      </div>
    </Section>
  );
};

export default StudentDetail;
