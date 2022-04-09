import React from "react";
import Page from "@components/Page";
import Breadcrumb from "@components/Breadcrumb";
import { BREADCRUMB_DATA, SEMESTER_SELECT } from "./data";
import ControlPanel from "@components/ControlPanel";
import Select from "@components/Select";
import TableFrame from "@components/Table/TableFrame";
import TransferTable from "./TransferTable";
import { showFormModal } from "@slices/formModalSlice";
import { useAppDispatch } from "@hooks";
import { TransferForm } from "./TransferForm";

const PageTitle = () => {
  return <Breadcrumb data={BREADCRUMB_DATA} keyAffix="page-title" />;
};

const StudentTransfer = () => {
  const { Group, AddButton } = ControlPanel;
  const dispatch = useAppDispatch();
  const showForm = () => {
    dispatch(
      showFormModal({
        title: "Tiếp nhận chuyển trường",
        innerForm: TransferForm,
      })
    );
  };

  return (
    <Page title={<PageTitle />} className="student-transfer-page">
      <TableFrame title="Danh sách chuyển trường" table={TransferTable}>
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
