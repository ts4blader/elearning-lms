import TextInput from "@components/TextInput";
import { Form } from "antd";
import React, { useState } from "react";
import { FormItem } from "./FormItem";
import { Switch } from "antd";
import { FormButton } from "./FormButtons";
import { ClassTypeProps, FormModalGeneric } from "@types";
import { useAppDispatch } from "@hooks";
import { addClassType, updateClassType } from "@slices/classTypeSlice";
import { generateId } from "@utils/methods";

export function ClassTypeForm<T extends ClassTypeProps>({
  onCancel,
  defaultData,
}: FormModalGeneric<T>) {
  const handleFinish = (values: any) => {
    if (defaultData) {
      dispatch(
        updateClassType({
          ...values,
          disabled,
          id: defaultData.id,
        })
      );
    } else {
      dispatch(
        addClassType({
          ...values,
          disabled,
          id: generateId("ll"),
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
      className="class-type-form"
      name="class-type-form"
      form={form}
      initialValues={defaultData}
      onFinish={handleFinish}
    >
      <FormItem name="name" label="Loại lớp học">
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
