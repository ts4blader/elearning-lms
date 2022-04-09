import React from "react";
import { Form, Space, Button } from "antd";
import TextInput from "@components/TextInput";
import { SelectInForm as Select } from "@components/Select";
import { FormButton } from "./FormButtons";

type Props = {
  onCancel: () => void;
};

export const GradeForm = ({ onCancel }: Props) => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Form name="add-grade" onFinish={handleSubmit} className="grade-form">
      <div className="form-top">
        <Form.Item
          label="Mã khoa khối"
          name="id"
          className="short-item"
          rules={[{ required: true, message: "Xin hãy nhập mã khoa khối" }]}
        >
          <TextInput />
        </Form.Item>
        <Form.Item
          label="Tên khoa khối"
          name="name"
          rules={[{ required: true, message: "Xin hãy nhập tên khoa khối" }]}
        >
          <TextInput />
        </Form.Item>
        <Form.Item
          label="Trưởng khoa khối"
          name="leader"
          rules={[{ required: true, message: "Xin hãy chọn tên trưởng khoa" }]}
        >
          <Select data={["Thu", "Ha", "An"]} keyAffix="leader" />
        </Form.Item>
      </div>

      {/* Modal buttons */}
      <FormButton.Container>
        <FormButton.CancelButton onClick={onCancel} />
        <FormButton.SaveButton />
      </FormButton.Container>
    </Form>
  );
};

export default GradeForm;
