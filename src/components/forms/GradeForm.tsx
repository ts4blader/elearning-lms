import React from "react";
import { Form, Input, Select, Space, Button } from "antd";

type Props = {
  onCancel: () => void;
};

const GradeForm = ({ onCancel }: Props) => {
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
          <Input />
        </Form.Item>
        <Form.Item
          label="Tên khoa khối"
          name="name"
          rules={[{ required: true, message: "Xin hãy nhập tên khoa khối" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Trưởng khoa khối"
          name="leader"
          rules={[{ required: true, message: "Xin hãy chọn tên trưởng khoa" }]}
          initialValue="thu"
        >
          <Select>
            <Select.Option>Thu</Select.Option>
            <Select.Option>Ha</Select.Option>
            <Select.Option>An</Select.Option>
          </Select>
        </Form.Item>
      </div>

      {/* Modal buttons */}
      <Space className="btn-grp" size={40}>
        <Button className="cancel-btn" onClick={onCancel}>
          Hủy
        </Button>
        <Form.Item>
          <Button className="save-btn" type="primary" htmlType="submit">
            Lưu
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default GradeForm;
