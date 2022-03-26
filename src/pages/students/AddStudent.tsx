import React from "react";
import Section from "@components/Section";
import { Breadcrumb } from "antd";
import { RightOutlined } from "@ant-design/icons";
import AddStudentForm from "@components/forms/AddStudentForm";

const Title = () => {
  return (
    <Breadcrumb separator={<RightOutlined />}>
      <Breadcrumb.Item>Hồ sơ học viên</Breadcrumb.Item>
      <Breadcrumb.Item className="main-branch">Thêm học viên</Breadcrumb.Item>
    </Breadcrumb>
  );
};

const AddStudent = () => {
  return (
    <Section title={<Title />}>
      <AddStudentForm />
    </Section>
  );
};

export default AddStudent;
