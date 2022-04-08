import React from "react";
import { Form, Button, Space } from "antd";
import { DatePickerInForm } from "@components/DatePicker";
import TextInput from "@components/TextInput";
import { SelectInForm } from "@components/Select";
import moment from "moment";
import { RULES } from "@utils/rules";
import UploadField from "@components/UploadField";

type FormProps = {
  onCancel: () => void;
};

type StudentActionFormsProps = {
  name: string;
  children: React.ReactNode;
  className?: string;
} & FormProps;

export const StudentActionForms = ({
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

//* Class transfer
const ClassTransfer = ({ onCancel }: FormProps) => {
  return (
    <StudentActionForms
      name="class-transfer"
      onCancel={onCancel}
      className="class-transfer"
    >
      {/* transfer day picker */}
      <div className="day-picker-field">
        <Form.Item
          name="transferDay"
          label="Ngày chuyển lớp"
          rules={[RULES.required]}
        >
          <DatePickerInForm format="DD/MM/YYYY" defaultValue={moment()} />
        </Form.Item>
        <TextInput disabled value="HK 1" />
      </div>
      {/* class selector */}
      <Form.Item
        name="transferToClass"
        label="Chuyển đến lớp"
        rules={[RULES.required]}
        className="transfer-to-selector"
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
//* School transfer
const SchoolTransfer = ({ onCancel }: FormProps) => {
  return (
    <StudentActionForms
      name="school-transfer"
      onCancel={onCancel}
      className="school-transfer"
    >
      {/* transfer day picker */}
      <div className="day-picker-field">
        <Form.Item
          name="transferDay"
          label="Ngày chuyển trường"
          rules={[RULES.required]}
        >
          <DatePickerInForm format="DD/MM/YYYY" defaultValue={moment()} />
        </Form.Item>
        <TextInput disabled value="HK 1" />
      </div>
      {/* school input */}
      <Form.Item
        name="transferToSchool"
        label="Chuyển đến trường"
        rules={[RULES.required]}
        className="transfer-to-input"
      >
        <TextInput />
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
//* Reserve
const Reserve = ({ onCancel }: FormProps) => {
  return (
    <StudentActionForms name="reserve" onCancel={onCancel} className="reserve">
      {/* transfer day picker */}
      <div className="day-picker-field">
        <Form.Item
          name="reserveDay"
          label="Ngày bảo lưu"
          rules={[RULES.required]}
        >
          <DatePickerInForm format="DD/MM/YYYY" defaultValue={moment()} />
        </Form.Item>
        <TextInput disabled value="HK 1" />
      </div>
      {/* reserve duration input */}
      <Form.Item
        name="reserveDuration"
        label="Thời hạn bảo lưu"
        rules={[RULES.required]}
        className="reserve-duration-input"
      >
        <TextInput />
      </Form.Item>
      {/* Reason text area input */}
      <div className="reason-field">
        <Form.Item name="reason" label="Lý do" rules={[RULES.required]}>
          <TextInput.TextArea />
        </Form.Item>
      </div>
      {/* File upload */}
      <UploadField affixNote="Kiểu file .pdf.jpeg.png.jpg với dung lượng tối đa 100MB" />
    </StudentActionForms>
  );
};
//* Discount
const Discount = ({ onCancel }: FormProps) => {
  return (
    <StudentActionForms
      name="discount"
      onCancel={onCancel}
      className="discount"
    >
      {/* discount type selector */}
      <Form.Item
        label="Đối tượng miễn giảm"
        name="discountType"
        rules={[RULES.required]}
      >
        <SelectInForm
          data={["Con thuong binh", "Dan toc thieu so"]}
          keyAffix="discount-type"
        />
      </Form.Item>
      {/* discount detail input */}
      <Form.Item
        name="discountDetail"
        label="Hình thức miễn giảm"
        rules={[RULES.required]}
        className="discount-detail-input"
      >
        <TextInput />
      </Form.Item>
    </StudentActionForms>
  );
};
//* Prized
const Prized = ({ onCancel }: FormProps) => {
  return (
    <StudentActionForms name="prized" onCancel={onCancel} className="prized">
      {/* day picker field */}
      <div className="day-picker-field">
        <Form.Item
          name="prizedDay"
          label="Ngày khen thưởng"
          rules={[RULES.required]}
        >
          <DatePickerInForm format="DD/MM/YYYY" defaultValue={moment()} />
        </Form.Item>
        <TextInput disabled value="HK 1" />
      </div>
      {/* content textarea input */}
      <Form.Item name="prizedContent" label="Nội dung" rules={[RULES.required]}>
        <TextInput.TextArea />
      </Form.Item>
      {/* File upload */}
      <UploadField affixNote="Kiểu file .pdf.jpeg.png.jpg với dung lượng tối đa 100MB" />
    </StudentActionForms>
  );
};
//* Disciplined
const Disciplined = ({ onCancel }: FormProps) => {
  return (
    <StudentActionForms
      name="disciplined"
      onCancel={onCancel}
      className="disciplined"
    >
      {/* day picker field */}
      <div className="day-picker-field">
        <Form.Item
          name="prizedDay"
          label="Ngày kỷ luật"
          rules={[RULES.required]}
        >
          <DatePickerInForm format="DD/MM/YYYY" defaultValue={moment()} />
        </Form.Item>
        <TextInput disabled value="HK 1" />
      </div>
      {/* content textarea input */}
      <Form.Item name="prizedContent" label="Nội dung" rules={[RULES.required]}>
        <TextInput.TextArea />
      </Form.Item>
      {/* File upload */}
      <UploadField affixNote="Kiểu file .pdf.jpeg.png.jpg với dung lượng tối đa 100MB" />
    </StudentActionForms>
  );
};

//* namespace assign
StudentActionForms.ClassTransfer = ClassTransfer;
StudentActionForms.SchoolTransfer = SchoolTransfer;
StudentActionForms.Reserve = Reserve;
StudentActionForms.Discount = Discount;
StudentActionForms.Prized = Prized;
StudentActionForms.Disciplined = Disciplined;

export default StudentActionForms;
