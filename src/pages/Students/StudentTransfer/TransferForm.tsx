import React from "react";
import { Form } from "antd";
import TextInput from "@components/TextInput";
import { RULES } from "@utils/rules";
import { DatePickerInForm } from "@components/DatePicker";
import { SelectInForm } from "@components/Select";
import UploadField from "@components/UploadField";
import { FormButton } from "@components/Forms";
import { hideFormModal } from "@slices/formModalSlice";
import { useAppDispatch } from "@hooks";
import { FormItem as Item } from "@components/Forms";

export const TransferForm = () => {
  const dispatch = useAppDispatch();

  const handleFinish = (values: any) => {
    console.log(values);
  };
  const hideForm = () => {
    dispatch(hideFormModal());
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
      <div className="day-picker-field">
        <Item
          name="transferDay"
          label="Ngày chuyển đến"
          rules={[RULES.required]}
        >
          <DatePickerInForm />
        </Item>
        <TextInput disabled value="Học kỳ I" />
      </div>
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
      <Item name="reason" label="Lý do" rules={[RULES.required]}>
        <TextInput.TextArea />
      </Item>
      {/* upload field */}
      <UploadField affixNote="Kích thước tệp không vượt quá 250MB" />

      {/* Buttons group */}
      <FormButton.Container>
        <FormButton.CancelButton onClick={hideForm} />
        <FormButton.SaveButton onClick={hideForm}>
          Tiếp theo
        </FormButton.SaveButton>
      </FormButton.Container>
    </Form>
  );
};
