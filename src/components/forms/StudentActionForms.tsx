import React from "react";
import { Form, Button, Space } from "antd";
import { DatePickerInForm } from "@components/DatePicker";
import TextInput from "@components/TextInput";
import { SelectInForm } from "@components/Select";
import moment from "moment";
import { RULES } from "@constants/rules";
import UploadField from "@components/UploadField";

type FormProps = {
  onCancel: () => void;
};

type StudentActionFormsProps = {
  name: string;
  children: React.ReactNode;
  className?: string;
} & FormProps;

const StudentActionForms = ({
  name,
  children,
  onCancel,
  className = "",
}: StudentActionFormsProps) => {
  return (
    <Form
      name={`${name}-student-form`}
      className={`${name}-student-form student-form ${className}`}
    >
      <Form.Item name="name" label="Học viên" initialValue="Jonh Doe">
        John Doe
      </Form.Item>
      <Form.Item name="class" label="Lớp học" initialValue="6A">
        6A
      </Form.Item>
      {children}
      <Space className="btn-grp" size={40}>
        <Form.Item>
          <Button className="cancel-btn" onClick={onCancel}>
            Hủy
          </Button>
        </Form.Item>
        <Form.Item>
          <Button className="save-btn" type="primary" htmlType="submit">
            Lưu
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
};

const ClassTransfer = ({ onCancel }: FormProps) => {
  return (
    <StudentActionForms
      name="class-transfer"
      onCancel={onCancel}
      className="class-transfer"
    >
      {/* transfer day picker */}
      <Form.Item
        name="transferDay"
        label="Ngày chuyển lớp"
        rules={[RULES.required]}
      >
        <DatePickerInForm format="DD/MM/YYYY" defaultValue={moment()} />
      </Form.Item>
      {/* class selector */}
      <Form.Item
        name="transferToClass"
        label="Chuyển đến lớp"
        rules={[RULES.required]}
        className="transfer-day-selector"
      >
        <SelectInForm
          placeholder="Chọn lớp"
          data={["6A", "6B", "6C", "6D"]}
          keyAffix="class-selector"
        />
      </Form.Item>
      {/* Reason text area input */}
      <Form.Item name="reason" label="Lý do" rules={[RULES.required]}>
        <TextInput.TextArea />
      </Form.Item>
      {/* File upload */}
      <UploadField affixNote="Kiểu file .pdf.jpeg.png.jpg với dung lượng tối đa 100MB" />
    </StudentActionForms>
  );
};

StudentActionForms.ClassTransfer = ClassTransfer;

export default StudentActionForms;
