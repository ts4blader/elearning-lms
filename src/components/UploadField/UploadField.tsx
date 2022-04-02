import React, { useState, useEffect } from "react";
import { Form, Button, message, Upload } from "antd";
import TextInput from "@components/TextInput";
import { PaperClipOutlined } from "@ant-design/icons";

export type UploadFieldProps = {
  className?: string;
  affixNote?: string;
  onChange?: (value: string) => void;
};

const UploadField = ({
  className = "",
  affixNote = "",
  onChange,
}: UploadFieldProps) => {
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

  useEffect(() => {
    if (onChange) onChange(file);
  }, [file, onChange]);

  return (
    <Form.Item
      className={`upload-field ${className} ${affixNote ? "has-affix" : ""}`}
      label="Tệp đính kèm"
      data-length={file.length !== 0}
    >
      <TextInput value={file} prefix={<PaperClipOutlined />} maxLength={50} />
      <Upload {...uploadProps}>
        <Button ghost type="primary" size="large">
          Chọn tệp tải lên...
        </Button>
      </Upload>
      {affixNote && <div className="affix-note">{affixNote}</div>}
    </Form.Item>
  );
};

export default UploadField;
