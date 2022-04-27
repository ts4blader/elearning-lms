import React, { useState, useMemo } from "react";
import { Form, Checkbox } from "antd";
import TextInput from "@components/TextInput";
import { SelectInForm } from "@components/Select";
import { DatePickerInForm } from "@components/DatePicker";
import { RULES } from "@utils/rules";
import { useHistory, useParams } from "react-router-dom";
import InfoWrapper from "@components/InfoWrapper";
import studentData from "@seeds/thcs/students.json";
import moment from "moment";
import { FormButton, FormItem } from "@components/Forms";

export const StudentForm = () => {
  const history = useHistory();
  const params: any = useParams();

  const data = useMemo(() => {
    let result = studentData.filter((item) => item.id === params.id)[0];
    return result;
  }, [params]);

  const handleFinish = (values: any) => {
    console.log(values);
  };

  const [id, setId] = useState(data?.id);
  const [autoGenerate, setAutoGenerate] = useState(false);
  const [avatar, setAvatar] = useState(undefined);

  const {
    Title,
    Divider,
    Subtitle,
    Container,
    AvatarSection,
    AvatarPlaceHolder,
  } = InfoWrapper;

  return (
    <Form
      name="add-student"
      className="add-student-form"
      onFinish={handleFinish}
    >
      <InfoWrapper>
        {/* Basic info title */}
        <Title>Thông tin chung</Title>
        {/* Basic info */}
        <Container>
          <div className="form-row basic info">
            <div className="form-col">
              <AvatarSection uploadAble={true} />
            </div>
            <div className="form-col">
              <Subtitle>Thông tin học viên</Subtitle>
              <div className="form-items">
                {/* Full name  */}
                <FormItem
                  name="fullName"
                  label="Họ và tên"
                  initialValue={data?.name}
                >
                  <TextInput maxLength={50} />
                </FormItem>
                {/* Semester selector */}
                <FormItem
                  name="semester"
                  label="Niên khóa"
                  initialValue={"2021-2022"}
                >
                  <SelectInForm
                    data={["2021-2022", "2021-2023", "2022-2023"]}
                    keyAffix="semester-selector"
                  />
                </FormItem>
                {/* Gender selector */}
                <FormItem
                  name="gender"
                  label="Giới tính"
                  initialValue={data?.gender}
                >
                  <SelectInForm
                    data={["Male", "Female"]}
                    keyAffix="gender-select"
                  />
                </FormItem>
                {/* Grade and class selector */}
                <div className="pseudo-form-item">
                  <FormItem
                    initialValue={"Khoi 6"}
                    name="grade"
                    label="Khối"
                    className="grade-select"
                  >
                    <SelectInForm
                      data={["Khoi 6", "Khoi 7"]}
                      keyAffix="grade-selector"
                      placeholder="Khối"
                    />
                  </FormItem>
                  <FormItem
                    initialValue={data?.class}
                    name="class"
                    className="class-selector"
                  >
                    <SelectInForm
                      placeholder="Lớp"
                      data={["6A", "6B"]}
                      keyAffix="class-selector"
                    />
                  </FormItem>
                </div>
                {/* Birhday datepicker */}
                <FormItem
                  label="Ngày sinh"
                  name="birthday"
                  initialValue={moment(data?.birthday)}
                >
                  <DatePickerInForm placeholder="dd/mm/yy" />
                </FormItem>
                {/* ID generator */}
                <div className="id-form-item">
                  <FormItem label="Mã học viên">
                    <TextInput
                      maxLength={20}
                      disabled={autoGenerate}
                      value={id}
                      onChange={({ target }) => {
                        setId(target.value);
                      }}
                    />
                  </FormItem>
                  <Checkbox
                    onChange={({ target }) => {
                      setAutoGenerate(target.checked);
                      if (target.checked) setId("student-GA87");
                    }}
                  >
                    Sinh mã tự động
                  </Checkbox>
                </div>
                {/* Born place */}
                <FormItem label="Nơi sinh" name="bornPlace" initialValue="BL">
                  <TextInput />
                </FormItem>
                {/* Admission date */}
                <FormItem label="Ngày nhập học" name="admission">
                  <DatePickerInForm placeholder="dd/mm/yy" />
                </FormItem>
                {/* Ethic input */}
                <FormItem
                  label="Dân tộc"
                  name="ethic"
                  initialValue={data?.ethic}
                >
                  <TextInput />
                </FormItem>
                {/* Admission type selector */}
                <FormItem label="Hình thức" name="admissionType">
                  <SelectInForm
                    data={["Trung tuyen", "Xet hoc ba"]}
                    keyAffix="admission-type-selector"
                  />
                </FormItem>
                {/* Religion input */}
                <FormItem label="Tôn giáo" name="religion">
                  <TextInput />
                </FormItem>
                {/* Status selector */}
                <FormItem
                  initialValue={data?.status}
                  label="Trạng thái"
                  name="status"
                >
                  <SelectInForm
                    data={["Learning", "Ejected", "Shool transfered"]}
                    keyAffix="status-selector"
                  />
                </FormItem>
              </div>
            </div>
          </div>
        </Container>
        {/* Divider */}
        <Divider />
        {/* Contact info */}
        <Container>
          <div className="form-row contact-info">
            <div className="form-col">
              <AvatarPlaceHolder />
            </div>
            <div className="form-col">
              <Subtitle>Địa chỉ liên hệ</Subtitle>
              <div className="form-items">
                {/* city input  */}
                <FormItem name="city" label="Tỉnh/Thành phố">
                  <TextInput />
                </FormItem>
                {/* address input  */}
                <FormItem name="address" label="Địa chỉ">
                  <TextInput />
                </FormItem>
                {/* district input  */}
                <FormItem name="district" label="Quận/Huyện">
                  <TextInput />
                </FormItem>
                {/* email input  */}
                <FormItem name="email" label="Email">
                  <TextInput type="email" />
                </FormItem>
                {/* subdistrict  input  */}
                <FormItem name="subdistrict" label="Xã/Phường">
                  <TextInput />
                </FormItem>
                {/* phone number  input  */}
                <FormItem name="phoneNumber" label="Số điện thoại">
                  <TextInput />
                </FormItem>
              </div>
            </div>
          </div>
        </Container>
        {/* Family info title */}
        <Title>Thông tin gia đình</Title>
        {/* Family info */}
        <Container>
          <div className="form-row family-info">
            <div className="form-col">
              <div className="form-items">
                {/* Father section */}
                {/* fatherName input  */}
                <FormItem name="fatherName" label="Họ tên cha">
                  <TextInput />
                </FormItem>
                {/* fatherBirthYear input  */}
                <FormItem
                  name="fatherBirthYear"
                  className="year-form-item"
                  label="Năm sinh"
                >
                  <TextInput />
                </FormItem>
                {/* fatherJob input  */}
                <FormItem name="fatherJob" label="Nghề nghiệp">
                  <TextInput />
                </FormItem>
                {/* Mother section */}
                {/* motherName input  */}
                <FormItem name="motherName" label="Họ tên mẹ">
                  <TextInput />
                </FormItem>
                {/* motherBirthYear input  */}
                <FormItem
                  className="year-form-item"
                  name="motherBirthYear"
                  label="Năm sinh"
                >
                  <TextInput />
                </FormItem>
                {/* motherJob input  */}
                <FormItem name="motherJob" label="Nghề nghiệp">
                  <TextInput />
                </FormItem>
                {/* Mother section */}
                {/* supervisorName input  */}
                <FormItem name="supervisorName" label="Họ tên giám hộ">
                  <TextInput />
                </FormItem>
                {/* supervisorBirthYear input  */}
                <FormItem
                  className="year-form-item"
                  name="supervisorBirthYear"
                  label="Năm sinh"
                >
                  <TextInput />
                </FormItem>
                {/* supervisorJob input  */}
                <FormItem name="supervisorJob" label="Nghề nghiệp">
                  <TextInput />
                </FormItem>
              </div>
            </div>
          </div>
        </Container>
        {/* Family contact info */}
        <Container>
          <div className="form-row family-contact">
            <div className="form-col">
              <Subtitle>Liên lạc gia đình</Subtitle>
              <div className="form-items">
                {/* fatherNumber input  */}
                <FormItem
                  name="fatherNumber"
                  label="Điện thoại cha"
                  rules={[RULES.number]}
                >
                  <TextInput />
                </FormItem>
                {/* motherNumber input  */}
                <FormItem
                  name="motherNumber"
                  label="Điện thoại mẹ"
                  rules={[RULES.phoneNumber]}
                >
                  <TextInput />
                </FormItem>
                {/* supervisorNumber input  */}
                <FormItem
                  name="supervisorNumber"
                  label="Điện thoại GH"
                  rules={[RULES.phoneNumber]}
                >
                  <TextInput />
                </FormItem>
              </div>
            </div>
          </div>
        </Container>
        {/* Btn group */}
        {!data && (
          <FormButton.Container>
            <FormButton.CancelButton onClick={() => history.goBack()} />
            <FormButton.SaveButton onClick={() => history.goBack()} />
          </FormButton.Container>
        )}
      </InfoWrapper>
    </Form>
  );
};
