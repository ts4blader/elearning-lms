import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import Page from "@components/Page";
import { TABS, BREADCRUMB_DATA } from "./data";
import ControlPanel from "@components/ControlPanel";
import Tabs from "@components/Tabs";

const PageTitle = () => {
  return <Breadcrumb data={BREADCRUMB_DATA} keyAffix="page-title" />;
};

const StudentDetail = () => {
  const [tab, setTab] = useState(TABS[0]);
  const { Group } = ControlPanel;

  return (
    <Page title={<PageTitle />} className="student-detail-page">
      {/* Control panel */}
      <ControlPanel>
        <Group>
          <Tabs
            onChange={(value) => setTab(TABS[value])}
            data={TABS.map((item) => item.text)}
            keyAffix="info-tab"
          />
        </Group>
        <div className={`panel-wrapper ${tab.name}-panel-wrapper`}>
          <tab.panel />
        </div>
      </ControlPanel>
      <div className={`content-wrapper ${tab.name}-content-wrapper`}>
        <tab.content />
      </div>
    </Page>
  );
};

export default StudentDetail;
