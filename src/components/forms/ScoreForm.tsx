import React from "react";
import { Form, Select, Space, Button, Divider } from "antd";
import TextInput from "@components/TextInput";

type Props = {
  onCancel: () => void;
};

const ScoreForm = ({ onCancel }: Props) => {
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
            <Select placeholder="Hệ số điểm">
              <Select.Option>1</Select.Option>
              <Select.Option>2</Select.Option>
              <Select.Option>3</Select.Option>
            </Select>
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
              { pattern: /[1-9][0-9]*/g, message: "Nhập vào một sô" },
            ]}
          >
            <TextInput />
          </Form.Item>
          <Form.Item
            name="secondary"
            label="Học kỳ 2"
            rules={[
              { required: true, message: "Xin hãy nhập điểm" },
              { pattern: /[1-9][0-9]*/g, message: "Nhập vào một sô" },
            ]}
          >
            <TextInput />
          </Form.Item>
        </Space>
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

export default ScoreForm;
