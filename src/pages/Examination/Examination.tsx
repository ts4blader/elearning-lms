import React, { useState } from "react";
import Page from "@components/Page";
import TableFrame from "@components/Table";
import ControlPanel from "@components/ControlPanel";
import Select from "@components/Select";
import Tabs from "@components/Tabs";
import { Row } from "@layouts/Grid";
import ExaminationTable from "./ExaminationTable";
import { useAppDispatch } from "@hooks";
import { showFormModal } from "@slices/formModalSlice";
import { ExaminationForms } from "@components/Forms";
import { TABS_DATA } from "./data";
import ExamCalendar from "./ExamCalendar";

const Examination = () => {
  const { Group, AddButton } = ControlPanel;

  const dispatch = useAppDispatch();
  const showForm = () => {
    dispatch(
      showFormModal({
        innerForm: ExaminationForms,
        title: "Thêm lịch thi mới",
      })
    );
  };

  const [activeTab, setActiveTab] = useState(TABS_DATA[0]);

  return (
    <Page className="examination-page" title="Quản lý lịch thi">
      <TableFrame
        table={activeTab.key === "byTable" ? ExaminationTable : () => null}
        render={activeTab.key === "byCalendar" && <ExamCalendar />}
        renderTitle="Danh sách bài thi"
      >
        <ControlPanel>
          <Group>
            <Row gap="1em">
              <Select
                defaultValue="2020-2021"
                data={["2021-2022", "2023-2024"]}
                keyAffix="semester-selector"
              />
              <Select
                placeholder="Chọn lớp"
                data={["6A", "6B"]}
                keyAffix="class-selector"
              />
              <Select
                placeholder="Chọn khối"
                data={["Khoi 6", "Khoi 7"]}
                keyAffix="grade-selector"
              />
            </Row>{" "}
          </Group>
          <Group>
            <Tabs
              data={TABS_DATA.map((item) => item.text)}
              keyAffix="examination-tabs"
              onChange={(index) => setActiveTab(TABS_DATA[index])}
            />
          </Group>
          <Group className="btn-grp">
            <AddButton onClick={showForm} />
          </Group>
        </ControlPanel>
      </TableFrame>
    </Page>
  );
};

export default Examination;
