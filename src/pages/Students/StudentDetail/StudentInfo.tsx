import React from "react";
import ControlPanel from "@components/ControlPanel";
import { useAppDispatch } from "@hooks";
import { showDeleteModal } from "@slices/deleteModalSlice";
import { Row, Col } from "@layouts/Grid";
import { EditOutlined } from "@ant-design/icons";
import InfoWrapper from "@components/InfoWrapper";
import Field from "@components/PseudoField";
import { MOCK_STUDENT as data } from "./data";
import { useHistory, useRouteMatch } from "react-router";
import Tag from "@components/Tag";

export const Panel = () => {
  const dispatch = useAppDispatch();
  const { Group, DeleteButton, ExportButton, Button } = ControlPanel;
  const { url } = useRouteMatch();
  const history = useHistory();

  return (
    <Group className="student-info-panel">
      <Row gap="1.5em">
        <DeleteButton
          onClick={() =>
            dispatch(
              showDeleteModal({
                name: "học viên",
                onAction: () => null,
              })
            )
          }
        />
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

  return (
    <InfoWrapper className="student-info-content">
      <Title>Thông tin chung</Title>
      {/* Basic info */}
      <Container>
        <Row className="basic-info" align="flex-start">
          <AvatarSection uploadAble={false} />
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
                <Field label="Trạng thái">
                  <Tag.Status status={data.status}>{data.status}</Tag.Status>
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
    </InfoWrapper>
  );
};
