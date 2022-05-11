import React from "react";
import { Form } from "antd";
import TextInput from "@components/TextInput";
import Select from "@components/Select";
import { FormButton, FormItem } from "@components/Forms";
import { FormModalGeneric, GradeProps } from "@types";
import { useAppDispatch } from "@hooks";
import { addGrade, updateGrade } from "@slices/gradeSlice";
import { generateId } from "@utils/methods";

export const GradeForm = <T extends GradeProps>({
  onCancel,
  defaultData,
}: FormModalGeneric<T>) => {
  // form instance
  const [form] = Form.useForm();
  // redux hook
  const dispatch = useAppDispatch();
  // submit method
  const handleSubmit = (values: any) => {
    console.log(values);
    if (defaultData) {
      dispatch(
        updateGrade({
          id: defaultData.id,
          ...values,
        })
      );
    } else {
      dispatch(
        addGrade({
          id: generateId("kk"),
          ...values,
        })
      );
    }

    form.resetFields();
  };

  return (
    <Form
      name="add-grade"
      initialValues={defaultData}
      form={form}
      onFinish={handleSubmit}
      className="grade-form"
    >
      <div className="form-top">
        <FormItem
          label="Mã khoa khối"
          name="id"
          className="id-field"
          rules={[{ required: true, message: "Xin hãy nhập mã khoa khối" }]}
        >
          <TextInput />
        </FormItem>
        <FormItem
          label="Tên khoa khối"
          name="name"
          rules={[{ required: true, message: "Xin hãy nhập tên khoa khối" }]}
        >
          <TextInput />
        </FormItem>
        <FormItem
          label="Trưởng khoa khối"
          name="leaderId"
          rules={[{ required: true, message: "Xin hãy chọn tên trưởng khoa" }]}
        >
          <Select.Search>
            <Select.Option value={"something"}>Something</Select.Option>
          </Select.Search>
        </FormItem>
      </div>

      {/* Modal buttons */}
      <FormButton.Container>
        <FormButton.CancelButton onClick={onCancel} />
        <FormButton.SaveButton onClick={onCancel} />
      </FormButton.Container>
    </Form>
  );
};

export default GradeForm;
