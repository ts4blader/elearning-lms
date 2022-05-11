import React, { useState } from "react";
import { Form, Space, Divider, Checkbox } from "antd";
import TextInput from "@components/TextInput";
import Select, { SelectInForm } from "@components/Select";
import { FormButton, FormList, FormItem } from "@components/Forms";

type Props = {
  onCancel: () => void;
};

export const ClassForm = ({ onCancel }: Props) => {
  const [extend, setExtend] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const handleSubmit = (values: any) => {
    console.log(values, selected);
  };

  return (
    <Form name="add-class" onFinish={handleSubmit} className="class-form">
      <div className="form-top">
        <FormItem.Title>Thông tin chung</FormItem.Title>
        {/* choose group */}
        <Space size={10} className="semester-group-selection">
          <FormItem
            className="semester-select"
            label="Niên khóa"
            name="semester"
            initialValue="2021-2022"
          >
            <Select
              data={["2021-2022", "2021-2023"]}
              keyAffix="semester-select"
            />
          </FormItem>
          <FormItem
            label="Khoa - Khối"
            name="grade"
            className="group-select"
            rules={[{ required: true, message: "Chọn khoa khối" }]}
          >
            <SelectInForm
              data={["Khoi 6", "Khoi 7", "Khoi 8"]}
              keyAffix="grade-select"
            />
          </FormItem>
        </Space>
        {/* name input */}
        <FormItem
          label="Tên lớp"
          name="name"
          rules={[{ required: true, message: "Xin hãy nhập tên lớp" }]}
        >
          <TextInput />
        </FormItem>
        {/* amount input */}
        <FormItem
          label="Số lượng học viên"
          name="amount"
          className="short-item"
          rules={[
            { required: true, message: "Xin hãy nhập số lượng" },
            { pattern: /[1-9][\d]*/g, message: "Xin hãy nhập số" },
          ]}
        >
          <TextInput />
        </FormItem>
        {/* choose type */}
        <FormItem
          label="Phân loại lớp"
          name="type"
          rules={[{ required: true, message: "Xin hãy chọn phân loại lớp" }]}
        >
          <SelectInForm data={["Basic", "Advanced"]} keyAffix="type-select" />
        </FormItem>
        {/* choose leader */}
        <FormItem
          label="Giáo viên chủ nhiệm"
          name="leader"
          rules={[{ required: true, message: "Xin hãy chọn giáo viên" }]}
        >
          <SelectInForm data={["Thu", "Ha", "An"]} keyAffix="leader-selector" />
        </FormItem>
        {/* description text area */}
        <FormItem label="Mô tả" name="description" initialValue="">
          <TextInput.TextArea />
        </FormItem>
      </div>

      <Divider />

      <div className="form-bottom">
        <FormItem.Title>Danh sách môn học</FormItem.Title>
        <Space size={10} className="extend-data">
          <Checkbox onChange={({ target }) => setExtend(target.checked)}>
            Kế thừa dữ liệu:
          </Checkbox>
          <Select
            data={["2021-2022", "2022-2023"]}
            keyAffix="extend-semester-selector"
            disabled={!extend}
            placeholder="Niên khóa"
          />
        </Space>
        {/* Form list */}
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

export default ClassForm;
