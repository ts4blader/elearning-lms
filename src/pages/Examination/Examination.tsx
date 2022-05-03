import React from "react";
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

  return (
    <Page className="examination-page" title="Quản lý lịch thi">
      <TableFrame table={ExaminationTable} renderTitle="Danh sách bài thi">
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
              data={["Xem theo bảng", "Xem theo lịch"]}
              keyAffix="examination-tabs"
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
