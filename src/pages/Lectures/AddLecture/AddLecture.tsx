import React from "react";
import Page from "@components/Page";
import Breadcrumb from "@components/Breadcrumb";
import { LectureForm } from "@components/Forms";
import { BREADCRUMB_DATA } from "./data";

const PageTitle = () => {
  return <Breadcrumb data={BREADCRUMB_DATA} keyAffix="page-title" />;
};

const AddLecture = () => {
  return (
    <Page title={<PageTitle />}>
      <LectureForm />
    </Page>
  );
};

export default AddLecture;
