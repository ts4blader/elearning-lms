import { BaseSelectRef } from "rc-select";
import { SelectProps as AntSelectProps } from "antd";

export type SelectProps = {
  data?: string[];
  keyAffix?: string;
  inputRef?: React.Ref<BaseSelectRef>;
} & AntSelectProps;

export type SelectOptionProps = {
  className?: string;
  disabled?: boolean;
  title?: string;
  children: React.ReactNode;
  value: number | string;
};
