import Breadcrumb from "@components/Breadcrumb";
import Page from "@components/Page";
import React, { useMemo } from "react";
import { BREADCRUMB_DATA } from "./data";
import ControlPanel from "@components/ControlPanel";
import { Row } from "@layouts/Grid";
import { LectureForm } from "@components/Forms";
import { useHistory, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@hooks";
import { removeLecture } from "@slices/lectureSlice";

const PageTitle = () => {
  return <Breadcrumb data={BREADCRUMB_DATA} keyAffix="page-title" />;
};

const LectureEdit = () => {
  // route handler
  const history = useHistory();
  const params: any = useParams();
  // destructuring
  const { Group, Button, DeleteButton } = ControlPanel;
  // redux hook
  const dispatch = useAppDispatch();
  const lecture = useAppSelector((state) => state.lecture);
  // get derived data
  const lectureData = useMemo(() => {
    return lecture.value.filter((el) => el.id === params.lectureId)[0];
  }, [lecture, params]);

  return (
    <Page title={<PageTitle />} className="lecture-edit-page">
      <ControlPanel arrange="flex-end">
        <Group className="btn-group">
          <Row gap="1.5em">
            <DeleteButton
              name="giảng viên"
              onDelete={() => dispatch(removeLecture(lectureData.id))}
            />
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
        <LectureForm defaultData={lectureData} />
      </div>
    </Page>
  );
};

export default LectureEdit;
