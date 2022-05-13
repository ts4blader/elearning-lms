import Breadcrumb from "@components/Breadcrumb";
import Page from "@components/Page";
import React, { useMemo } from "react";
import { BREADCRUMB_DATA } from "./data";
import ControlPanel from "@components/ControlPanel";
import { Row } from "@layouts/Grid";
import { StudentForm } from "@components/Forms";
import { useHistory, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "@hooks";
import { removeStudent } from "@slices/studentSlice";

const PageTitle = () => {
  return <Breadcrumb data={BREADCRUMB_DATA} keyAffix="page-title" />;
};

const StudentEdit = () => {
  const history = useHistory();
  const params: any = useParams();

  const { Group, DeleteButton, Button } = ControlPanel;

  const dispatch = useAppDispatch();
  const student = useAppSelector((state) => state.student);

  const studentData = useMemo(() => {
    return student.value.filter((el) => el.id === params.studentId)[0];
  }, [student, params]);

  return (
    <Page title={<PageTitle />} className="student-edit-page">
      <ControlPanel className="student-edit-panel" arrange="flex-end">
        <Group>
          <Row gap="1.5em">
            <DeleteButton
              name="học viên"
              onDelete={() => {
                dispatch(removeStudent(studentData.id));
                history.goBack();
              }}
            />
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
        <StudentForm defaultData={studentData} />
      </div>
    </Page>
  );
};

export default StudentEdit;
