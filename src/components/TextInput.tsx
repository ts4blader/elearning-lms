import React from "react";
import { Input, InputProps } from "antd";
import { TextAreaProps } from "rc-textarea";

const TextInput = ({ onChange, ...rest }: InputProps) => {
  return (
    <Input
      {...rest}
      onChange={(e) => {
        if (onChange) onChange(e);
        if (e.target.value.length > 0) e.target.classList.add("not-empty");
        else e.target.classList.remove("not-empty");
      }}
    />
  );
};

TextInput.TextArea = ({ onChange, ...rest }: TextAreaProps) => {
  return (
    <Input.TextArea
      {...rest}
      onChange={(e) => {
        if (onChange) onChange(e);
        if (e.target.value.length > 0) e.target.classList.add("not-empty");
        else e.target.classList.remove("not-empty");
      }}
    />
  );
};

export default TextInput;
