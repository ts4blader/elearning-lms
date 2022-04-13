import React, { useState } from "react";
import Page from "@components/Page";
import Breadcrumb from "@components/Breadcrumb";
import { BREADCRUMB_DATA, TABS } from "./data";
import ControlPanel from "@components/ControlPanel";
import Tabs from "@components/Tabs";
import Select from "@components/Select";
import { EditOutlined } from "@ant-design/icons";
import { Row } from "@layouts/Grid";

const PageTitle = () => {
  return <Breadcrumb data={BREADCRUMB_DATA} keyAffix="page-title" />;
};

const LectureDetail = () => {
  const { Group } = ControlPanel;

  const [tabs, setTabs] = useState(TABS[0]);

  return (
    <Page title={<PageTitle />} className="lecture-detail-page">
      <ControlPanel>
        <Group>
          <Tabs
            onChange={(value) => setTabs(TABS[value])}
            data={TABS.map((item) => item.text)}
            keyAffix="info-tab"
          />
        </Group>
        <tabs.panel />
      </ControlPanel>
      <div className="lecture-detail-page-content">
        <tabs.content />
      </div>
    </Page>
  );
};

export default LectureDetail;
