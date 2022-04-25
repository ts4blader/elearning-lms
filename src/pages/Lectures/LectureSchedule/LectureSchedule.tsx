import Page from "@components/Page";
import PseudoField from "@components/PseudoField";
import Select from "@components/Select";
import SidePane from "@components/SidePane";
import { Row } from "@layouts/Grid";
import TableFrame from "@components/Table";
import React from "react";
import ControlPanel from "@components/ControlPanel";
import { ScheduleTable } from "./ScheduleTable";
import { useAppSelector, useAppDispatch } from "@hooks";
import { setScheduleSwitch } from "@slices/scheduleSwitchSlice";

const LectureSchedule = () => {
  const { AddButton, DeleteButton, Button } = ControlPanel;

  const scheduleSwitch = useAppSelector((state) => state.scheduleSwitch);
  const dispatch = useAppDispatch();
  const hideScheduleWork = () => dispatch(setScheduleSwitch(false));

  return (
    <Page title="Phân công giảng dạy">
      <Row gap="2em" align="stretch">
        <SidePane>
          <SidePane.Head title="Đang chọn xem">
            <PseudoField label="Niên khóa">
              <Select
                data={["2021-2022", "2023-2024"]}
                keyAffix="semester-selector"
                defaultValue="2021-2022"
              />
            </PseudoField>
            <PseudoField label="Bộ môn">
              <Select
                data={["Toan", "Van"]}
                defaultValue="Toan"
                keyAffix="subject-selector"
              />
            </PseudoField>
          </SidePane.Head>
          <SidePane.Body data={["A", "B"]} onChange={() => null} />
        </SidePane>
        <TableFrame
          table={ScheduleTable}
          renderTitle="Danh sách phân công giảng dạy"
        >
          <ControlPanel arrange="flex-end">
            {scheduleSwitch.value ? (
              <Button type="primary" onClick={hideScheduleWork}>
                Phân công giảng dạy
              </Button>
            ) : (
              <Row gap="1.5em">
                <DeleteButton
                  name="phân công"
                  selectedName="schedule-table"
                  onDelete={() => null}
                />
                <div className="divider"></div>
                <AddButton />
              </Row>
            )}
          </ControlPanel>
        </TableFrame>
      </Row>
    </Page>
  );
};

export default LectureSchedule;
