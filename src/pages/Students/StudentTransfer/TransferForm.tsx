import React from "react";
import { Button, Form } from "antd";
import TextInput from "@components/TextInput";
import { RULES } from "@utils/rules";
import DatePicker from "@components/DatePicker";
import { SelectInForm } from "@components/Select";
import UploadField from "@components/UploadField";

export const TransferForm = () => {
  const { Item } = Form;
  const handleFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form onFinish={handleFinish} className="transfer-form">
      {/* Name input */}
      <Item name="name" label="Tên học viên" rules={[RULES.required]}>
        <TextInput />
      </Item>
      {/* ID input */}
      <Item name="id" label="Mã học viên" rules={[RULES.required]}>
        <TextInput maxLength={20} />
      </Item>
      {/* Transfer day picker */}
      <Item name="transferDay" label="Ngày chuyển đến" rules={[RULES.required]}>
        <DatePicker />
      </Item>
      {/* Transfer semester */}
      <Item
        initialValue="Học kỳ I"
        name="transferSemester"
        label="Học kỳ chuyển"
        rules={[RULES.required]}
      >
        <TextInput disabled />
      </Item>
      {/* province selector */}
      <Item name="province" label="Tỉnh/Thành" rules={[RULES.required]}>
        <SelectInForm
          placeholder="Lựa chọn"
          data={["BL", "CT", "TP.HCM"]}
          keyAffix="province-selector"
        />
      </Item>
      {/* district selector */}
      <Item name="district" label="Quận/Huyện" rules={[RULES.required]}>
        <SelectInForm
          placeholder="Lựa chọn"
          data={["Quận 1", "Quận 2", "Quận TB"]}
          keyAffix="district-selector"
        />
      </Item>
      {/* from section input */}
      <Item name="from" label="Chuyển từ" rules={[RULES.required]}>
        <TextInput />
      </Item>
      {/* reason area input */}
      <Item name="from" label="Lý do" rules={[RULES.required]}>
        <TextInput.TextArea />
      </Item>
      {/* upload field */}
      <UploadField affixNote="Kích thước tệp không vượt quá 250MB" />

      {/* Buttons group */}
      <Item>
        <Button htmlType="submit">Tiếp theo</Button>
      </Item>
      <Button>Hủy</Button>
    </Form>
  );
};
