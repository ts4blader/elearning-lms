import React from "react";
import Select from "@components/Select";
import ControlPanel from "@components/ControlPanel";
import { Row } from "@layouts/Grid";
import Collapse from "@components/Collapse";
import { ARCHIVES } from "./data";

export const Panel = () => {
  const { Group, ExportButton } = ControlPanel;

  return (
    <Row className="lecture-archive-panel">
      <Group>
        <Row gap="1.5em">
          <Select
            defaultValue="2021-2022"
            data={["2021-2022", "2022-2023"]}
            keyAffix="semester-selector"
          />
          <Select
            defaultValue="6A"
            data={["6A", "6B"]}
            keyAffix="class-selector"
          />
        </Row>
      </Group>
      <Group className="btn-grp">
        <ExportButton />
      </Group>
    </Row>
  );
};
export const Content = () => {
  return (
    <div className="lecture-archive-content">
      <Collapse className="lecture-archives" accordion>
        {ARCHIVES.map((item) => (
          <Collapse.Panel header={item.header} key={item.name}>
            <item.content />
          </Collapse.Panel>
        ))}
      </Collapse>
    </div>
  );
};
