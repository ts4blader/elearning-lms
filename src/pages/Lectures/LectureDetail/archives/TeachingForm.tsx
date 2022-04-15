import React from "react";
import { Checkbox, Divider, Form } from "antd";
import { FormItem, FormButton, FormList } from "@components/Forms";
import TextInput from "@components/TextInput";
import Select, { SelectInForm } from "@components/Select";
import { RULES } from "@utils/rules";
import { DatePickerInForm } from "@components/DatePicker";
import UploadField from "@components/UploadField";

type FormProps = {
  onCancel: () => void;
};

const ListItem = ({ name }: { name: number }) => {
  return (
    <FormItem name={[name, "value"]} initialValue="A">
      <Select data={["A", "B"]} keyAffix="education-program-selector" />
    </FormItem>
  );
};

const TeachingForm = ({ onCancel }: FormProps) => {
  const handleFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      className="teaching-form"
      name="teaching-form"
      onFinish={handleFinish}
    >
      <FormItem label="Giảng viên" name="name" initialValue="placeholder">
        <TextInput disabled />
      </FormItem>
      <FormItem label="Cơ sở đào tạo" name="unit" rules={[RULES.required]}>
        <SelectInForm data={["THPT Campus"]} keyAffix="unit-selector" />
      </FormItem>
      <FormItem label="Chuyên ngành" name="major" rules={[RULES.required]}>
        <SelectInForm data={["IT", "Law"]} keyAffix="major-selector" />
      </FormItem>
      <FormItem label="Ngày bắt đầu" name="beginDay" rules={[RULES.required]}>
        <DatePickerInForm />
      </FormItem>
      <FormItem label="" name="isFinish">
        <Checkbox className="is-finish-checkbox">
          Đã kết thúc chương trình đào tạo
        </Checkbox>
      </FormItem>
      <FormItem label="Ngày kết thúc" name="endDay" rules={[RULES.required]}>
        <DatePickerInForm />
      </FormItem>
      <FormItem label="Hình thức" name="type" rules={[RULES.required]}>
        <TextInput />
      </FormItem>
      <FormItem
        label="Văn bằng/Chứng chỉ"
        name="license"
        rules={[RULES.required]}
      >
        <TextInput />
      </FormItem>

      <UploadField />

      <Divider />

      <FormList
        addButtonText="Thêm chương trình đào tạo"
        name="educationProgram"
        render={(props) => (
          <FormList.Item {...props}>
            <ListItem name={props.name} />
          </FormList.Item>
        )}
      />

      <FormButton.Container>
        <FormButton.CancelButton onClick={onCancel} />
        <FormButton.SaveButton />
      </FormButton.Container>
    </Form>
  );
};

export default TeachingForm;
