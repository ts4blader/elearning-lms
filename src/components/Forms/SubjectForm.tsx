import React from "react";
import { Form, Space, Divider } from "antd";
import TextInput from "@components/TextInput";
import Select, { SelectInForm } from "@components/Select";
import { RULES } from "@utils/rules";
import { FormButton, FormItem } from "@components/Forms";
import { FormModalGeneric, SubjectProps } from "@types";
import { useAppDispatch, useAppSelector } from "@hooks";
import { addSubject, updateSubject } from "@slices/subjectSlice";
import { generateId } from "@utils/methods";

export const SubjectForm = <T extends SubjectProps>({
  onCancel,
  defaultData,
}: FormModalGeneric<T>) => {
  // submit handle
  const handleSubmit = (values: any) => {
    if (defaultData) {
      dispatch(
        updateSubject({
          ...values,
          id: defaultData.id,
        })
      );
    } else {
      dispatch(
        addSubject({
          ...values,
          id: generateId("mh"),
        })
      );
    }
    form.resetFields();
  };

  // form instance
  const [form] = Form.useForm();

  // redux hook
  const dispatch = useAppDispatch();
  const subjectType = useAppSelector((state) => state.subjectType);

  return (
    <Form
      name="add-subject"
      form={form}
      initialValues={defaultData}
      onFinish={handleSubmit}
      className="subject-form"
    >
      <div className="form-top">
        {/* name input */}
        <FormItem
          label="Tên môn học"
          name="name"
          rules={[{ required: true, message: "Xin hãy nhập tên môn học" }]}
        >
          <TextInput />
        </FormItem>
        {/* id input */}
        <FormItem
          label="Mã môn học"
          name="id"
          className="short-item"
          rules={[{ required: true, message: "Xin hãy nhập mã môn học" }]}
        >
          <TextInput />
        </FormItem>
        {/* choose type */}
        <FormItem
          label="Loại môn học"
          name="subjectTypeId"
          rules={[{ required: true, message: "Xin hãy chọn loại môn học" }]}
        >
          <SelectInForm>
            {subjectType.value.map((item) => (
              <Select.Option value={item.id} key={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </SelectInForm>
        </FormItem>
      </div>

      <Divider />

      <div className="form-bottom">
        <FormItem.Title>Số tiết/học kỳ</FormItem.Title>
        <Space className="semester-list">
          {/* first semester  */}
          <FormItem name="first" label="Học kỳ 1" rules={[RULES.number]}>
            <TextInput />
          </FormItem>
          {/* secondary semester  */}
          <FormItem name="second" rules={[RULES.number]} label="Học kỳ 2">
            <TextInput />
          </FormItem>
        </Space>
      </div>

      {/* Modal buttons */}
      <FormButton.Container>
        <FormButton.CancelButton onClick={onCancel} />
        <FormButton.SaveButton onClick={onCancel} />
      </FormButton.Container>
    </Form>
  );
};

export default SubjectForm;
