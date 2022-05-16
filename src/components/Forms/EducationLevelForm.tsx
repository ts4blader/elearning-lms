import TextInput from "@components/TextInput";
import { Form } from "antd";
import React, { useState } from "react";
import { FormItem } from "./FormItem";
import { Switch } from "antd";
import { FormButton } from "./FormButtons";
import { ClassTypeProps, FormModalGeneric } from "@types";
import { useAppDispatch } from "@hooks";
import { generateId } from "@utils/methods";
import {
  addEducationLevel,
  updateEducationLevel,
} from "@slices/educationLevelSlice";

export function EducationLevelForm<T extends ClassTypeProps>({
  onCancel,
  defaultData,
}: FormModalGeneric<T>) {
  const handleFinish = (values: any) => {
    if (defaultData) {
      dispatch(
        updateEducationLevel({
          ...values,
          disabled,
          id: defaultData.id,
        })
      );
    } else {
      dispatch(
        addEducationLevel({
          ...values,
          disabled,
          id: generateId("bd"),
        })
      );
    }
    form.resetFields();
  };
  // form instance
  const [form] = Form.useForm();
  // redux hook
  const dispatch = useAppDispatch();
  // state define
  const [disabled, setDisabled] = useState(defaultData?.disabled);

  return (
    <Form
      className="education-level-form"
      name="education-level-form"
      form={form}
      initialValues={defaultData}
      onFinish={handleFinish}
    >
      <FormItem name="name" label="Bậc đào tạo">
        <TextInput />
      </FormItem>
      <FormItem label="Trạng thái">
        <Switch checked={!disabled} onChange={(check) => setDisabled(!check)} />
      </FormItem>
      <FormItem name="description" label="Ghi chú">
        <TextInput />
      </FormItem>

      <FormButton.Container>
        <FormButton.CancelButton onClick={onCancel} />
        <FormButton.SaveButton onClick={onCancel} />
      </FormButton.Container>
    </Form>
  );
}
