import React, { useCallback, useMemo } from "react";
import ControlPanel from "@components/ControlPanel";
import { Row, Col } from "@layouts/Grid";
import { EditOutlined } from "@ant-design/icons";
import InfoWrapper from "@components/InfoWrapper";
import Field from "@components/PseudoField";
import { useHistory, useRouteMatch, useParams } from "react-router";
import Tag from "@components/Tag";
import { useAppSelector } from "@hooks";
import moment from "moment";
import { STUDENT_STATUS } from "@utils/status";

export const Panel = () => {
  // destructuring
  const { Group, DeleteButton, ExportButton, Button } = ControlPanel;
  // route
  const { url } = useRouteMatch();
  const history = useHistory();

  return (
    <Group className="student-info-panel">
      <Row gap="1.5em">
        <DeleteButton name="học viên" onDelete={() => null} />
        <div className="divider"></div>
        <ExportButton />
        <Button
          className="edit-btn"
          icon={<EditOutlined />}
          size="large"
          type="primary"
          onClick={() => history.push(`${url}/edit`)}
        >
          Chỉnh sửa
        </Button>
      </Row>
    </Group>
  );
};

export const Content = () => {
  const {
    Title,
    Container,
    Subtitle,
    Divider,
    AvatarSection,
    AvatarPlaceHolder,
  } = InfoWrapper;
  // redux store
  const student = useAppSelector((state) => state.student);
  const schoolYear = useAppSelector((state) => state.schoolYear);
  const grade = useAppSelector((state) => state.grade);
  const classData = useAppSelector((state) => state.class);
  // route
  const params: any = useParams();
  console.log(params);
  // get student from url
  const studentData = useMemo(() => {
    return student.value.filter((item) => item.id === params.studentId)[0];
  }, [student, params]);
  // get derived data
  const getSchoolYear = useCallback(
    (schoolYearId: string) => {
      return schoolYear.value.find((el) => el.id === schoolYearId);
    },
    [schoolYear]
  );

  const getGrade = useCallback(
    (gradeId: string) => {
      return grade.value.find((el) => el.id === gradeId);
    },
    [grade]
  );

  const getClass = useCallback(
    (classId: string) => {
      return classData.value.find((el) => el.id === classId);
    },
    [classData]
  );

  if (studentData)
    return (
      <InfoWrapper className="student-info-content">
        <Title>Thông tin chung</Title>
        {/* Basic info */}
        <Container>
          <Row className="basic-info" align="flex-start">
            <AvatarSection uploadAble={false} initialImg={studentData.avatar} />
            <div className="info-entry">
              <Subtitle>Thông tin học viên</Subtitle>
              <Row align="flex-start">
                <Col>
                  <Field label="Họ và tên">{studentData.name}</Field>
                  <Field label="Giới tính">{studentData.gender}</Field>
                  <Field label="Ngày sinh">
                    {moment(studentData.birthday).format("DD/MM/YYYY")}
                  </Field>
                  <Field label="Nơi sinh">{studentData.birthPlace}</Field>
                  <Field label="Dân tộc">{studentData.ethic}</Field>
                  <Field label="Tôn giáo">{studentData.religion}</Field>
                </Col>
                <Col>
                  {/* school year */}
                  <Field label="Niên khóa">{`${
                    getSchoolYear(studentData.schoolYearId)?.beginYear
                  }-${
                    getSchoolYear(studentData.schoolYearId)?.endYear
                  }`}</Field>
                  {/* grade  */}
                  <Field label="Khối">
                    {getGrade(studentData.gradeId)?.name}
                  </Field>
                  {/* class */}
                  <Field label="Lớp">
                    {getClass(studentData.classId)?.name}
                  </Field>
                  {/* id */}
                  <Field label="Mã học viên">{studentData.id}</Field>
                  {/* join day  */}
                  <Field label="Ngày nhập học">
                    {moment(studentData.joinDay).format("DD/MM/YYYY")}
                  </Field>
                  {/* join form  */}
                  <Field label="Hình thức">{studentData.joinForm}</Field>
                </Col>
                <Col>
                  <Field label="Trạng thái">
                    <Tag.Status status={studentData.status}>
                      {
                        STUDENT_STATUS.find(
                          (el) => el.prioty === studentData.status
                        )?.text
                      }
                    </Tag.Status>
                  </Field>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
        {/* Divider */}
        <Divider />
        {/* Contact info */}
        <Container>
          <Row className="contact-info" align="flex-start">
            <AvatarPlaceHolder />
            <div className="info-entry">
              <Subtitle>Thông tin liên hệ</Subtitle>
              <Row align="flex-start">
                <Col>
                  <Field label="Địa chỉ">
                    {`${studentData.contact.address}, ${studentData.contact.subdistrict}, ${studentData.contact.district}, ${studentData.contact.city}`}
                  </Field>
                  <Field label="Email">{studentData.contact.email}</Field>
                  <Field label="Điện thoại">
                    {studentData.contact.phoneNumber}
                  </Field>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
        <Title>Thông tin gia đình</Title>
        {/* Family info */}
        <Container>
          <Row className="family-info">
            <Col>
              <Field label="Họ tên bố">{studentData.family.father.name}</Field>
              <Field label="Họ tên mẹ">{studentData.family.mother.name}</Field>
              <Field label="Họ tên GH">
                {studentData.family.supervisor.name}
              </Field>
            </Col>
            <Col>
              <Field label="Năm sinh bố">
                {studentData.family.father.birthYear}
              </Field>
              <Field label="Năm sinh mẹ">
                {studentData.family.mother.birthYear}
              </Field>
              <Field label="Năm sinh GH">
                {studentData.family.supervisor.birthYear}
              </Field>
            </Col>
            <Col>
              <Field label="Nghề nghiệp bố">
                {studentData.family.father.job}
              </Field>
              <Field label="Nghề nghiệp mẹ">
                {studentData.family.mother.job}
              </Field>
              <Field label="Nghề nghiệp GH">
                {studentData.family.supervisor.job}
              </Field>
            </Col>
            <Col>
              <Field label="SĐT bố">
                {studentData.family.father.phoneNumber}
              </Field>
              <Field label="SĐT mẹ">
                {studentData.family.mother.phoneNumber}
              </Field>
              <Field label="SĐT GH">
                {studentData.family.supervisor.phoneNumber}
              </Field>
            </Col>
          </Row>
        </Container>
      </InfoWrapper>
    );
  else return <h1>Không tìm thấy học viên</h1>;
};
