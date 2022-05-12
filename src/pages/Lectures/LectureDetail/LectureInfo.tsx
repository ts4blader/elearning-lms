import InfoWrapper from "@components/InfoWrapper";
import { Col, Row, RowProps } from "@layouts/Grid";
import React from "react";
import PseudoField from "@components/PseudoField";
import { MOCK_LECTURE } from "./data";
import { Checkbox } from "antd";
import Tag from "@components/Tag";
import ControlPanel from "@components/ControlPanel";
import Select from "@components/Select";
import { EditOutlined } from "@ant-design/icons";
import { useHistory, useRouteMatch } from "react-router-dom";

const InfoRow = ({ className = "", children, ...rest }: RowProps) => {
  return (
    <Row className={`info-row ${className}`} align="flex-start" {...rest}>
      {children}
    </Row>
  );
};

export const Panel = () => {
  const { Group, DeleteButton, Button } = ControlPanel;

  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <Row className="lecture-info-panel">
      <Group>
        <Select
          defaultValue="2021-2022"
          data={["2021-2022", "2022-2023"]}
          keyAffix="semester-selector"
        />
      </Group>
      <Group className="btn-grp">
        <Row gap="1em">
          <DeleteButton name="giảng viên" onDelete={() => null} />
          <div className="divider"></div>
          <Button
            type="primary"
            className="edit-btn"
            onClick={() => history.push(`${url}/edit`)}
            icon={<EditOutlined />}
          >
            Chỉnh sửa
          </Button>
        </Row>
      </Group>
    </Row>
  );
};

export const Content = () => {
  const {
    Container,
    Title,
    Subtitle,
    Divider,
    AvatarSection,
    AvatarPlaceHolder,
  } = InfoWrapper;
  const data = MOCK_LECTURE;

  return (
    <InfoWrapper className="lecture-info-content">
      <Title>Thông tin chung</Title>
      <Container>
        <InfoRow className="basic-info">
          <AvatarSection uploadAble={false} />
          <Row className="info-entry" align="flex-start">
            <div className="info-record">
              <Subtitle>Thông tin giảng viên</Subtitle>
              <Row align="flex-start">
                <Col>
                  <PseudoField label="Mã giảng viên">{data.id}</PseudoField>
                  <PseudoField label="">
                    <Checkbox
                      className="auto-generate-checkbox"
                      checked={data.autoGenerate}
                    >
                      Sinh mã tự động
                    </Checkbox>
                  </PseudoField>
                  <PseudoField label="Tổ bộ môn">{data.group}</PseudoField>
                  <PseudoField label="Môn giảng dạy">
                    {data.subject}
                  </PseudoField>
                  <PseudoField label="Họ và tên">{data.name}</PseudoField>
                  <PseudoField label="Ngày sinh">{data.birthday}</PseudoField>
                  <PseudoField label="Giới tính">{data.gender}</PseudoField>
                  <PseudoField label="Dân tộc">{data.ethic}</PseudoField>
                  <PseudoField label="Ngày vào trường">
                    {data.joinDay}
                  </PseudoField>
                </Col>
                <Col>
                  <PseudoField label="Quốc tịch">
                    {data.nationality}
                  </PseudoField>
                  <PseudoField label="Tôn giáo">{data.religion}</PseudoField>
                  <PseudoField label="Trạng thái">
                    {/* <Tag.Status status={data.status}>
                      {data.nationality}
                    </Tag.Status> */}
                  </PseudoField>
                  <PseudoField label="Môn kiêm nhiệm">
                    <Row gap="0.5em">
                      {data.subjects.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </Row>
                  </PseudoField>
                  <PseudoField label="Bí danh">{data.nickname}</PseudoField>
                </Col>
              </Row>
            </div>
            <div className="info-record">
              <Subtitle>Địa chỉ liên hệ</Subtitle>
              <Row>
                <Col>
                  <PseudoField label="Địa chỉ">
                    {data.contact.address}
                  </PseudoField>
                  <PseudoField label="Email">{data.contact.email}</PseudoField>
                  <PseudoField label="SĐT">
                    {data.contact.phoneNumber}
                  </PseudoField>
                </Col>
              </Row>
            </div>
          </Row>
        </InfoRow>
      </Container>

      <Divider />

      <Container>
        <InfoRow className="private-info">
          <AvatarPlaceHolder />
          <div className="info-entry">
            <Subtitle>Thông tin cá nhân</Subtitle>
            <Row>
              <Col>
                <PseudoField label="CMND/CCCD">
                  {data.private.civilId}
                </PseudoField>
                <PseudoField label="Ngày cấp">
                  {data.private.provideDay}
                </PseudoField>
                <PseudoField label="Nơi cấp">
                  {data.private.providePlace}
                </PseudoField>
              </Col>
              <Col>
                <Checkbox checked={true}>Đoàn viên</Checkbox>
                <PseudoField label="Ngày vào">
                  {data.inGroup.joinDay}
                </PseudoField>
                <PseudoField label="Nơi vào">
                  {data.inGroup.joinPlace}
                </PseudoField>
              </Col>
              <Col>
                <Checkbox checked={true}>Đảng viên</Checkbox>
                <PseudoField label="Ngày vào">
                  {data.inParty.joinDay}
                </PseudoField>
                <PseudoField label="Nơi vào">
                  {data.inParty.joinPlace}
                </PseudoField>
              </Col>
            </Row>
          </div>
        </InfoRow>
      </Container>

      <Divider />

      <Container>
        <InfoRow className="family-info">
          <AvatarPlaceHolder />
          <div className="info-entry">
            <Subtitle>Thông tin gia đình</Subtitle>
            <Row>
              {data.family.map((item, index) => (
                <Col key={`${item.name}-family-${index}`}>
                  <PseudoField label="Người liên hệ">{item.name}</PseudoField>
                  <PseudoField label="Địa chỉ">{item.address}</PseudoField>
                  <PseudoField label="SĐT">{item.phoneNumber}</PseudoField>
                </Col>
              ))}
            </Row>
          </div>
        </InfoRow>
      </Container>
    </InfoWrapper>
  );
};
