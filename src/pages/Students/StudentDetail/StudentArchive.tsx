import React from "react";
import ControlPanel from "@components/ControlPanel";
import Select from "@components/Select";
import { Row, Col } from "@layouts/Grid";
import { InfoJumbotron } from "@components/Jumbotron";
import { PILLARS } from "./data";

export const Panel = () => {
  const { Group, ExportButton } = ControlPanel;

  return (
    <Group className="student-archive-panel">
      <Row>
        <Select
          data={["2021-2022", "2023-2024"]}
          keyAffix="semester-selector"
        />
        <Select
          data={["6A", "6B", "6C"]}
          keyAffix="class-selector"
          placeholder="Chọn lớp"
        />
        <ExportButton />
      </Row>
    </Group>
  );
};

export const Content = () => {
  return (
    <div>
      <InfoJumbotron
        data={PILLARS}
        title="Thông tin chung"
        panel={<></>}
        keyAffix="general-info"
      />
    </div>
  );
};
