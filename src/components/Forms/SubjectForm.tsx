import React from "react";
import { Form, Space, Divider } from "antd";
import TextInput from "@components/TextInput";
import { SelectInForm as Select } from "@components/Select";
import { RULES } from "@utils/rules";
import { FormButton, FormItem } from "@components/Forms";

type Props = {
  onCancel: () => void;
};

export const SubjectForm = ({ onCancel }: Props) => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Form name="add-subject" onFinish={handleSubmit} className="subject-form">
      <div className="form-top">
        {/* choose group */}
        <FormItem
          label="Tổ bộ môn"
          name="group"
          rules={[{ required: true, message: "Xin hãy chọn tổ bộ môn" }]}
        >
          <Select data={["Social", "Sience"]} keyAffix="group" />
        </FormItem>
        {/* name input */}
        <FormItem
          label="Tên môn học"
          name="name"
          rules={[{ required: true, message: "Xin hãy nhập tên môn học" }]}
        >
          <TextInput />
        </FormItem>
        {/* id input */}
        <FormItem
          label="Mã môn học"
          name="id"
          className="short-item"
          rules={[{ required: true, message: "Xin hãy nhập mã môn học" }]}
        >
          <TextInput />
        </FormItem>
        {/* choose type */}
        <FormItem
          label="Loại môn học"
          name="type"
          rules={[{ required: true, message: "Xin hãy chọn loại môn học" }]}
        >
          <Select data={["Required", "Optional"]} keyAffix="subject-type" />
        </FormItem>
      </div>

      <Divider />

      <div className="form-bottom">
        <FormItem.Title>Số tiết/học kỳ</FormItem.Title>
        <Space className="semester-list">
          {/* first semester  */}
          <FormItem name="first" label="Học kỳ 1" rules={[RULES.number]}>
            <TextInput />
          </FormItem>
          {/* secondary semester  */}
          <FormItem
            name="secondary"
            rules={[{ pattern: /[1-9][\d]*/g, message: "Nhập một số" }]}
            label="Học kỳ 2"
          >
            <TextInput />
          </FormItem>
        </Space>
      </div>

      {/* Modal buttons */}
      <FormButton.Container>
        <FormButton.CancelButton onClick={onCancel} />
        <FormButton.SaveButton onClick={onCancel} />
      </FormButton.Container>
    </Form>
  );
};

export default SubjectForm;
