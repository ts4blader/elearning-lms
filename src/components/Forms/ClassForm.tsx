import React, { useState } from "react";
import { Form, Space, Button, Divider, Checkbox } from "antd";
import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";
import TextInput from "@components/TextInput";
import Select, { SelectInForm } from "@components/Select";

type Props = {
  onCancel: () => void;
};

export const ClassForm = ({ onCancel }: Props) => {
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
            <Select
              data={["2021-2022", "2021-2023"]}
              keyAffix="semester-select"
            />
          </Form.Item>
          <Form.Item
            label="Khoa - Khối"
            name="grade"
            className="group-select"
            rules={[{ required: true, message: "Chọn khoa khối" }]}
          >
            <SelectInForm
              data={["Khoi 6", "Khoi 7", "Khoi 8"]}
              keyAffix="grade-select"
            />
          </Form.Item>
        </Space>
        {/* name input */}
        <Form.Item
          label="Tên lớp"
          name="name"
          rules={[{ required: true, message: "Xin hãy nhập tên lớp" }]}
        >
          <TextInput />
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
          <TextInput />
        </Form.Item>
        {/* choose type */}
        <Form.Item
          label="Phân loại lớp"
          name="type"
          rules={[{ required: true, message: "Xin hãy chọn phân loại lớp" }]}
        >
          <SelectInForm data={["Basic", "Advanced"]} keyAffix="type-select" />
        </Form.Item>
        {/* choose leader */}
        <Form.Item
          label="Giáo viên chủ nhiệm"
          name="leader"
          rules={[{ required: true, message: "Xin hãy chọn giáo viên" }]}
        >
          <SelectInForm data={["Thu", "Ha", "An"]} keyAffix="leader-selector" />
        </Form.Item>
        {/* description text area */}
        <Form.Item label="Mô tả" name="description" initialValue="">
          <TextInput.TextArea />
        </Form.Item>
      </div>

      <Divider />

      <div className="form-bottom">
        <div className="title">Danh sách môn học</div>
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
                      <SelectInForm
                        data={["Ngu Van", "Toan"]}
                        keyAffix="subject-selector"
                      />
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
