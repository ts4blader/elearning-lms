import { FormButton } from "@components/Forms";
import React from "react";
import { Form, FormProps } from "antd";
import { DatePickerInForm } from "@components/DatePicker";
import { RULES } from "@utils/rules";
import TextInput from "@components/TextInput";
import UploadField from "@components/UploadField";

type LectureActionFormsProps = {
  name: string;
  onCancel: () => void;
} & FormProps;

const LectureActionForms = ({
  children,
  name,
  className = "",
  onCancel,
  ...rest
}: LectureActionFormsProps) => {
  const handleFinish = (value: any) => {
    console.log(value);
  };

  return (
    <Form
      onFinish={handleFinish}
      className={`${name}-lecture-form lecture-action-form  ${className}`}
      {...rest}
    >
      {children}
      <FormButton.Container>
        <FormButton.CancelButton onClick={onCancel} />
        <FormButton.SaveButton onClick={onCancel} />
      </FormButton.Container>
    </Form>
  );
};

LectureActionForms.Retired = ({ name, ...rest }: LectureActionFormsProps) => {
  const { Item } = Form;

  return (
    <LectureActionForms name="retired" {...rest}>
      <Item name="retiredDay" label="Ngày nghỉ hưu" rules={[RULES.required]}>
        <DatePickerInForm />
      </Item>
      <Item name="note" label="Ghi chú" rules={[RULES.required]}>
        <TextInput.TextArea />
      </Item>
      <UploadField affixNote="Kiểu file .pdf .jpeg .jpg. Dung lượng tối đa 100MB" />
    </LectureActionForms>
  );
};

LectureActionForms.Eject = ({ name, ...rest }: LectureActionFormsProps) => {
  const { Item } = Form;

  return (
    <LectureActionForms name="eject" {...rest}>
      <Item name="ejectDay" label="Ngày nghỉ việc" rules={[RULES.required]}>
        <DatePickerInForm />
      </Item>
      <Item name="note" label="Ghi chú" rules={[RULES.required]}>
        <TextInput.TextArea />
      </Item>
      <UploadField affixNote="Kiểu file .pdf .jpeg .jpg. Dung lượng tối đa 100MB" />
    </LectureActionForms>
  );
};
LectureActionForms.Temporary = ({ name, ...rest }: LectureActionFormsProps) => {
  const { Item } = Form;

  return (
    <LectureActionForms name="temporary" {...rest}>
      <Item name="temporaryDay" label="Ngày tạm nghỉ" rules={[RULES.required]}>
        <DatePickerInForm />
      </Item>
      <Item name="note" label="Ghi chú" rules={[RULES.required]}>
        <TextInput.TextArea />
      </Item>
      <UploadField affixNote="Kiểu file .pdf .jpeg .jpg. Dung lượng tối đa 100MB" />
    </LectureActionForms>
  );
};

export default LectureActionForms;
