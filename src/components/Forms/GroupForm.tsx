import React, { useState } from "react";
import { Form, Divider } from "antd";
import TextInput from "@components/TextInput";
import Select from "@components/Select";
import { FormButton, FormList, FormItem } from "@components/Forms";
import { FormModalGeneric, SubjectGroupProps } from "@types";
import { RULES } from "@utils/rules";
import { useAppDispatch, useAppSelector } from "@hooks";
import { addSubjectGroup, updateSubjectGroup } from "@slices/subjectGroupSlice";
import { generateId } from "@utils/methods";

export const GroupForm = <T extends SubjectGroupProps>({
  onCancel,
  defaultData,
}: FormModalGeneric<T>) => {
  const [form] = Form.useForm();
  const handleSubmit = (values: any) => {
    if (defaultData) {
      dispatch(
        updateSubjectGroup({
          ...values,
          id: defaultData.id,
          subjectsId: selected,
        })
      );
    } else {
      dispatch(
        addSubjectGroup({
          ...values,
          id: generateId("bm"),
          subjectsId: selected,
        })
      );
    }

    form.resetFields();
  };

  // redux hook
  const subject = useAppSelector((state) => state.subject);
  const dispatch = useAppDispatch();

  const [selected, setSelected] = useState<string[] | undefined>(
    defaultData?.subjectsId
  );

  return (
    <Form
      name="add-group"
      form={form}
      initialValues={defaultData}
      onFinish={handleSubmit}
      className="group-form"
    >
      <div className="form-top">
        <FormItem label="Tên tổ - bộ môn" name="name" rules={[RULES.required]}>
          <TextInput />
        </FormItem>
        <FormItem
          label="Tên trưởng tổ - bộ môn"
          name="leaderId"
          rules={[RULES.required]}
        >
          <Select.Search>
            <Select.Option value="something">something</Select.Option>
          </Select.Search>
        </FormItem>
      </div>

      <Divider />
      {/* Subject list */}
      <div className="subject-list-wrapper form-bottom">
        <FormItem.Title>Danh sách môn học</FormItem.Title>
        <FormList.Selection
          initValues={selected}
          onChange={(values) => setSelected(values)}
        />
      </div>

      {/* Modal buttons */}
      <FormButton.Container>
        <FormButton.CancelButton onClick={onCancel} />
        <FormButton.SaveButton onClick={onCancel} />
      </FormButton.Container>
    </Form>
  );
};

export default GroupForm;
