import React from "react";
import Page from "@components/Page";
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
  return <Breadcrumb data={BREADCRUMB_DATA} keyAffix="page-title" />;
};

const AddStudent = () => {
  return (
    <Page title={<Title />}>
      <AddStudentForm />
    </Page>
  );
};

export default AddStudent;
