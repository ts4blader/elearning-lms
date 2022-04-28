import Breadcrumb from "@components/Breadcrumb";
import Page from "@components/Page";
import React from "react";
import { BREADCRUMB_DATA } from "./data";
import TableFrame from "@components/Table";
import ControlPanel from "@components/ControlPanel";
import Select from "@components/Select";
import ClassesListTable from "./ClassesListTable";
import { Row } from "@layouts/Grid";

const PageTitle = () => {
  return <Breadcrumb data={BREADCRUMB_DATA} keyAffix="page-title" />;
};

const ClassesList = () => {
  return (
    <Page title={<PageTitle />} className="classes-list-page">
      <Row gap="2em" align="flex-start">
        <TableFrame
          renderTitle={() => null}
          table={() => null}
          render={<ClassesListTable />}
        >
          <ControlPanel>
            <Select
              defaultValue="2021-2022"
              data={["2021-2022", "2022-2023"]}
              keyAffix="semester-selector"
            />
          </ControlPanel>
        </TableFrame>
      </Row>
    </Page>
  );
};

export default ClassesList;
