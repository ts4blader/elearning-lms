import React from "react";
import { Form, FormProps as AntFormProps } from "antd";
import { DatePickerInForm } from "@components/DatePicker";
import TextInput from "@components/TextInput";
import { SelectInForm } from "@components/Select";
import moment from "moment";
import { RULES } from "@utils/rules";
import UploadField from "@components/UploadField";
import { FormButton, FormItem } from "@components/Forms";

type FormProps = {
  onCancel: () => void;
} & AntFormProps;

type StudentActionFormsProps = {
  name: string;
} & FormProps;

export const StudentActionForms = ({
  name,
  children,
  onCancel,
  className = "",
  ...rest
}: StudentActionFormsProps) => {
  return (
    <Form
      name={`${name}-student-form`}
      className={`${name}-student-form student-form ${className}`}
      {...rest}
    >
      <FormItem name="name" label="Học viên" initialValue="Jonh Doe">
        John Doe
      </FormItem>
      <FormItem name="class" label="Lớp học" initialValue="6A">
        6A
      </FormItem>
      {children}
      {/* Form Button */}
      <FormButton.Container>
        <FormButton.CancelButton onClick={onCancel} />
        <FormButton.SaveButton onClick={onCancel} />
      </FormButton.Container>
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
        <FormItem
          name="transferDay"
          label="Ngày chuyển lớp"
          rules={[RULES.required]}
        >
          <DatePickerInForm defaultValue={moment()} />
        </FormItem>
        <TextInput disabled value="HK 1" />
      </div>
      {/* class selector */}
      <FormItem
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
      </FormItem>
      {/* Reason text area input */}
      <FormItem name="reason" label="Lý do" rules={[RULES.required]}>
        <TextInput.TextArea />
      </FormItem>
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
        <FormItem
          name="transferDay"
          label="Ngày chuyển trường"
          rules={[RULES.required]}
        >
          <DatePickerInForm defaultValue={moment()} />
        </FormItem>
        <TextInput disabled value="HK 1" />
      </div>
      {/* school input */}
      <FormItem
        name="transferToSchool"
        label="Chuyển đến trường"
        rules={[RULES.required]}
        className="transfer-to-input"
      >
        <TextInput />
      </FormItem>
      {/* Reason text area input */}
      <FormItem name="reason" label="Lý do" rules={[RULES.required]}>
        <TextInput.TextArea />
      </FormItem>
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
        <FormItem
          name="reserveDay"
          label="Ngày bảo lưu"
          rules={[RULES.required]}
        >
          <DatePickerInForm defaultValue={moment()} />
        </FormItem>
        <TextInput disabled value="HK 1" />
      </div>
      {/* reserve duration input */}
      <FormItem
        name="reserveDuration"
        label="Thời hạn bảo lưu"
        rules={[RULES.required]}
        className="reserve-duration-input"
      >
        <TextInput />
      </FormItem>
      {/* Reason text area input */}
      <div className="reason-field">
        <FormItem name="reason" label="Lý do" rules={[RULES.required]}>
          <TextInput.TextArea />
        </FormItem>
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
      <FormItem
        label="Đối tượng miễn giảm"
        name="discountType"
        rules={[RULES.required]}
      >
        <SelectInForm
          data={["Con thuong binh", "Dan toc thieu so"]}
          keyAffix="discount-type"
        />
      </FormItem>
      {/* discount detail input */}
      <FormItem
        name="discountDetail"
        label="Hình thức miễn giảm"
        rules={[RULES.required]}
        className="discount-detail-input"
      >
        <TextInput />
      </FormItem>
    </StudentActionForms>
  );
};
//* Prized
const Prized = ({ onCancel }: FormProps) => {
  return (
    <StudentActionForms name="prized" onCancel={onCancel} className="prized">
      {/* day picker field */}
      <div className="day-picker-field">
        <FormItem
          name="prizedDay"
          label="Ngày khen thưởng"
          rules={[RULES.required]}
        >
          <DatePickerInForm defaultValue={moment()} />
        </FormItem>
        <TextInput disabled value="HK 1" />
      </div>
      {/* content textarea input */}
      <FormItem name="prizedContent" label="Nội dung" rules={[RULES.required]}>
        <TextInput.TextArea />
      </FormItem>
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
        <FormItem
          name="prizedDay"
          label="Ngày kỷ luật"
          rules={[RULES.required]}
        >
          <DatePickerInForm defaultValue={moment()} />
        </FormItem>
        <TextInput disabled value="HK 1" />
      </div>
      {/* content textarea input */}
      <FormItem name="prizedContent" label="Nội dung" rules={[RULES.required]}>
        <TextInput.TextArea />
      </FormItem>
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
