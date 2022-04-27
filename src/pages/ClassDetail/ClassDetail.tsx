import React, { useState } from "react";
import Page from "@components/Page";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { PILLARS, BREADCRUMB_DATA, TABLES } from "./data";
import { showDeleteModal } from "@slices/deleteModalSlice";
import { showFormModal } from "@slices/formModalSlice";
import { useAppDispatch } from "@hooks";
import { ClassForm } from "@components/Forms";
import Breadcrumb from "@components/Breadcrumb";
import Tabs from "@components/Tabs";
import { InfoJumbotron } from "@components/Jumbotron";

const Title = () => {
  return <Breadcrumb data={BREADCRUMB_DATA} keyAffix="page-title" />;
};

const Panel = () => {
  const dispatch = useAppDispatch();

  const showDelete = () =>
    dispatch(
      showDeleteModal({
        name: "",
        onAction: () => null,
      })
    );
  const showForm = () =>
    dispatch(
      showFormModal({
        title: "Thiết lập lớp học",
        innerForm: ClassForm,
      })
    );

  return (
    <div className="buttons-panel">
      <span onClick={showForm}>
        <EditOutlined />
      </span>
      <span onClick={showDelete}>
        <DeleteOutlined />
      </span>
    </div>
  );
};

const ClassDetail = () => {
  const [selected, setSelected] = useState(TABLES[0]);

  return (
    <Page title={<Title />} className="class-detail">
      <div className="class-detail-header">
        <InfoJumbotron
          title="Thông tin chung"
          data={PILLARS}
          panel={<Panel />}
          keyAffix="general-info"
        />
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
