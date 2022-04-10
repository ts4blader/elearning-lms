import React from "react";
import { Input, InputProps } from "antd";
import { TextAreaProps as AntTextAreaProps } from "rc-textarea";

type TextAreaProps = {
  affixNote?: string;
} & AntTextAreaProps;

const TextInput = ({ className = "", ...rest }: InputProps) => {
  return (
    <Input
      size="large"
      className={`text-input ${className} ${rest.value ? "not-empty" : ""}`}
      {...rest}
    />
  );
};

TextInput.TextArea = ({ className = "", ...rest }: TextAreaProps) => {
  return (
    <Input.TextArea
      size="large"
      className={`text-input-area ${className} ${
        rest.value ? "not-empty" : ""
      }`}
      {...rest}
    />
  );
};

export default TextInput;
