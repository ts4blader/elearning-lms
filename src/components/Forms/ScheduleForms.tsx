import React from "react";
import { Form } from "antd";
import { FormItem, FormButton } from "@components/Forms";
import TextInput from "@components/TextInput";
import { RULES } from "@utils/rules";
import { SelectInForm } from "@components/Select";
import { DatePickerInForm } from "@components/DatePicker";

type FormProps = {
  onCancel: () => void;
};

export const ScheduleForms = ({ onCancel }: FormProps) => {
  const handleFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      name="schedule-form"
      onFinish={handleFinish}
      className="schedule-form"
    >
      <FormItem name="name" label="Giảng viên" rules={[RULES.required]}>
        <TextInput />
      </FormItem>
      <FormItem name="subject" label="Môn học">
        <SelectInForm data={["Toan", "Vat ly"]} keyAffix="subject-selector" />
      </FormItem>
      <FormItem name="class" label="Lớp học">
        <SelectInForm data={["7A", "6B"]} keyAffix="class-selector" />
      </FormItem>
      <FormItem name="beginDay" label="Ngày bắt đầu" rules={[RULES.required]}>
        <DatePickerInForm />
      </FormItem>
      <FormItem name="endDay" label="Ngày kết thúc" rules={[RULES.required]}>
        <DatePickerInForm />
      </FormItem>
      <FormItem name="description" label="Mô tả">
        <TextInput.TextArea />
      </FormItem>

      <FormButton.Container>
        <FormButton.CancelButton onClick={onCancel} />
        <FormButton.SaveButton />
      </FormButton.Container>
    </Form>
  );
};
