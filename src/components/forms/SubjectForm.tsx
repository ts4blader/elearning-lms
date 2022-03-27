import React from "react";
import { Form, Space, Button, Divider } from "antd";
import TextInput from "@components/TextInput";
import { SelectInForm as Select } from "@components/Select";
import { RULES } from "@constants/rules";

type Props = {
  onCancel: () => void;
};

const SubjectForm = ({ onCancel }: Props) => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Form name="add-subject" onFinish={handleSubmit} className="subject-form">
      <div className="form-top">
        {/* choose group */}
        <Form.Item
          label="Tổ bộ môn"
          name="group"
          rules={[{ required: true, message: "Xin hãy chọn tổ bộ môn" }]}
        >
          <Select data={["Social", "Sience"]} keyAffix="group" />
        </Form.Item>
        {/* name input */}
        <Form.Item
          label="Tên môn học"
          name="name"
          rules={[{ required: true, message: "Xin hãy nhập tên môn học" }]}
        >
          <TextInput />
        </Form.Item>
        {/* id input */}
        <Form.Item
          label="Mã môn học"
          name="id"
          className="short-item"
          rules={[{ required: true, message: "Xin hãy nhập mã môn học" }]}
        >
          <TextInput />
        </Form.Item>
        {/* choose type */}
        <Form.Item
          label="Loại môn học"
          name="type"
          rules={[{ required: true, message: "Xin hãy chọn loại môn học" }]}
        >
          <Select data={["Required", "Optional"]} keyAffix="subject-type" />
        </Form.Item>
      </div>

      <Divider />

      <div className="form-bottom">
        <div className="title">Số tiết/học kỳ</div>
        <Space className="semester-list">
          {/* first semester  */}
          <Form.Item name="first" label="Học kỳ 1" rules={[RULES.number]}>
            <TextInput />
          </Form.Item>
          {/* secondary semester  */}
          <Form.Item
            name="secondary"
            rules={[{ pattern: /[1-9][\d]*/g, message: "Nhập một số" }]}
            label="Học kỳ 2"
          >
            <TextInput />
          </Form.Item>
        </Space>
      </div>

      {/* Modal buttons */}
      <Space className="btn-grp" size={40}>
        <Button className="cancel-btn" onClick={onCancel}>
          Hủy
        </Button>
        <Form.Item>
          <Button className="save-btn" type="primary" htmlType="submit">
            Lưu
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default SubjectForm;
