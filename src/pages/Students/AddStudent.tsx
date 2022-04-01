import React from "react";
import Section from "@components/Section";
import AddStudentForm from "./AddStudentForm";
import Breadcrumb from "@components/Breadcrumb";

const BREADCRUMB_DATA = [
  {
    text: "Hồ sơ học viên",
    link: "/dashboard/student",
  },
  {
    text: "Thêm học viên",
    link: "",
  },
];

const Title = () => {
  return <Breadcrumb data={BREADCRUMB_DATA} keyAffix="section-title" />;
};

const AddStudent = () => {
  return (
    <Section title={<Title />}>
      <AddStudentForm />
    </Section>
  );
};

export default AddStudent;
