import InfoWrapper from "@components/InfoWrapper";
import React, { useMemo, useState } from "react";
import { Form, Checkbox, Button } from "antd";
import { Row, RowProps } from "@layouts/Grid";
import {
  FormItem,
  FormButton,
  MultiSubjectForm,
  FamilyContactForm,
} from "@components/Forms";
import TextInput from "@components/TextInput";
import { PlusOutlined } from "@ant-design/icons";
import { SelectInForm } from "@components/Select";
import { DatePickerInForm } from "@components/DatePicker";
import Tag from "@components/Tag";
import { useAppDispatch } from "@hooks";
import { showFormModal } from "@slices/formModalSlice";
import { useHistory, useParams } from "react-router-dom";
import { FamilyContactTable, FamilyContactProps } from "@components/Table";
import lectureData from "@seeds/thcs/lectures.json";

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
  /* --------- router handler --------- */
  const history = useHistory();
  const params: any = useParams();

  const data = useMemo(() => {
    return lectureData.filter((item) => item.id === params.lectureId)[0];
  }, [params]);
  /* --------- dispatch event --------- */
  const dispatch = useAppDispatch();
  const showSubjectsForm = () => {
    dispatch(
      showFormModal({
        title: "Thêm môn kiêm nhiệm",
        innerForm: (props) => (
          <MultiSubjectForm
            {...props}
            initList={subjects}
            onSubjectsChange={(values) => setSubjects(values)}
          />
        ),
      })
    );
  };
  const showContactForm = () => {
    dispatch(
      showFormModal({
        title: "Thêm thông tin liên hệ",
        innerForm: (props) => (
          <FamilyContactForm
            {...props}
            onSubmit={(value) => setFamilyContacts([...familyContacts, value])}
          />
        ),
      })
    );
  };
  /* ---------- form handler ---------- */
  const handleFinish = (value: any) => {
    console.log(value);
  };
  /* ---------- state declare --------- */
  const [id, setId] = useState(data?.id);
  const [autoGenerate, setAutoGenerate] = useState(false);
  const [subjects, setSubjects] = useState<string[]>([]);
  const [familyContacts, setFamilyContacts] = useState<FamilyContactProps[]>(
    []
  );

  const [isInGroup, setIsInGroup] = useState(false);
  const [isInParty, setIsInParty] = useState(false);

  return (
    <Form onFinish={handleFinish} className="lecture-form" name="lecture-form">
      <InfoWrapper>
        <Title>Thông tin chung</Title>
        <Container>
          <InfoRow className="basic-info">
            <AvatarSection uploadAble={true} />
            <div className="info-entry">
              <Subtitle>Thông tin giảng viên</Subtitle>
              <Subtitle>Địa chỉ liên hệ</Subtitle>
              <div className="info-col">
                <FormItem label="Mã giảng viên">
                  <TextInput
                    value={autoGenerate ? "lecture-HG78" : id}
                    onChange={({ target }) => setId(target.value)}
                    disabled={autoGenerate}
                  />
                </FormItem>
                <FormItem label="">
                  <Checkbox
                    className="auto-generate-checkbox"
                    checked={autoGenerate}
                    onChange={({ target }) => setAutoGenerate(target.checked)}
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
              </div>
              <div className="info-col">
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
                  <Row gap="0.5em" className="subject-list">
                    {subjects.map((item) => (
                      <Tag
                        key={item}
                        closable
                        onClose={() =>
                          setSubjects(subjects.filter((el) => el !== item))
                        }
                      >
                        {item}
                      </Tag>
                    ))}
                  </Row>
                </FormItem>
                <FormItem>
                  <Row
                    className="add-subject-btn"
                    gap="0.5em"
                    onClick={showSubjectsForm}
                  >
                    <div className="text">Thêm</div>
                    <div className="icon">
                      <PlusOutlined />
                    </div>
                  </Row>
                </FormItem>
                <FormItem label="Bí danh" name="nickname">
                  <TextInput />
                </FormItem>
              </div>
              <div className="info-col">
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
              </div>
            </div>
          </InfoRow>
        </Container>

        <Divider />

        <Container>
          <InfoRow className="private-info">
            <AvatarPlaceHolder />
            <div className="info-entry">
              <Subtitle>Thông tin cá nhân</Subtitle>
              <div className="info-col">
                <FormItem label="CMND/CCCD" name="civilId">
                  <TextInput />
                </FormItem>
                <FormItem label="Ngày cấp" name="civilIdDay">
                  <DatePickerInForm />
                </FormItem>
                <FormItem label="Nơi cấp" name="civilIdPlace">
                  <TextInput />
                </FormItem>
              </div>
              <div className="info-col">
                <FormItem>
                  <Checkbox
                    checked={isInGroup}
                    onChange={({ target }) => setIsInGroup(target.checked)}
                  >
                    Đoàn viên
                  </Checkbox>
                </FormItem>
                <FormItem label="Ngày vào" name="groupJoinDay">
                  <DatePickerInForm disabled={!isInGroup} />
                </FormItem>
                <FormItem label="Nơi vào" name="groupJoinPlace">
                  <TextInput disabled={!isInGroup} />
                </FormItem>
              </div>
              <div className="info-col">
                <FormItem>
                  <Checkbox
                    checked={isInParty}
                    onChange={({ target }) => setIsInParty(target.checked)}
                  >
                    Đảng viên
                  </Checkbox>
                </FormItem>
                <FormItem label="Ngày vào" name="partyJoinDay">
                  <DatePickerInForm disabled={!isInParty} />
                </FormItem>
                <FormItem label="Nơi vào" name="partyJoinPlace">
                  <TextInput disabled={!isInParty} />
                </FormItem>
              </div>
            </div>
          </InfoRow>
        </Container>

        <Divider />

        <Container>
          <InfoRow className="family-info">
            <AvatarPlaceHolder />
            <div className="info-record">
              <Row arrange="space-between">
                <Subtitle>Thông tin gia đình</Subtitle>
                <Button
                  onClick={showContactForm}
                  type="primary"
                  size="large"
                  icon={<PlusOutlined />}
                >
                  Thêm
                </Button>
              </Row>
              <FamilyContactTable {...{ familyContacts, setFamilyContacts }} />
            </div>
          </InfoRow>
        </Container>

        {!data && (
          <FormButton.Container>
            <FormButton.CancelButton onClick={() => history.goBack()} />
            <FormButton.SaveButton />
          </FormButton.Container>
        )}
      </InfoWrapper>
    </Form>
  );
};
