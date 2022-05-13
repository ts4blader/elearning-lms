import React from "react";
import Page from "@components/Page";
import Breadcrumb from "@components/Breadcrumb";
import { BREADCRUMB_DATA } from "./data";
import ControlPanel from "@components/ControlPanel";
import Select from "@components/Select";
import { Row } from "@layouts/Grid";
import { useAppDispatch } from "@hooks";
import { showDeleteModal } from "@slices/deleteModalSlice";
import TableFrame from "@components/Table/TableFrame";
import { LecturesTable } from "./LecturesTable";
import { useHistory, useRouteMatch } from "react-router-dom";

const PageTitle = () => {
  return <Breadcrumb data={BREADCRUMB_DATA} keyAffix="page-title" />;
};

const AllLecture = () => {
  const { Group, DeleteButton, ExportButton, AddButton } = ControlPanel;

  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <Page title={<PageTitle />}>
      <TableFrame renderTitle="Danh sách giảng viên" table={LecturesTable}>
        <ControlPanel arrange="space-between">
          <Group>
            <Select
              defaultValue="2021-2022"
              data={["2021-2022", "2021-2023", "2021-2024"]}
              keyAffix="semester-select"
            />
          </Group>
          <Group className="btn-grp">
            <Row gap="1em">
              <DeleteButton
                name="giảng viên"
                selectedName="lecture-table"
                onDelete={() => null}
              />
              <div className="divider"></div>
              <ExportButton />
              <AddButton onClick={() => history.push(`${url}/add-lecture`)} />
            </Row>
          </Group>
        </ControlPanel>
      </TableFrame>
    </Page>
  );
};

export default AllLecture;
