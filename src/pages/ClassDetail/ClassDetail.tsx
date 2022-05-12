import React, { useEffect, useMemo, useState } from "react";
import Page from "@components/Page";
import { BREADCRUMB_DATA, TABLES } from "./data";
import Breadcrumb from "@components/Breadcrumb";
import Tabs from "@components/Tabs";
import ClassInfo from "./ClassInfo";
import { useParams } from "react-router-dom";
import { useAppSelector } from "@hooks";
import { getArrayItem } from "@utils/methods";
import { ClassProps } from "@types";

const Title = () => {
  return <Breadcrumb data={BREADCRUMB_DATA} keyAffix="page-title" />;
};

const ClassDetail = () => {
  //* state define
  const [selected, setSelected] = useState(TABLES[0]);
  // route
  const params: any = useParams();
  // redux hook
  const classData = useAppSelector((state) => state.class);
  // get derived data
  const data = useMemo(() => {
    return classData.value.find((item) => item.id === params.classId);
  }, [params, classData]);
  return (
    <Page title={<Title />} className="class-detail">
      <div className="class-detail-header">
        <ClassInfo data={data} />
      </div>
      <div className="class-detail-body">
        <Tabs
          data={["Danh sách học viên", "Danh sách môn học"]}
          keyAffix="student-tabs"
          onChange={(value) => setSelected(TABLES[value])}
        />
        <div className="intab-table">
          <selected.table />
        </div>
      </div>
    </Page>
  );
};

export default ClassDetail;
