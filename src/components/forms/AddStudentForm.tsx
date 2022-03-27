import React, { useState } from "react";
import { Form, Upload, Button, Checkbox } from "antd";
import TextInput from "@components/TextInput";
import { SelectInForm } from "@components/Select";
import { CameraOutlined } from "@ant-design/icons";
import { DatePickerInForm } from "@components/DatePicker";

const AddStudentForm = () => {
  const [autoGenerate, setAutoGenerate] = useState(false);
  const [id, setId] = useState("");
  const handleFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      name="add-student"
      className="add-student-form"
      onFinish={handleFinish}
    >
      <div className="title">Thông tin chung</div>
      <div className="form-row">
        <div className="form-col">
          <div className="avatar-upload">
            <div className="avatar"></div>
            <Upload>
              <Button icon={<CameraOutlined />} />
            </Upload>
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
            <Form.Item name="grade" label="Khối" className="grade-select">
              <SelectInForm
                data={["Khoi 6", "Khoi 7"]}
                keyAffix="grade-selector"
                placeholder="Khối"
              />
              <Form.Item name="class" className="class-selector">
                <SelectInForm
                  placeholder="Lớp"
                  data={["6A", "6B"]}
                  keyAffix="class-selector"
                />
              </Form.Item>
            </Form.Item>
            {/* Birhday datepicker */}
            <Form.Item label="Ngày sinh" name="birthday">
              <DatePickerInForm placeholder="dd/mm/yy" format="DD/MM/YYYY" />
            </Form.Item>
            {/* ID generator */}
            <Form.Item label="Mã học viên" name="id" className="id-input">
              <TextInput
                maxLength={20}
                disabled={autoGenerate}
                value={id}
                onChange={({ target }) => setId(target.value)}
              />
              <Checkbox
                onChange={({ target }) => {
                  setAutoGenerate(target.checked);
                  if (target.checked) setId("student-GA87");
                }}
              >
                Sinh mã tự động
              </Checkbox>
            </Form.Item>
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
    </Form>
  );
};

export default AddStudentForm;
