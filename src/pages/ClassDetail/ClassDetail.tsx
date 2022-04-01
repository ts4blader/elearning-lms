import React from "react";
import Section from "@components/Section";
import { Tabs } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { PILLARS, BREADCRUMB_DATA } from "./data";
import { showDeleteModal } from "@slices/deleteModalSlice";
import { showFormModal } from "@slices/formModalSlice";
import { useAppDispatch } from "@stores/hooks";
import ClassForm from "@components/forms/ClassForm";
import StudentList from "@components/tables/StudentList";
import SubjectList from "@components/tables/SubjectList";
import Breadcrumb from "@components/Breadcrumb";
import Pillar from "./Pillar";

const Title = () => {
  return <Breadcrumb data={BREADCRUMB_DATA} keyAffix="section-title" />;
};

const ClassDetail = () => {
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
    <Section title={<Title />} className="class-detail">
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
        <Tabs className="students-tab" defaultActiveKey="1">
          <Tabs.TabPane tab="Danh sách học viên" key="1">
            <StudentList />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Danh sách môn học" key="2">
            <SubjectList />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </Section>
  );
};

export default ClassDetail;
