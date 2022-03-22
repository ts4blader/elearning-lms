import React, { useState } from "react";
import { Space, Button, Upload, message } from "antd";
import TextInput from "@components/TextInput";
import { PaperClipOutlined, DownloadOutlined } from "@ant-design/icons";

type Props = {
  onCancel: () => void;
};

type FieldProps = {
  label: string;
  className?: string;
} & React.ComponentProps<"div">;

const Field = ({ label, children, className = "", ...rest }: FieldProps) => {
  return (
    <div className={`field ${className}`} {...rest}>
      <div className="field-label">{label + ":"}</div>
      <div className="field-control">{children}</div>
    </div>
  );
};

const UploadForm = ({ onCancel }: Props) => {
  const [file, setFile] = useState("");
  const uploadProps = {
    name: "file",
    action: "",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info: any) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
        setFile(info.file.name);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
        setFile(info.file.name);
      }
    },
  };

  return (
    <div className="upload-form">
      <Field label="Tệp đính kèm" data-length={file.length !== 0}>
        <TextInput value={file} prefix={<PaperClipOutlined />} maxLength={50} />
        <Upload {...uploadProps}>
          <Button ghost type="primary">
            Chọn tệp tải lên...
          </Button>
        </Upload>
      </Field>
      <Field label="Tải file mẫu">
        <div className="icon">
          <DownloadOutlined />
        </div>
        <div className="text">[Tải xuống file mẫu]</div>
      </Field>

      {/* Buttons */}
      <Space className="btn-grp" size={40}>
        <Button className="cancel-btn" onClick={onCancel}>
          Hủy
        </Button>
        <Button className="upload-btn" type="primary" htmlType="submit">
          Tải file lên
        </Button>
      </Space>
    </div>
  );
};

export default UploadForm;
