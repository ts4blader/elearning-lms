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
import Select, { SelectInForm } from "@components/Select";
import { DatePickerInForm } from "@components/DatePicker";
import Tag from "@components/Tag";
import { useAppDispatch, useAppSelector } from "@hooks";
import { showFormModal } from "@slices/formModalSlice";
import { useHistory } from "react-router-dom";
import { FamilyContactTable } from "@components/Table";
import { LectureProps, FamilyContactProps } from "@types";
import { LECTURE_STATUS } from "@utils/status";
import moment from "moment";

type LectureFormProps = {
  defaultData?: LectureProps;
};

const InfoRow = ({ className = "", children, ...rest }: RowProps) => {
  return (
    <Row className={`info-row ${className}`} align="flex-start" {...rest}>
      {children}
    </Row>
  );
};

export const LectureForm = ({ defaultData }: LectureFormProps) => {
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
  /* ---------- form instance --------- */
  const [form] = Form.useForm();
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
  /* --------- redux selector --------- */
  const subjectGroup = useAppSelector((state) => state.subjectGroup);
  const subject = useAppSelector((state) => state.subject);
  /* -------- get derived data -------- */
  const data = useMemo(() => {
    let getDay = (inParty: any) => {
      if (inParty)
        return {
          ...inParty,
          joinDay: moment(inParty.joinDay),
        };
      else return undefined;
    };

    if (defaultData)
      return {
        ...defaultData,
        birthday: moment(defaultData?.birthday),
        joinDay: moment(defaultData?.joinDay),
        cid: {
          ...defaultData.cid,
          verifyDay: moment(defaultData.cid.verifyDay),
        },
        inParty: getDay(defaultData.inParty),
        inGroup: getDay(defaultData.inGroup),
      };
    else return undefined;
  }, [defaultData]);
  /* ---------- form handler ---------- */
  const handleFinish = (values: any) => {
    console.log(values);
  };
  /* ---------- state declare --------- */
  const [id, setId] = useState(defaultData?.id);
  const [autoGenerate, setAutoGenerate] = useState(false);
  const [subjects, setSubjects] = useState<string[] | undefined>(
    data?.subjectSubId
  );
  const [familyContacts, setFamilyContacts] = useState<FamilyContactProps[]>(
    data?.relate!
  );

  const [isInGroup, setIsInGroup] = useState(!!data?.inGroup);
  const [isInParty, setIsInParty] = useState(!!data?.inParty);

  return (
    <Form
      onFinish={handleFinish}
      form={form}
      initialValues={data}
      className="lecture-form"
      name="lecture-form"
    >
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
                    disabled={defaultData !== undefined}
                    className="auto-generate-checkbox"
                    checked={autoGenerate}
                    onChange={({ target }) => setAutoGenerate(target.checked)}
                  >
                    Sinh mã tự động
                  </Checkbox>
                </FormItem>
                <FormItem label="Tổ bộ môn" name="subjectGroupId">
                  <SelectInForm>
                    {subjectGroup.value.map((el) => (
                      <Select.Option value={el.id} key={el.id}>
                        {el.name}
                      </Select.Option>
                    ))}
                  </SelectInForm>
                </FormItem>
                <FormItem label="Môn giảng dạy" name="subjectMainId">
                  <SelectInForm>
                    {subject.value.map((el) => (
                      <Select.Option value={el.id} key={el.id}>
                        {el.name}
                      </Select.Option>
                    ))}
                  </SelectInForm>
                </FormItem>
                <FormItem label="Họ và tên" name="name">
                  <TextInput />
                </FormItem>
                <FormItem label="Ngày sinh" name="birthday">
                  <DatePickerInForm />
                </FormItem>
                <FormItem label="Giới tính" name="gender">
                  <SelectInForm
                    data={["Nam", "Nữ"]}
                    keyAffix="gender-selector"
                  />
                </FormItem>
                <FormItem label="Dân tộc" name="ethic">
                  <TextInput />
                </FormItem>
                <FormItem label="Ngày vào trường" name="joinDay">
                  <DatePickerInForm />
                </FormItem>
              </div>
              <div className="info-col">
                <FormItem label="Quốc tịch" name="nationality">
                  <TextInput />
                </FormItem>
                <FormItem label="Tôn giáo" name="religion">
                  <TextInput />
                </FormItem>
                <FormItem label="Trạng thái" name="status">
                  <SelectInForm>
                    {LECTURE_STATUS.map((el) => (
                      <Select.Option value={el.prioty} key={el.text}>
                        {el.text}
                      </Select.Option>
                    ))}
                  </SelectInForm>
                </FormItem>
                <FormItem label="Môn kiêm nhiệm">
                  <Row gap="0.5em" className="subject-list">
                    {subjects?.map((item) => (
                      <Tag.Closeable
                        key={item}
                        onClose={() =>
                          setSubjects(subjects?.filter((el) => el !== item))
                        }
                      >
                        {item}
                      </Tag.Closeable>
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
                <FormItem label="Tỉnh/Thành" name={["contact", "city"]}>
                  <SelectInForm
                    data={["TP.HCM", "Hà Lội"]}
                    keyAffix="province-selector"
                  />
                </FormItem>
                <FormItem label="Quận/Huyện" name={["contact", "district"]}>
                  <SelectInForm
                    data={["1", "2", "TB"]}
                    keyAffix="district-selector"
                  />
                </FormItem>
                <FormItem label="Xã/Phường" name={["contact", "subdistrict"]}>
                  <SelectInForm
                    data={["1", "2"]}
                    keyAffix="subdistrict-selector"
                  />
                </FormItem>
                <FormItem label="Địa chỉ" name={["contact", "address"]}>
                  <TextInput />
                </FormItem>
                <FormItem label="Email" name={["contact", "email"]}>
                  <TextInput />
                </FormItem>
                <FormItem label="SĐT" name={["contact", "phoneNumber"]}>
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
                <FormItem label="CMND/CCCD" name={["cid", "value"]}>
                  <TextInput />
                </FormItem>
                <FormItem label="Ngày cấp" name={["cid", "verifyDay"]}>
                  <DatePickerInForm />
                </FormItem>
                <FormItem label="Nơi cấp" name={["cid", "verifyPlace"]}>
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
                <FormItem label="Ngày vào" name={["inGroup", "joinDay"]}>
                  <DatePickerInForm disabled={!isInGroup} />
                </FormItem>
                <FormItem label="Nơi vào" name={["inGroup", "joinPlace"]}>
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
                <FormItem label="Ngày vào" name={["inParty", "joinDay"]}>
                  <DatePickerInForm disabled={!isInParty} />
                </FormItem>
                <FormItem label="Nơi vào" name={["inParty", "joinPlace"]}>
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

        {!defaultData && (
          <FormButton.Container>
            <FormButton.CancelButton onClick={() => history.goBack()} />
            <FormButton.SaveButton />
          </FormButton.Container>
        )}
      </InfoWrapper>
    </Form>
  );
};
