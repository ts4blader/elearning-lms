import TextInput from "@components/TextInput";
import { Form } from "antd";
import React, { useState } from "react";
import { FormItem } from "./FormItem";
import { Switch } from "antd";
import { FormButton } from "./FormButtons";
import { SubjectTypeProps, FormModalGeneric } from "@types";
import { useAppDispatch } from "@hooks";
import { generateId } from "@utils/methods";
import { updateSubjectType, addSubjectType } from "@slices/subjectTypeSlice";

export function SubjectTypeForm<T extends SubjectTypeProps>({
  onCancel,
  defaultData,
}: FormModalGeneric<T>) {
  const handleFinish = (values: any) => {
    if (defaultData) {
      dispatch(
        updateSubjectType({
          ...values,
          disabled,
          id: defaultData.id,
        })
      );
    } else {
      dispatch(
        addSubjectType({
          ...values,
          disabled,
          id: generateId("lm"),
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
      className="subject-type-form"
      name="subject-type-form"
      form={form}
      initialValues={defaultData}
      onFinish={handleFinish}
    >
      <FormItem name="name" label="Loại môn học">
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
