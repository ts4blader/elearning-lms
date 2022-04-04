import React from "react";
import Page from "@components/Page";
import AddStudentForm from "./AddStudentForm";
import Breadcrumb from "@components/Breadcrumb";
import { BREADCRUMB_DATA } from "./data";
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
