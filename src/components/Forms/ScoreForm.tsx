import React from "react";
import { Form, Space, Button, Divider } from "antd";
import TextInput from "@components/TextInput";
import { SelectInForm } from "@components/Select";
import { RULES } from "@utils/rules";
import { FormButton } from "./FormButtons";

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
          <Form.Item
            label="Tên loại điểm"
            name="name"
            rules={[{ required: true, message: "Xin hãy nhập tên loại điểm" }]}
          >
            <TextInput />
          </Form.Item>
          <Form.Item
            label="Hệ số"
            name="multiplier"
            rules={[{ required: true, message: "Xin hãy chọn hệ số" }]}
          >
            <SelectInForm
              placeholder="Hệ số điểm"
              data={["1", "2", "3"]}
              keyAffix="base-score-selector"
            />
          </Form.Item>
        </Space>
      </div>

      <Divider />

      <div className="form-bottom">
        <div className="title">Số cột điểm tối thiểu</div>
        <Space size={100} className="semester-score" align="start">
          <Form.Item
            name="first"
            label="Học kỳ 1"
            rules={[
              { required: true, message: "Xin hãy nhập điểm" },
              RULES.number,
            ]}
          >
            <TextInput />
          </Form.Item>
          <Form.Item
            name="secondary"
            label="Học kỳ 2"
            rules={[
              { required: true, message: "Xin hãy nhập điểm" },
              RULES.number,
            ]}
          >
            <TextInput />
          </Form.Item>
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
