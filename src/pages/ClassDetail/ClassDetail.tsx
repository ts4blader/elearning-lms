import React, { useState } from "react";
import Page from "@components/Page";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { PILLARS, BREADCRUMB_DATA, TABLES } from "./data";
import { showDeleteModal } from "@slices/deleteModalSlice";
import { showFormModal } from "@slices/formModalSlice";
import { useAppDispatch } from "@hooks";
import ClassForm from "@components/forms/ClassForm";
import Breadcrumb from "@components/Breadcrumb";
import Pillar from "./Pillar";
import Tabs from "@components/Tabs";

const Title = () => {
  return <Breadcrumb data={BREADCRUMB_DATA} keyAffix="page-title" />;
};

const ClassDetail = () => {
  const [selected, setSelected] = useState(TABLES[0]);
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
    <Page title={<Title />} className="class-detail">
      <div className="class-detail-header">
        <div className="general-info">
          {/* Top bar */}
          <div className="top-bar">
            <h3 className="title">Thông tin chung</h3>
            <div className="buttons-panel">
              <span className="btn" onClick={showForm}>
                <EditOutlined />
              </span>
              <span className="btn" onClick={showDelete}>
                <DeleteOutlined />
              </span>
            </div>
          </div>
          {/* Content */}
          <div className="pillars">
            {PILLARS.map((item, index) => (
              <Pillar data={item} key={`pillar-${index}`} />
            ))}
          </div>
        </div>
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
