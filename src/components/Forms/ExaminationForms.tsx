import React from "react";
import { Form } from "antd";
import { FormItem } from "./FormItem";
import { Row } from "@layouts/Grid";
import { SelectInForm } from "@components/Select";

export const ExaminationForms = () => {
  const handleFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      onFinish={handleFinish}
      name="examination-form"
      className="examination-form"
    >
      {/* Class and semester selector row */}
      <Row arrange="space-between">
        <FormItem label="Niên khóa" name="semester">
          <SelectInForm
            placeholder="Chọn học kỳ"
            data={["2021-2022", "2022-2023"]}
            keyAffix="semester-selector"
          />
        </FormItem>
        <FormItem label="Khối" name="class">
          <SelectInForm
            placeholder="Chọn khối"
            data={["Khoi 9", "Khoi 8"]}
            keyAffix="grade-selector"
          />
        </FormItem>
      </Row>
      <FormItem label="Lớp học"></FormItem>
    </Form>
  );
};
