import React, { useState } from "react";
import { Table, Button } from "antd";
import Page from "@components/Page";
import TableFrame from "@components/Table";
import ControlPanel from "@components/ControlPanel";
import Select from "@components/Select";
import DATA from "@seeds/thcs/students.json";
import { TABLES } from "./data";
import { Row } from "@layouts/Grid";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@hooks";
import Dropdown from "@components/Dropdown";
import { showFormModal } from "@slices/formModalSlice";
import { UploadForm } from "@components/Forms";
import Tabs from "@components/Tabs";

const TABS = TABLES.map((item) => item.tab.text);

const DropdownContent = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { path } = useRouteMatch();

  const showImport = () =>
    dispatch(
      showFormModal({
        title: "Tải file lên",
        innerForm: UploadForm,
      })
    );
  const showForm = () => history.push(`${path}/add-student`);

  return (
    <div className="dropdown-content-inner">
      <Button onClick={showImport}>Tải file lên</Button>
      <Button onClick={showForm}>Nhập thủ công</Button>
    </div>
  );
};

const AllStudents = () => {
  const [selected, setSelected] = useState(TABLES[0]);
  const pageSize = useAppSelector((state) => state.pageSize);
  const { Group, AddButton, DeleteButton, ExportButton } = ControlPanel;

  return (
    <Page title="Hồ sơ học viên" className="students-page">
      <TableFrame
        title={selected.title}
        table={
          selected.table !== null
            ? selected.table
            : () => (
                <Table
                  pagination={{
                    showSizeChanger: false,
                    pageSize: pageSize.value,
                  }}
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
            <Row gap="1em">
              <DeleteButton />
              <div className="divider"></div>
              <ExportButton />
              <Dropdown
                dropdownContent={<DropdownContent />}
                className="in-control-panel"
              >
                <AddButton />
              </Dropdown>
            </Row>
          </Group>
        </ControlPanel>
      </TableFrame>
    </Page>
  );
};

export default AllStudents;
