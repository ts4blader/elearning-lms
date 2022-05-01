import React, { useState } from "react";
import { Form, Divider } from "antd";
import TextInput from "@components/TextInput";
import { SelectInForm as Select } from "@components/Select";
import { FormButton, FormList, FormItem } from "@components/Forms";

type Props = {
  onCancel: () => void;
};

export const GroupForm = ({ onCancel }: Props) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSubmit = (values: any) => {
    console.log(values, selected);
  };

  return (
    <Form name="add-group" onFinish={handleSubmit} className="group-form">
      <div className="form-top">
        <FormItem
          label="Tên tổ - bộ môn"
          name="name"
          rules={[{ required: true, message: "Xin hãy nhập tên tổ" }]}
        >
          <TextInput />
        </FormItem>
        <FormItem
          label="Tên trưởng tổ - bộ môn"
          name="leader"
          rules={[{ required: true, message: "Xin hãy chọn tên trưởng tổ" }]}
        >
          <Select data={["Thu", "Ha", "An"]} keyAffix="leader" />
        </FormItem>
      </div>

      <Divider />
      {/* Subject list */}
      <div className="subject-list-wrapper form-bottom">
        <FormItem.Title>Danh sách môn học</FormItem.Title>
        <FormList.Selection onChange={(values) => setSelected(values)} />
      </div>

      {/* Modal buttons */}
      <FormButton.Container>
        <FormButton.CancelButton onClick={onCancel} />
        <FormButton.SaveButton onClick={onCancel} />
      </FormButton.Container>
    </Form>
  );
};

export default GroupForm;
