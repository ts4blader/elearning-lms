import React, { useState } from "react";
import { Checkbox, Divider, Form } from "antd";
import TextInput from "@components/TextInput";
import { SelectInForm } from "@components/Select";
import { DatePickerInForm } from "@components/DatePicker";
import { FormButton, FormItem as Item, FormList } from "@components/Forms";
import { RULES } from "@utils/rules";

type CareerFormProps = {
  onCancel: () => void;
};

export const CareerForm = ({ onCancel }: CareerFormProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleFinish = (value: any) => {
    console.log(value, selected);
  };

  return (
    <Form className="career-form" onFinish={handleFinish} name="career-form">
      <Item label="Giảng viên" name="name">
        <TextInput />
      </Item>
      <Item label="Cơ quan/Đơn vị" name="unit" rules={[RULES.required]}>
        <TextInput />
      </Item>
      <Item label="" name="isInWork">
        <Checkbox className="isInWork">Đang làm việc tại đơn vị này</Checkbox>
      </Item>
      <Item label="Tổ/Bộ môn" name="group" rules={[RULES.required]}>
        <SelectInForm
          data={["Toan - Ly", "Ngu van - Lich su"]}
          keyAffix="group-selector"
        />
      </Item>
      <Item label="Chức vụ" name="position" rules={[RULES.required]}>
        <SelectInForm data={["Leader", "Member"]} keyAffix="group-selector" />
      </Item>
      <Item label="Ngày bắt đầu" name="beginDay" rules={[RULES.required]}>
        <DatePickerInForm />
      </Item>
      <Item label="Ngày kết thúc" name="endDay" rules={[RULES.required]}>
        <DatePickerInForm />
      </Item>

      <Divider />

      <FormList.Selection
        onChange={(values) => setSelected(values)}
        addButtonText="Thêm đơn vị công tác"
      />

      <FormButton.Container>
        <FormButton.CancelButton onClick={onCancel} />
        <FormButton.SaveButton />
      </FormButton.Container>
    </Form>
  );
};
