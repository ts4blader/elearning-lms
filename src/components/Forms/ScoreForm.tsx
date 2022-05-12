import React from "react";
import { Form, Space, Divider } from "antd";
import TextInput from "@components/TextInput";
import { SelectInForm } from "@components/Select";
import { RULES } from "@utils/rules";
import { FormButton, FormItem } from "@components/Forms";
import { FormModalGeneric, ScoreTypeProps } from "@types";
import { useAppDispatch } from "@hooks";
import { addScoreType, updateScoreType } from "@slices/scoreTypeSlice";
import { generateId } from "@utils/methods";

export const ScoreForm = <T extends ScoreTypeProps>({
  onCancel,
  defaultData,
}: FormModalGeneric<T>) => {
  // submit handler
  const handleSubmit = (values: any) => {
    if (defaultData) {
      dispatch(
        updateScoreType({
          ...values,
          id: defaultData.id,
        })
      );
    } else {
      dispatch(
        addScoreType({
          ...values,
          id: generateId("ld"),
        })
      );
    }
    form.resetFields();
  };
  // form instance
  const [form] = Form.useForm();
  // redux hook
  const dispatch = useAppDispatch();

  return (
    <Form
      name="add-score"
      form={form}
      initialValues={defaultData}
      onFinish={handleSubmit}
      className="score-form"
    >
      <div className="form-top">
        <Space size={40}>
          <FormItem
            label="Tên loại điểm"
            className="name-field"
            name="name"
            rules={[RULES.required]}
          >
            <TextInput />
          </FormItem>
          <FormItem
            label="Hệ số"
            name="base"
            className="multiplier-field"
            rules={[RULES.required]}
          >
            <SelectInForm
              placeholder="Hệ số điểm"
              data={["1", "2", "3"]}
              keyAffix="base-score-selector"
            />
          </FormItem>
        </Space>
      </div>

      <Divider />

      <div className="form-bottom">
        <FormItem.Title>Số cột điểm tối thiểu</FormItem.Title>
        <Space size={100} className="semester-score" align="start">
          <FormItem
            name="first"
            label="Học kỳ 1"
            rules={[RULES.required, RULES.number]}
          >
            <TextInput />
          </FormItem>
          <FormItem
            name="second"
            label="Học kỳ 2"
            rules={[RULES.required, RULES.number]}
          >
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

export default ScoreForm;
