import React from "react";
import Page from "@components/Page";
import { StudentForm } from "@components/Forms";
import Breadcrumb from "@components/Breadcrumb";
import { BREADCRUMB_DATA } from "./data";
const Title = () => {
  return <Breadcrumb data={BREADCRUMB_DATA} keyAffix="page-title" />;
};

const AddStudent = () => {
  return (
    <Page title={<Title />}>
      <StudentForm />
    </Page>
  );
};

export default AddStudent;
