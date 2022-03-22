import React from "react";
import { Form, Space, Button } from "antd";
import TextInput from "@components/TextInput";

type Props = {
  onCancel: () => void;
};

const UploadForm = ({ onCancel }: Props) => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Form name="upload-file" onFinish={handleSubmit} className="upload-form">
      <div className="form-top">
        <Form.Item label="Tệp đính kèm" name="file">
          <TextInput type="file" />
        </Form.Item>
        <Form.Item label="Tải file mẫu">
          <TextInput />
        </Form.Item>
      </div>

      {/* Modal buttons */}
      <Space className="btn-grp" size={40}>
        <Button className="cancel-btn" onClick={onCancel}>
          Hủy
        </Button>
        <Form.Item>
          <Button className="upload-btn" type="primary" htmlType="submit">
            Tải file lên
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default UploadForm;
