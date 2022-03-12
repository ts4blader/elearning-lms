import React, { useState } from "react";
import { Form, Input, Select, Space, Button, Divider, Checkbox } from "antd";
import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";

type Props = {
  onCancel: () => void;
};

const ClassForm = ({ onCancel }: Props) => {
  const [extend, setExtend] = useState(false);

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Form name="add-class" onFinish={handleSubmit} className="class-form">
      <div className="form-top">
        <div className="title">Thông tin chung</div>
        {/* choose group */}
        <Space size={10} className="semester-group-selection">
          <Form.Item label="Niên khóa" name="semester" initialValue="2021-2022">
            <Select>
              <Select.Option>2021 - 2022</Select.Option>
              <Select.Option>2021 - 2023</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Khoa - Khối"
            name="grade"
            className="group-select"
            rules={[{ required: true, message: "Chọn khoa khối" }]}
          >
            <Select>
              <Select.Option>Khối 6</Select.Option>
              <Select.Option>Khối 7</Select.Option>
              <Select.Option>Khối 8</Select.Option>
            </Select>
          </Form.Item>
        </Space>
        {/* name input */}
        <Form.Item
          label="Tên lớp"
          name="name"
          rules={[{ required: true, message: "Xin hãy nhập tên lớp" }]}
        >
          <Input />
        </Form.Item>
        {/* amount input */}
        <Form.Item
          label="Số lượng học viên"
          name="amount"
          className="short-item"
          rules={[
            { required: true, message: "Xin hãy nhập số lượng" },
            { pattern: /[1-9][\d]*/g, message: "Xin hãy nhập số" },
          ]}
        >
          <Input />
        </Form.Item>
        {/* choose type */}
        <Form.Item
          label="Phân loại lớp"
          name="type"
          rules={[{ required: true, message: "Xin hãy chọn phân loại lớp" }]}
          initialValue="Basic"
        >
          <Select>
            <Select.Option>Basic</Select.Option>
            <Select.Option>Advance</Select.Option>
          </Select>
        </Form.Item>
        {/* choose leader */}
        <Form.Item
          label="Giáo viên chủ nhiệm"
          name="leader"
          rules={[{ required: true, message: "Xin hãy chọn giáo viên" }]}
          initialValue="Thu"
        >
          <Select>
            <Select.Option>Thu</Select.Option>
            <Select.Option>An</Select.Option>
            <Select.Option>Vinh</Select.Option>
          </Select>
        </Form.Item>
        {/* description text area */}
        <Form.Item label="Mô tả" name="description" initialValue="">
          <Input.TextArea />
        </Form.Item>
      </div>

      <Divider />

      <div className="form-bottom">
        <div className="title">Danh sách môn học</div>
        <Space size={10} className="extend-data">
          <Checkbox onChange={({ target }) => setExtend(target.checked)}>
            Kế thừa dữ liệu:
          </Checkbox>
          <Select disabled={!extend} placeholder="Niên khóa">
            <Select.Option>2021-2022</Select.Option>
            <Select.Option>2021-2023</Select.Option>
            <Select.Option>2021-2024</Select.Option>
          </Select>
        </Space>
        {/* Form list */}
        <Form.List name="subjects">
          {(fields, { add, remove }) => (
            <>
              <div className="list">
                {fields.map(({ key, name, ...rest }) => (
                  <Space key={key} align="center" className="subject-item">
                    <div className="remove-btn" onClick={() => remove(name)}>
                      <MinusCircleFilled />
                    </div>
                    <Form.Item
                      {...rest}
                      name={[name, "name"]}
                      className="subject-select"
                      initialValue="Ngữ văn"
                    >
                      <Select>
                        <Select.Option>Ngữ văn</Select.Option>
                        <Select.Option>Toán</Select.Option>
                      </Select>
                    </Form.Item>
                  </Space>
                ))}
              </div>
              <Form.Item>
                <Button
                  type="link"
                  className="add-btn"
                  onClick={() => add()}
                  block
                  icon={<PlusCircleFilled />}
                >
                  Thêm học kỳ
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
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

export default ClassForm;
