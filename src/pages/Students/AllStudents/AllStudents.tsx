import React, { useState } from "react";
import Page from "@components/Page";
import TableFrame, { Table } from "@components/Table";
import ControlPanel from "@components/ControlPanel";
import Select from "@components/Select";
import DATA from "@seeds/thcs/students.json";
import { TABLES } from "./data";
import { Row } from "@layouts/Grid";
import Tabs from "@components/Tabs";

const TABS = TABLES.map((item) => item.tab.text);

const AllStudents = () => {
  const { Group } = ControlPanel;

  const [selected, setSelected] = useState(TABLES[0]);

  return (
    <Page title="Hồ sơ học viên" className="students-page">
      <TableFrame
        renderTitle={selected.title}
        table={
          selected.table !== null
            ? selected.table
            : () => (
                <Table
                  rowKey={(record) => record.id}
                  dataSource={DATA.filter(selected.filter)}
                  columns={selected.columns}
                />
              )
        }
      >
        <ControlPanel>
          <Group>
            <Row gap="1em">
              <Select
                defaultValue="Tất cả các khối"
                data={["Khối 6", "Khối 7", "Khối 8"]}
                keyAffix="grade-select"
              />
              <Select
                defaultValue="2021-2022"
                data={["2021-2022", "2021-2023", "2021-2024"]}
                keyAffix="semester-select"
              />
            </Row>
          </Group>
          <Group>
            <Tabs
              data={TABS}
              keyAffix="student-field"
              onChange={(value) => setSelected(TABLES[value])}
              variant="separate"
            />
          </Group>
          <Group className="btn-grp">
            <selected.panel />
          </Group>
        </ControlPanel>
      </TableFrame>
    </Page>
  );
};

export default AllStudents;
