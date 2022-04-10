import React from "react";
import Page from "@components/Page";
import Breadcrumb from "@components/Breadcrumb";
import { BREADCRUMB_DATA, SEMESTER_SELECT } from "./data";
import ControlPanel from "@components/ControlPanel";
import Select from "@components/Select";
import TableFrame from "@components/Table/TableFrame";
import ReserveTable from "./ReserveTable";
import { showFormModal } from "@slices/formModalSlice";
import { useAppDispatch } from "@hooks";
import { ReserveForm } from "./ReserveForm";

const PageTitle = () => {
  return <Breadcrumb data={BREADCRUMB_DATA} keyAffix="page-title" />;
};

const StudentTransfer = () => {
  const { Group, AddButton } = ControlPanel;
  const dispatch = useAppDispatch();
  const showForm = () => {
    dispatch(
      showFormModal({
        title: "Cập nhật bảo lưu",
        innerForm: ReserveForm,
      })
    );
  };

  return (
    <Page title={<PageTitle />} className="student-reserve-page">
      <TableFrame title="Danh sách bảo lưu" table={ReserveTable}>
        <ControlPanel arrange="space-between">
          <Group>
            <Select
              defaultValue={SEMESTER_SELECT[0]}
              keyAffix="semester-selector"
              data={SEMESTER_SELECT}
            />
          </Group>
          <Group>
            <AddButton onClick={showForm} />
          </Group>
        </ControlPanel>
      </TableFrame>
    </Page>
  );
};

export default StudentTransfer;
