import React from "react";
import { Form, Space, Divider } from "antd";
import TextInput from "@components/TextInput";
import { SelectInForm } from "@components/Select";
import { RULES } from "@utils/rules";
import { FormButton, FormItem } from "@components/Forms";

type Props = {
  onCancel: () => void;
};

export const ScoreForm = ({ onCancel }: Props) => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Form name="add-score" onFinish={handleSubmit} className="score-form">
      <div className="form-top">
        <Space size={40}>
          <FormItem
            label="Tên loại điểm"
            className="name-field"
            name="name"
            rules={[{ required: true, message: "Xin hãy nhập tên loại điểm" }]}
          >
            <TextInput />
          </FormItem>
          <FormItem
            label="Hệ số"
            name="multiplier"
            className="multiplier-field"
            rules={[{ required: true, message: "Xin hãy chọn hệ số" }]}
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
            rules={[
              { required: true, message: "Xin hãy nhập điểm" },
              RULES.number,
            ]}
          >
            <TextInput />
          </FormItem>
          <FormItem
            name="secondary"
            label="Học kỳ 2"
            rules={[
              { required: true, message: "Xin hãy nhập điểm" },
              RULES.number,
            ]}
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
