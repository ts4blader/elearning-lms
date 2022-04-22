import Breadcrumb from "@components/Breadcrumb";
import Page from "@components/Page";
import React from "react";
import { BREADCRUMB_DATA } from "./data";
import ControlPanel from "@components/ControlPanel";
import { Row } from "@layouts/Grid";
import { LectureForm } from "@components/Forms";
import { useHistory } from "react-router-dom";

const PageTitle = () => {
  return <Breadcrumb data={BREADCRUMB_DATA} keyAffix="page-title" />;
};

const LectureEdit = () => {
  const history = useHistory();
  const { Group, Button, DeleteButton } = ControlPanel;

  return (
    <Page title={<PageTitle />} className="lecture-edit-page">
      <ControlPanel arrange="flex-end">
        <Group className="btn-group">
          <Row gap="1.5em">
            <DeleteButton name="giảng viên" onDelete={() => null} />
            <div className="divider"></div>
            <Button className="cancel-btn" onClick={() => history.goBack()}>
              Hủy
            </Button>
            <Button className="save-btn" type="primary">
              Lưu
            </Button>
          </Row>
        </Group>
      </ControlPanel>
      <div className="lecture-form-wrapper">
        <LectureForm />
      </div>
    </Page>
  );
};

export default LectureEdit;
