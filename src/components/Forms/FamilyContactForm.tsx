import TextInput from "@components/TextInput";
import { RULES } from "@utils/rules";
import { Form } from "antd";
import React from "react";
import { FormButton, FormItem } from "@components/Forms";
import { FamilyContactProps } from "@types";

type FormProps = {
  onCancel: () => void;
  onSubmit: (value: FamilyContactProps) => void;
};

export const FamilyContactForm = ({ onCancel, onSubmit }: FormProps) => {
  const handleFinish = (values: any) => {
    console.log(values);
    onSubmit(values as FamilyContactProps);
  };

  return (
    <Form
      className="family-contact-form"
      name="family-contact-form"
      onFinish={handleFinish}
    >
      <FormItem label="Người liên lạc" name="name" rules={[RULES.required]}>
        <TextInput />
      </FormItem>
      <FormItem label="Địa chỉ" name="address" rules={[RULES.required]}>
        <TextInput />
      </FormItem>
      <FormItem label="SĐT" name="phoneNumber" rules={[RULES.required]}>
        <TextInput />
      </FormItem>

      <FormButton.Container>
        <FormButton.CancelButton onClick={onCancel} />
        <FormButton.SaveButton />
      </FormButton.Container>
    </Form>
  );
};
