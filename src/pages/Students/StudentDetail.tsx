import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import Page from "@components/Page";
import { Space } from "antd";

const TABS = ["Thông tin chung", "Quá trình học tập"];
const BREADCRUMB_DATA = [
  {
    text: "Hồ sơ học viên",
    link: "/dashboard/student",
  },
  {
    text: "Thông tin học viên",
    link: "/",
  },
];

const Title = () => {
  return <Breadcrumb data={BREADCRUMB_DATA} keyAffix="page-title" />;
};

const StudentDetail = () => {
  const [tab, setTab] = useState(TABS[0]);

  return (
    <Page title={<Title />} className="student-detail">
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
    </Page>
  );
};

export default StudentDetail;
