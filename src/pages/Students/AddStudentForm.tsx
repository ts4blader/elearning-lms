import React, { useState } from "react";
import { Form, Upload, Button, Checkbox, Space } from "antd";
import TextInput from "@components/TextInput";
import { SelectInForm } from "@components/Select";
import { CameraOutlined } from "@ant-design/icons";
import { DatePickerInForm } from "@components/DatePicker";
import { RULES } from "@constants/rules";
import { useHistory } from "react-router-dom";

const AddStudentForm = () => {
  const [autoGenerate, setAutoGenerate] = useState(false);
  const [avatar, setAvatar] = useState(undefined);
  const [id, setId] = useState("");
  const history = useHistory();

  const handleFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      name="add-student"
      className="add-student-form"
      onFinish={handleFinish}
    >
      {/* Basic info title */}
      <div className="title">Thông tin chung</div>
      {/* Basic info */}
      <div className="form-row basic info">
        <div className="form-col">
          <div className="avatar-upload">
            <div className="avatar">
              <img src={avatar} alt="avatar" />
              <Upload name="avatar" className="upload-btn">
                <Button icon={<CameraOutlined />} />
              </Upload>
            </div>
          </div>
        </div>
        <div className="form-col">
          <div className="subtitle">Thông tin học viên</div>
          <div className="form-items">
            {/* Full name  */}
            <Form.Item name="fullName" label="Họ và tên">
              <TextInput maxLength={50} />
            </Form.Item>
            {/* Semester selector */}
            <Form.Item name="semester" label="Niên khóa">
              <SelectInForm
                data={["2021-2022", "2021-2023", "2022-2023"]}
                keyAffix="semester-selector"
              />
            </Form.Item>
            {/* Gender selector */}
            <Form.Item name="gender" label="Giới tính">
              <SelectInForm
                data={["Male", "Female"]}
                keyAffix="gender-select"
              />
            </Form.Item>
            {/* Grade and class selector */}
            <div className="pseudo-form-item">
              <Form.Item name="grade" label="Khối" className="grade-select">
                <SelectInForm
                  data={["Khoi 6", "Khoi 7"]}
                  keyAffix="grade-selector"
                  placeholder="Khối"
                />
              </Form.Item>
              <Form.Item name="class" className="class-selector">
                <SelectInForm
                  placeholder="Lớp"
                  data={["6A", "6B"]}
                  keyAffix="class-selector"
                />
              </Form.Item>
            </div>
            {/* Birhday datepicker */}
            <Form.Item label="Ngày sinh" name="birthday">
              <DatePickerInForm placeholder="dd/mm/yy" format="DD/MM/YYYY" />
            </Form.Item>
            {/* ID generator */}
            <div className="id-form-item">
              <Form.Item label="Mã học viên">
                <TextInput
                  maxLength={20}
                  disabled={autoGenerate}
                  value={id}
                  onChange={({ target }) => {
                    setId(target.value);
                  }}
                />
              </Form.Item>
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
            <Form.Item label="Nơi sinh" name="bornPlace">
              <TextInput />
            </Form.Item>
            {/* Admission date */}
            <Form.Item label="Ngày nhập học" name="admission">
              <DatePickerInForm placeholder="dd/mm/yy" format="DD/MM/YYYY" />
            </Form.Item>
            {/* Ethic input */}
            <Form.Item label="Dân tộc" name="ethic">
              <TextInput />
            </Form.Item>
            {/* Admission type selector */}
            <Form.Item label="Hình thức" name="admissionType">
              <SelectInForm
                data={["Trung tuyen", "Xet hoc ba"]}
                keyAffix="admission-type-selector"
              />
            </Form.Item>
            {/* Religion input */}
            <Form.Item label="Tôn giáo" name="religion">
              <TextInput />
            </Form.Item>
            {/* Status selector */}
            <Form.Item label="Trạng thái" name="status">
              <SelectInForm
                data={["Learning", "Ejected", "Shool transfered"]}
                keyAffix="status-selector"
              />
            </Form.Item>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="divider"></div>
      {/* Contact info */}
      <div className="form-row contact-info">
        <div className="form-col">
          <div className="avatar-upload"></div>
        </div>
        <div className="form-col">
          <div className="subtitle">Địa chỉ liên hệ</div>
          <div className="form-items">
            {/* city input  */}
            <Form.Item name="city" label="Tỉnh/Thành phố">
              <TextInput />
            </Form.Item>
            {/* address input  */}
            <Form.Item name="address" label="Địa chỉ">
              <TextInput />
            </Form.Item>
            {/* district input  */}
            <Form.Item name="district" label="Quận/Huyện">
              <TextInput />
            </Form.Item>
            {/* email input  */}
            <Form.Item name="email" label="Email">
              <TextInput type="email" />
            </Form.Item>
            {/* subdistrict  input  */}
            <Form.Item name="subdistrict" label="Xã/Phường">
              <TextInput />
            </Form.Item>
            {/* phone number  input  */}
            <Form.Item name="phoneNumber" label="Số điện thoại">
              <TextInput />
            </Form.Item>
          </div>
        </div>
      </div>
      {/* Family info title */}
      <div className="title">Thông tin gia đình</div>
      {/* Family info */}
      <div className="form-row family-info">
        <div className="form-col">
          <div className="form-items">
            {/* Father section */}
            {/* fatherName input  */}
            <Form.Item name="fatherName" label="Họ tên cha">
              <TextInput />
            </Form.Item>
            {/* fatherBirthYear input  */}
            <Form.Item
              name="fatherBirthYear"
              className="year-form-item"
              label="Năm sinh"
            >
              <TextInput />
            </Form.Item>
            {/* fatherJob input  */}
            <Form.Item name="fatherJob" label="Nghề nghiệp">
              <TextInput />
            </Form.Item>
            {/* Mother section */}
            {/* motherName input  */}
            <Form.Item name="motherName" label="Họ tên mẹ">
              <TextInput />
            </Form.Item>
            {/* motherBirthYear input  */}
            <Form.Item
              className="year-form-item"
              name="motherBirthYear"
              label="Năm sinh"
            >
              <TextInput />
            </Form.Item>
            {/* motherJob input  */}
            <Form.Item name="motherJob" label="Nghề nghiệp">
              <TextInput />
            </Form.Item>
            {/* Mother section */}
            {/* supervisorName input  */}
            <Form.Item name="supervisorName" label="Họ tên giám hộ">
              <TextInput />
            </Form.Item>
            {/* supervisorBirthYear input  */}
            <Form.Item
              className="year-form-item"
              name="supervisorBirthYear"
              label="Năm sinh"
            >
              <TextInput />
            </Form.Item>
            {/* supervisorJob input  */}
            <Form.Item name="supervisorJob" label="Nghề nghiệp">
              <TextInput />
            </Form.Item>
          </div>
        </div>
      </div>
      {/* Family contact info */}
      <div className="form-row family-contact">
        <div className="form-col">
          <div className="subtitle">Liên lạc gia đình</div>
          <div className="form-items">
            {/* fatherNumber input  */}
            <Form.Item
              name="fatherNumber"
              label="Điện thoại cha"
              rules={[RULES.number]}
            >
              <TextInput />
            </Form.Item>
            {/* motherNumber input  */}
            <Form.Item
              name="motherNumber"
              label="Điện thoại mẹ"
              rules={[RULES.phoneNumber]}
            >
              <TextInput />
            </Form.Item>
            {/* supervisorNumber input  */}
            <Form.Item
              name="supervisorNumber"
              label="Điện thoại GH"
              rules={[RULES.phoneNumber]}
            >
              <TextInput />
            </Form.Item>
          </div>
        </div>
      </div>
      {/* Btn group */}
      <Space className="btn-grp" size={40}>
        <Button
          className="cancel-btn"
          onClick={() => history.push("/dashboard/student")}
        >
          Hủy
        </Button>
        <Form.Item>
          <Button className="save-btn" type="primary" htmlType="submit">
            Lưu
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default AddStudentForm;
