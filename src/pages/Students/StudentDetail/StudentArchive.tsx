import React from "react";
import ControlPanel from "@components/ControlPanel";
import Select from "@components/Select";
import { Row, Col } from "@layouts/Grid";
import { InfoJumbotron } from "@components/Jumbotron";
import { ARCHIVES } from "./data";
import Collapse from "@components/Collapse";

export const Panel = () => {
  const { Group, ExportButton } = ControlPanel;

  return (
    <Group className="student-archive-panel">
      <Row gap="1.5em">
        <Select
          data={["2021-2022", "2023-2024"]}
          keyAffix="semester-selector"
          defaultValue="2021-2022"
        />
        <Select
          data={["6A", "6B", "6C"]}
          keyAffix="class-selector"
          defaultValue="6A"
        />
        <ExportButton />
      </Row>
    </Group>
  );
};

export const Content = () => {
  return (
    <div className="student-archive-content">
      {/* <InfoJumbotron
        data={PILLARS}
        title="Thông tin chung"
        panel={<></>}
        keyAffix="general-info"
      /> */}
      <Collapse className="student-archives" accordion>
        {ARCHIVES.map((item, index) => (
          <Collapse.Panel header={item.header} key={`${item.name}-${index}`}>
            <item.content />
          </Collapse.Panel>
        ))}
      </Collapse>
    </div>
  );
};
