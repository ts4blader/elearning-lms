import InfoWrapper from "@components/InfoWrapper";
import React, { useState } from "react";
import { Form, Checkbox } from "antd";
import { Row, RowProps, Col } from "@layouts/Grid";
import { FormItem, FormButton } from "@components/Forms";
import TextInput from "@components/TextInput";
import { SelectInForm } from "@components/Select";
import { DatePickerInForm } from "@components/DatePicker";
import Tag from "@components/Tag";

const InfoRow = ({ className = "", children, ...rest }: RowProps) => {
  return (
    <Row className={`info-row ${className}`} align="flex-start" {...rest}>
      {children}
    </Row>
  );
};

export const LectureForm = () => {
  const {
    Title,
    Divider,
    Subtitle,
    Container,
    AvatarSection,
    AvatarPlaceHolder,
  } = InfoWrapper;

  const handleFinish = (value: any) => {
    console.log(value);
  };

  const [id, setId] = useState("");
  const [autoGenerate, setAutoGenerate] = useState(false);
  const [subjects, setSubjects] = useState<string[]>([]);

  return (
    <Form onFinish={handleFinish} className="lecture-form" name="lecture-form">
      <InfoWrapper>
        <Title>Thông tin chung</Title>
        <Container>
          <InfoRow className="basic-info">
            <AvatarSection uploadAble={true} />
            <Row className="info-entry" align="flex-start">
              <div className="info-record">
                <Subtitle>Thông tin giảng viên</Subtitle>
                <Row align="flex-start">
                  <Col>
                    <FormItem label="Mã giảng viên">
                      <TextInput
                        value={id}
                        onChange={({ target }) => setId(target.value)}
                        disabled={autoGenerate}
                      />
                    </FormItem>
                    <FormItem label="">
                      <Checkbox
                        className="auto-generate-checkbox"
                        checked={autoGenerate}
                        onChange={({ target }) =>
                          setAutoGenerate(target.checked)
                        }
                      >
                        Sinh mã tự động
                      </Checkbox>
                    </FormItem>
                    <FormItem label="Tổ bộ môn" name="group">
                      <SelectInForm
                        data={["Toan - Ly", "Ngu van - GDCD"]}
                        keyAffix="group-selector"
                      />
                    </FormItem>
                    <FormItem label="Môn giảng dạy" name="subject">
                      <SelectInForm
                        data={["Toan", "Ngu van"]}
                        keyAffix="subject-selector"
                      />
                    </FormItem>
                    <FormItem label="Họ và tên" name="name">
                      <TextInput />
                    </FormItem>
                    <FormItem label="Ngày sinh" name="birthday">
                      <DatePickerInForm />
                    </FormItem>
                    <FormItem label="Giới tính" name="gender">
                      <SelectInForm
                        data={["Male", "Female"]}
                        keyAffix="gender-selector"
                      />
                    </FormItem>
                    <FormItem label="Dân tộc" name="ethic">
                      <SelectInForm
                        data={["Mong", "Kinh", "Khmer"]}
                        keyAffix="ethic-selector"
                      />
                    </FormItem>
                    <FormItem label="Ngày vào trường" name="joinDay">
                      <DatePickerInForm />
                    </FormItem>
                  </Col>
                  <Col>
                    <FormItem label="Quốc tịch" name="nationality">
                      <SelectInForm
                        data={["Viet Nam", "Wibu"]}
                        keyAffix="nationality-selector"
                      />
                    </FormItem>
                    <FormItem label="Tôn giáo" name="religion">
                      <SelectInForm
                        data={["Công giáo", "Phật giáo"]}
                        keyAffix="religion-selector"
                      />
                    </FormItem>
                    <FormItem label="Trạng thái" name="status">
                      <SelectInForm
                        data={["Working", "Retired"]}
                        keyAffix="status-selector"
                      />
                    </FormItem>
                    <FormItem label="Môn kiêm nhiệm">
                      <Row gap="0.5em">
                        {subjects.map((item) => (
                          <Tag key={item} closable>
                            {item}
                          </Tag>
                        ))}
                      </Row>
                    </FormItem>
                    <FormItem label="Bí danh" name="nickname">
                      <TextInput />
                    </FormItem>
                  </Col>
                </Row>
              </div>
              <div className="info-record">
                <Subtitle>Địa chỉ liên hệ</Subtitle>
                <Row>
                  <Col>
                    <FormItem label="Tỉnh/Thành" name="province">
                      <SelectInForm
                        data={["TP.HCM", "Hà Lội"]}
                        keyAffix="province-selector"
                      />
                    </FormItem>
                    <FormItem label="Quận/Huyện" name="district">
                      <SelectInForm
                        data={["1", "2", "TB"]}
                        keyAffix="district-selector"
                      />
                    </FormItem>
                    <FormItem label="Xã/Phường" name="subdistrict">
                      <SelectInForm
                        data={["1", "2"]}
                        keyAffix="subdistrict-selector"
                      />
                    </FormItem>
                    <FormItem label="Địa chỉ" name="address">
                      <TextInput />
                    </FormItem>
                    <FormItem label="Email" name="email">
                      <TextInput />
                    </FormItem>
                    <FormItem label="SĐT" name="phoneNumber">
                      <TextInput />
                    </FormItem>
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
                  <FormItem label="CMND/CCCD" name="civilId">
                    <TextInput />
                  </FormItem>
                  <FormItem label="Ngày cấp" name="civilIdDay">
                    <DatePickerInForm />
                  </FormItem>
                  <FormItem label="Nơi cấp" name="civilIdPlace">
                    <TextInput />
                  </FormItem>
                </Col>
                <Col>
                  <FormItem name="isGroupMember">
                    <Checkbox>Đoàn viên</Checkbox>
                  </FormItem>
                  <FormItem label="Ngày vào" name="groupJoinDay">
                    <DatePickerInForm />
                  </FormItem>
                  <FormItem label="Nơi vào" name="groupJoinPlace">
                    <TextInput />
                  </FormItem>
                </Col>
                <Col>
                  <FormItem name="isPartyMember">
                    <Checkbox>Đảng viên</Checkbox>
                  </FormItem>
                  <FormItem label="Ngày vào" name="partyJoinDay">
                    <DatePickerInForm />
                  </FormItem>
                  <FormItem label="Nơi vào" name="partyJoinPlace">
                    <TextInput />
                  </FormItem>
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
            </div>
          </InfoRow>
        </Container>
      </InfoWrapper>
    </Form>
  );
};
