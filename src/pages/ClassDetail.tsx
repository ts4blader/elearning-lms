import React from "react";
import Section from "@components/Section";
import { Breadcrumb, Space, Tabs } from "antd";
import { RightOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { PILLARS } from "@constants/class-detail";
import { showDeleteModal } from "@slices/deleteModalSlice";
import { showFormModal } from "@slices/formModalSlice";
import { useAppDispatch } from "@stores/hooks";
import ClassForm from "@components/forms/ClassForm";
import StudentList from "@components/tables/StudentList";
import SubjectList from "@components/tables/SubjectList";

type PillarProps = {
  data: any[];
};

const Title = () => {
  const { Item } = Breadcrumb;

  return (
    <Breadcrumb separator={<RightOutlined />}>
      <Item>Khai báo dữ liệu</Item>
      <Item>Lớp học</Item>
      <Item className="main-branch">Chi tiết lớp học</Item>
    </Breadcrumb>
  );
};

const Pillar = ({ data }: PillarProps) => {
  return (
    <ul className="pillar">
      {data.map((item) => (
        <li className="pillar-item" key={item.key}>
          <Space size={20} align="start">
            <div className="label">{item.key}</div>
            <div className="value">{item.value}</div>
          </Space>
        </li>
      ))}
    </ul>
  );
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
