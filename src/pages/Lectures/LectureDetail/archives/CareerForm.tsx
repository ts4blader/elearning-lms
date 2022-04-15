import React from "react";
import { Checkbox, Divider, Form } from "antd";
import TextInput from "@components/TextInput";
import Select, { SelectInForm } from "@components/Select";
import { DatePickerInForm } from "@components/DatePicker";
import { FormButton, FormItem as Item, FormList } from "@components/Forms";
import { RULES } from "@utils/rules";

type CareerFormProps = {
  onCancel: () => void;
};

const ListItem = ({ name }: { name: number }) => {
  return (
    <Item name={[name, "value"]} initialValue="THPT Campus">
      <Select
        data={["THPT Campus", "THPT Lê Hồng Phong"]}
        keyAffix="unit-selector"
        size="middle"
      />
    </Item>
  );
};

export const CareerForm = ({ onCancel }: CareerFormProps) => {
  const handleFinish = (value: any) => {
    console.log(value);
  };

  return (
    <Form className="career-form" onFinish={handleFinish}>
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

      <FormList
        addButtonText="Thêm Đơn vị công tác"
        name="units"
        render={(props) => (
          <FormList.Item {...props}>
            <ListItem name={props.name} />
          </FormList.Item>
        )}
      />

      <FormButton.Container>
        <FormButton.CancelButton onClick={onCancel} />
        <FormButton.SaveButton />
      </FormButton.Container>
    </Form>
  );
};
