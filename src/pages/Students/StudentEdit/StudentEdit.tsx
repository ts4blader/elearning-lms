import Breadcrumb from "@components/Breadcrumb";
import Page from "@components/Page";
import React from "react";
import { BREADCRUMB_DATA } from "./data";
import ControlPanel from "@components/ControlPanel";
import { Row } from "@layouts/Grid";
import { useAppDispatch } from "@hooks";
import { showDeleteModal } from "@slices/deleteModalSlice";
import { StudentForm } from "@components/Forms";
import { useHistory } from "react-router";

const PageTitle = () => {
  return <Breadcrumb data={BREADCRUMB_DATA} keyAffix="page-title" />;
};

const StudentEdit = () => {
  const dispatch = useAppDispatch();
  const deleteModal = () => {
    dispatch(
      showDeleteModal({
        name: "học viên",
        onAction: () => null,
      })
    );
  };
  const history = useHistory();

  const { Group, DeleteButton, Button } = ControlPanel;

  return (
    <Page title={<PageTitle />} className="student-edit-page">
      <ControlPanel className="student-edit-panel" arrange="flex-end">
        <Group>
          <Row gap="1.5em">
            <DeleteButton onClick={deleteModal} />
            <div className="divider"></div>
            <Button
              size="large"
              className="cancel-btn"
              onClick={() => history.goBack()}
            >
              Hủy
            </Button>
            <Button size="large" className="save-btn" type="primary">
              Lưu
            </Button>
          </Row>
        </Group>
      </ControlPanel>
      <div className="edit-form">
        <StudentForm />
      </div>
    </Page>
  );
};

export default StudentEdit;
