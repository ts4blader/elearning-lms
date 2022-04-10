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
import { SearchOutlined } from "@ant-design/icons";

export const ReserveForm = () => {
  const { Item } = Form;
  const dispatch = useAppDispatch();

  const handleFinish = (values: any) => {
    console.log(values);
  };
  const hideForm = () => {
    dispatch(hideFormModal());
  };

  return (
    <Form onFinish={handleFinish} className="reserve-form">
      <Item name="class" label="Lớp hiện tại">
        <SelectInForm
          placeholder="Lựa chọn"
          data={["6A", "6B"]}
          keyAffix="class-selector"
        />
      </Item>
      {/* Name input */}
      <Item name="name" label="Tên học viên" rules={[RULES.required]}>
        <TextInput suffix={<SearchOutlined />} />
      </Item>
      <div className="day-picker-field">
        <Item name="reserveDay" label="Ngày bảo lưu" rules={[RULES.required]}>
          <DatePickerInForm />
        </Item>
        <TextInput disabled value="Học kỳ I" />
      </div>
      {/* reason area input */}
      <Item name="reason" label="Lý do" rules={[RULES.required]}>
        <TextInput.TextArea />
      </Item>
      {/* upload field */}
      <UploadField affixNote="Kích thước tệp không vượt quá 250MB" />

      {/* Buttons group */}
      <FormButton.Container>
        <FormButton.CancelButton onClick={hideForm} />
        <FormButton.SaveButton onClick={hideForm} />
      </FormButton.Container>
    </Form>
  );
};
