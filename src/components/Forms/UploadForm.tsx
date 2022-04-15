import React from "react";
import { Form } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import UploadField from "@components/UploadField";
import { FormButton, FormItem } from "@components/Forms";

type Props = {
  onCancel: () => void;
};

export const UploadForm = ({ onCancel }: Props) => {
  return (
    <Form className="upload-form">
      <UploadField />
      <FormItem label="Tải file mẫu" className="download-example">
        <DownloadOutlined />
        [Tải xuống file mẫu]
      </FormItem>

      {/* Buttons */}
      <FormButton.Container>
        <FormButton.CancelButton onClick={onCancel} />
        <FormButton.SaveButton>Tải file lên</FormButton.SaveButton>
      </FormButton.Container>
    </Form>
  );
};

export default UploadForm;
