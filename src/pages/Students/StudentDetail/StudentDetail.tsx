import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import Breadcrumb from "@components/Breadcrumb";
import Page from "@components/Page";
import { TABS, BREADCRUMB_DATA, MOCK_STUDENT } from "./data";
import ControlPanel from "@components/ControlPanel";
import Tabs from "@components/Tabs";
import { Row, Col } from "@layouts/Grid";
import Field from "@components/PseudoField";
import StudentInfoWrapper from "../StudentInfoWrapper";

const PageTitle = () => {
  return <Breadcrumb data={BREADCRUMB_DATA} keyAffix="page-title" />;
};

const StudentDetail = () => {
  const [tab, setTab] = useState(TABS[0]);
  const { Group, ExportButton, DeleteButton, Button } = ControlPanel;
  const data = MOCK_STUDENT;
  const { Title, Subtitle, Divider, Container } = StudentInfoWrapper;

  return (
    <Page title={<PageTitle />} className="student-detail-page">
      {/* Control panel */}
      <ControlPanel arrange="space-between">
        <Group>
          <Tabs data={TABS} keyAffix="info-tab" />
        </Group>
        <Group>
          <Row gap="1.5em">
            <DeleteButton />
            <div className="divider"></div>
            <ExportButton />
            <Button
              className="edit-btn"
              icon={<EditOutlined />}
              size="large"
              type="primary"
            >
              Chỉnh sửa
            </Button>
          </Row>
        </Group>
      </ControlPanel>
      {/* Student info */}
      <StudentInfoWrapper>
        <Title>Thông tin chung</Title>
        {/* Basic info */}
        <Container>
          <Row className="basic-info" align="flex-start">
            <div className="avatar">
              <img src="https://picsum.photos/seed/picsum/300" alt="" />
            </div>
            <div className="info-entry">
              <Subtitle>Thông tin học viên</Subtitle>
              <Row align="flex-start">
                <Col>
                  <Field label="Họ và tên">{data.name}</Field>
                  <Field label="Giới tính">{data.gender}</Field>
                  <Field label="Ngày sinh">{data.birthday}</Field>
                  <Field label="Nơi sinh">{data.bornPlace}</Field>
                  <Field label="Dân tộc">{data.ethic}</Field>
                  <Field label="Tôn giáo">{data.regilion}</Field>
                </Col>
                <Col>
                  <Field label="Niên khóa">{data.semester}</Field>
                  <Field label="Khối">{data.grade}</Field>
                  <Field label="Lớp">{data.class}</Field>
                  <Field label="Mã học viên">{data.id}</Field>
                  <Field label="Ngày nhập học">{data.admissionDay}</Field>
                  <Field label="Hình thức">{data.admissionType}</Field>
                </Col>
                <Col>
                  <Field label="Trạng thái">{data.status}</Field>
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
            <div className="avatar"></div>
            <div className="info-entry">
              <Subtitle>Thông tin liên hệ</Subtitle>
              <Row align="flex-start">
                <Col>
                  <Field label="Địa chỉ">{data.address}</Field>
                  <Field label="Email">{data.email}</Field>
                  <Field label="Điện thoại">{data.phoneNumber}</Field>
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
              <Field label="Họ tên bố">{data.family.father.name}</Field>
              <Field label="Họ tên mẹ">{data.family.mother.name}</Field>
              <Field label="Họ tên GH">{data.family.supervisor.name}</Field>
            </Col>
            <Col>
              <Field label="Năm sinh bố">{data.family.father.birthYear}</Field>
              <Field label="Năm sinh mẹ">{data.family.mother.birthYear}</Field>
              <Field label="Năm sinh GH">
                {data.family.supervisor.birthYear}
              </Field>
            </Col>
            <Col>
              <Field label="Nghề nghiệp bố">{data.family.father.job}</Field>
              <Field label="Nghề nghiệp mẹ">{data.family.mother.job}</Field>
              <Field label="Nghề nghiệp GH">{data.family.supervisor.job}</Field>
            </Col>
            <Col>
              <Field label="SĐT bố">{data.family.father.phoneNumber}</Field>
              <Field label="SĐT mẹ">{data.family.mother.phoneNumber}</Field>
              <Field label="SĐT GH">{data.family.supervisor.phoneNumber}</Field>
            </Col>
          </Row>
        </Container>
      </StudentInfoWrapper>
    </Page>
  );
};

export default StudentDetail;
