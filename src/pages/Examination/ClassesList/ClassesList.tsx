import Breadcrumb from "@components/Breadcrumb";
import Page from "@components/Page";
import React from "react";
import { BREADCRUMB_DATA } from "./data";
import TableFrame from "@components/Table";
import ControlPanel from "@components/ControlPanel";
import Select from "@components/Select";
import ClassesListTable from "./ClassesListTable";
import { Row } from "@layouts/Grid";
import ItemActions from "@components/ItemActions";
import PseudoField from "@components/PseudoField";

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
        {/* <div className="main-info">
          <Row arrange="space-between" className="main-info-head">
            <div className="text">Toán đại số</div>
            <ItemActions>
              <ItemActions.EditButton innerForm={() => null} title="" />
              <ItemActions.DeleteButton deleteName="" onDelete={() => null} />
            </ItemActions>
          </Row>
          <div className="main-info-fields">
            <PseudoField label="Khối">6</PseudoField>
            <PseudoField label="Tên kỳ thi">Giữa kỳ</PseudoField>
            <PseudoField label="Học kỳ">1</PseudoField>
            <PseudoField label="Ngày làm bài">20/01/2022</PseudoField>
            <PseudoField label="Tình trạng">Đã kết thúc</PseudoField>
          </div>
        </div> */}
      </Row>
    </Page>
  );
};

export default ClassesList;
