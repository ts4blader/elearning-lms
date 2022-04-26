import Page from "@components/Page";
import PseudoField from "@components/PseudoField";
import Select from "@components/Select";
import SidePane from "@components/SidePane";
import { Row } from "@layouts/Grid";
import { useAppSelector } from "@hooks";
import { ScheduleFrame, TopicsFrame } from "./Frames";

const LectureSchedule = () => {
  const scheduleSwitch = useAppSelector((state) => state.scheduleSwitch);

  return (
    <Page title="Phân công giảng dạy" className="lecture-schedule-page">
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
        {!scheduleSwitch.value ? <ScheduleFrame /> : <TopicsFrame />}
      </Row>
    </Page>
  );
};

export default LectureSchedule;
