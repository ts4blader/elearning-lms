import React from "react";
import {
  DatePicker as AntDatePicker,
  DatePickerProps as AntDatePickerProps,
} from "antd";

export type DatePickerProps = AntDatePickerProps;

const DatePicker = ({
  format = "DD/MM/YYYY",
  className = "",
  ...rest
}: DatePickerProps) => {
  return (
    <AntDatePicker
      allowClear={false}
      className={`datepicker ${className}`}
      dropdownClassName="datepicker-dropdown"
      format={format}
      {...rest}
    />
  );
};

export const DatePickerInForm = ({
  className = "",
  ...rest
}: DatePickerProps) => {
  return (
    <DatePicker
      size="large"
      className={`datepicker-inform ${className} ${!rest.value ? "empty" : ""}`}
      {...rest}
    />
  );
};

export default DatePicker;
