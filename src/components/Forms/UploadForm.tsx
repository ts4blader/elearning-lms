import React from "react";
import { Space, Button, Form } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import UploadField from "@components/UploadField";

type Props = {
  onCancel: () => void;
};

export const UploadForm = ({ onCancel }: Props) => {
  return (
    <Form className="upload-form">
      <UploadField />
      <Form.Item label="Tải file mẫu" className="download-example">
        <DownloadOutlined />
        [Tải xuống file mẫu]
      </Form.Item>

      {/* Buttons */}
      <Space className="btn-grp" size={40}>
        <Button className="cancel-btn" onClick={onCancel}>
          Hủy
        </Button>
        <Button className="upload-btn" type="primary" htmlType="submit">
          Tải file lên
        </Button>
      </Space>
    </Form>
  );
};

export default UploadForm;
