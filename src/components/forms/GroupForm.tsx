import React from "react";
import { Form, Divider, Space, Button } from "antd";
import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";
import TextInput from "@components/TextInput";
import { SelectInForm as Select } from "@components/Select";

type Props = {
  onCancel: () => void;
};

const GroupForm = ({ onCancel }: Props) => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Form name="add-group" onFinish={handleSubmit} className="group-form">
      <div className="form-top">
        <Form.Item
          label="Tên tổ - bộ môn"
          name="name"
          rules={[{ required: true, message: "Xin hãy nhập tên tổ" }]}
        >
          <TextInput />
        </Form.Item>
        <Form.Item
          label="Tên trưởng tổ - bộ môn"
          name="leader"
          rules={[{ required: true, message: "Xin hãy chọn tên trưởng tổ" }]}
        >
          <Select data={["Thu", "Ha", "An"]} keyAffix="leader" />
        </Form.Item>
      </div>

      <Divider />
      {/* Subject list */}
      <div className="subject-list-wrapper form-bottom">
        <div className="title">Danh sách môn học</div>
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
                      <Select
                        size="middle"
                        data={["Toan", "Ngu van"]}
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

export default GroupForm;
