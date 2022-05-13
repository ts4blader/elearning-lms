import React, { useState, useMemo } from "react";
import { Form, Checkbox } from "antd";
import TextInput from "@components/TextInput";
import Select, { SelectInForm } from "@components/Select";
import { DatePickerInForm } from "@components/DatePicker";
import { RULES } from "@utils/rules";
import { STUDENT_STATUS } from "@utils/status";
import { useHistory } from "react-router-dom";
import InfoWrapper from "@components/InfoWrapper";
import { FormButton, FormItem } from "@components/Forms";
import { useAppDispatch, useAppSelector } from "@hooks";
import { generateId } from "@utils/methods";
import moment from "moment";
import { addStudent } from "@slices/studentSlice";
import { setStudentEdit } from "@slices/studentEditSlice";
import { StudentProps } from "@types";

type StudentFormProps = {
  defaultData?: StudentProps;
};

export const StudentForm = ({ defaultData }: StudentFormProps) => {
  // form instance
  const [form] = Form.useForm();
  // route
  const history = useHistory();
  // redux hook
  const dispatch = useAppDispatch();
  const schoolYear = useAppSelector((state) => state.schoolYear);
  const grade = useAppSelector((state) => state.grade);
  const classData = useAppSelector((state) => state.class);
  // get data from url
  const data = useMemo(() => {
    if (defaultData)
      return {
        ...defaultData,
        birthday: moment(defaultData?.birthday),
        joinDay: moment(defaultData?.joinDay),
      };
    return undefined;
  }, [defaultData]);
  //* submit handle
  const handleFinish = (values: any) => {
    if (data) {
      dispatch(
        setStudentEdit({
          ...values,
          id: data.id,
        })
      );
    } else {
      dispatch(
        addStudent({
          id,
          ...values,
        })
      );
    }
    history.goBack();
    form.resetFields();
  };
  //* state define
  const [id, setId] = useState(data?.id);
  const [autoGenerate, setAutoGenerate] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState("");
  // get class by grade
  const classByGrade = useMemo(() => {
    let result = classData.value.filter(
      (item) => item.gradeId === selectedGrade
    );
    // set classId to the first item
    form.setFieldsValue({
      classId: result[0]?.id,
    });

    return result;
  }, [classData, selectedGrade, form]);

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
      form={form}
      initialValues={data}
      requiredMark={false}
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
              <AvatarSection uploadAble={true} initialImg={data?.avatar} />
            </div>
            <div className="form-col">
              <Subtitle>Thông tin học viên</Subtitle>
              <div className="form-items">
                {/* Full name  */}
                <FormItem
                  name="name"
                  label="Họ và tên"
                  rules={[RULES.required]}
                >
                  <TextInput maxLength={50} />
                </FormItem>
                {/* Semester selector */}
                <FormItem
                  name="schoolYearId"
                  label="Niên khóa"
                  rules={[RULES.required]}
                >
                  <SelectInForm placeholder="Chọn niên khóa">
                    {schoolYear.value.map((el) => (
                      <Select.Option value={el.id} key={el.id}>
                        {`${el.beginYear}-${el.endYear}`}
                      </Select.Option>
                    ))}
                  </SelectInForm>
                </FormItem>
                {/* Gender selector */}
                <FormItem
                  name="gender"
                  label="Giới tính"
                  rules={[RULES.required]}
                >
                  <SelectInForm data={["Nam", "Nữ"]} keyAffix="gender-select" />
                </FormItem>
                {/* Grade and class selector */}
                <div className="pseudo-form-item">
                  <FormItem
                    name="gradeId"
                    label="Khối"
                    className="grade-select"
                    rules={[RULES.required]}
                  >
                    <SelectInForm
                      placeholder="Khối"
                      onChange={(value) => setSelectedGrade(value)}
                    >
                      {grade.value.map((el) => (
                        <Select.Option value={el.id}>{el.name}</Select.Option>
                      ))}
                    </SelectInForm>
                  </FormItem>
                  <FormItem
                    name="classId"
                    rules={[RULES.required]}
                    className="class-selector"
                  >
                    <SelectInForm placeholder="Lớp">
                      {classByGrade.map((el) => (
                        <Select.Option value={el.id} key={el.id}>
                          {el.name}
                        </Select.Option>
                      ))}
                    </SelectInForm>
                  </FormItem>
                </div>
                {/* Birhday datepicker */}
                <FormItem
                  label="Ngày sinh"
                  name="birthday"
                  rules={[RULES.required]}
                >
                  <DatePickerInForm placeholder="dd/mm/yy" />
                </FormItem>
                {/* ID generator */}
                <div className="id-form-item">
                  <FormItem label="Mã học viên" initialValue={id}>
                    <TextInput
                      maxLength={20}
                      disabled={autoGenerate || data?.id !== undefined}
                      value={id}
                      onChange={({ target }) => setId(target.value)}
                    />
                  </FormItem>
                  <Checkbox
                    disabled={data?.id !== undefined}
                    onChange={({ target }) => {
                      setAutoGenerate(target.checked);
                      if (target.checked) setId(generateId("hv"));
                    }}
                  >
                    Sinh mã tự động
                  </Checkbox>
                </div>
                {/* Born place */}
                <FormItem label="Nơi sinh" name="birthPlace">
                  <TextInput />
                </FormItem>
                {/* Admission date */}
                <FormItem
                  label="Ngày nhập học"
                  name="joinDay"
                  rules={[RULES.required]}
                >
                  <DatePickerInForm placeholder="dd/mm/yy" />
                </FormItem>
                {/* Ethic input */}
                <FormItem label="Dân tộc" name="ethic" rules={[RULES.required]}>
                  <TextInput />
                </FormItem>
                {/* Admission type selector */}
                <FormItem
                  label="Hình thức"
                  name="joinForm"
                  rules={[RULES.required]}
                >
                  <SelectInForm
                    data={["Trúng tuyển", "Xét học bạ"]}
                    keyAffix="admission-type-selector"
                  />
                </FormItem>
                {/* Religion input */}
                <FormItem label="Tôn giáo" name="religion">
                  <TextInput />
                </FormItem>
                {/* Status selector */}
                <FormItem
                  label="Trạng thái"
                  name="status"
                  rules={[RULES.required]}
                >
                  <SelectInForm>
                    {STUDENT_STATUS.map((el) => (
                      <Select.Option value={el.prioty}>{el.text}</Select.Option>
                    ))}
                  </SelectInForm>
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
                <FormItem
                  name={["contact", "city"]}
                  label="Tỉnh/Thành phố"
                  rules={[RULES.required]}
                >
                  <TextInput />
                </FormItem>
                {/* address input  */}
                <FormItem name={["contact", "address"]} label="Địa chỉ">
                  <TextInput />
                </FormItem>
                {/* district input  */}
                <FormItem name={["contact", "district"]} label="Quận/Huyện">
                  <TextInput />
                </FormItem>
                {/* email input  */}
                <FormItem
                  name={["contact", "email"]}
                  label="Email"
                  rules={[RULES.required, RULES.email]}
                >
                  <TextInput />
                </FormItem>
                {/* subdistrict  input  */}
                <FormItem name={["contact", "subdistrict"]} label="Xã/Phường">
                  <TextInput />
                </FormItem>
                {/* phone number  input  */}
                <FormItem
                  name={["contact", "phoneNumber"]}
                  rules={[RULES.required]}
                  label="Số điện thoại"
                >
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
                <FormItem
                  name={["family", "father", "name"]}
                  label="Họ tên cha"
                >
                  <TextInput />
                </FormItem>
                {/* fatherBirthYear input  */}
                <FormItem
                  name={["family", "father", "birthYear"]}
                  className="year-form-item"
                  label="Năm sinh"
                  rules={[RULES.number]}
                >
                  <TextInput />
                </FormItem>
                {/* fatherJob input  */}
                <FormItem
                  name={["family", "father", "job"]}
                  label="Nghề nghiệp"
                >
                  <TextInput />
                </FormItem>
                {/* Mother section */}
                {/* motherName input  */}
                <FormItem name={["family", "mother", "name"]} label="Họ tên mẹ">
                  <TextInput />
                </FormItem>
                {/* motherBirthYear input  */}
                <FormItem
                  className="year-form-item"
                  name={["family", "mother", "birthYear"]}
                  label="Năm sinh"
                  rules={[RULES.number]}
                >
                  <TextInput />
                </FormItem>
                {/* motherJob input  */}
                <FormItem
                  name={["family", "mother", "job"]}
                  label="Nghề nghiệp"
                >
                  <TextInput />
                </FormItem>
                {/* Mother section */}
                {/* supervisorName input  */}
                <FormItem
                  name={["family", "supervisor", "name"]}
                  label="Họ tên giám hộ"
                >
                  <TextInput />
                </FormItem>
                {/* supervisorBirthYear input  */}
                <FormItem
                  className="year-form-item"
                  name={["family", "supervisor", "birthYear"]}
                  label="Năm sinh"
                  rules={[RULES.number]}
                >
                  <TextInput />
                </FormItem>
                {/* supervisorJob input  */}
                <FormItem
                  name={["family", "supervisor", "job"]}
                  label="Nghề nghiệp"
                >
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
                  name={["family", "father", "phoneNumber"]}
                  label="Điện thoại cha"
                  rules={[RULES.phoneNumber]}
                >
                  <TextInput />
                </FormItem>
                {/* motherNumber input  */}
                <FormItem
                  name={["family", "mother", "phoneNumber"]}
                  label="Điện thoại mẹ"
                  rules={[RULES.phoneNumber]}
                >
                  <TextInput />
                </FormItem>
                {/* supervisorNumber input  */}
                <FormItem
                  name={["family", "supervisor", "phoneNumber"]}
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
        {!data?.id && (
          <FormButton.Container>
            <FormButton.CancelButton onClick={() => history.goBack()} />
            <FormButton.SaveButton />
          </FormButton.Container>
        )}
      </InfoWrapper>
    </Form>
  );
};
