import React, { useRef } from "react";
import { Form, Button } from "antd";
import { UserOutlined, LeftOutlined } from "@ant-design/icons";
import TextInput from "@components/TextInput";

type LayoutType = Parameters<typeof Form>[0]["layout"];
type Props = {
  switchLayout: () => void;
};

const ForgotPassForm = ({ switchLayout }: Props) => {
  const [form] = Form.useForm();
  const formLayout = useRef<LayoutType>("vertical");

  const handleFinish = () => {};

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Cấp lại mật khẩu</h2>
      <Form
        className="forgot-password-form"
        onFinish={handleFinish}
        layout={formLayout.current}
        form={form}
        requiredMark={false}
      >
        {/* Username */}
        <Form.Item
          label="Tên đăng nhập"
          name="username"
          rules={[{ required: true, message: "Xin hãy điền tên đăng nhập!" }]}
        >
          <TextInput prefix={<UserOutlined />} maxLength={50} size="large" />
        </Form.Item>
        {/* Confirm code */}
        <Form.Item
          className="confirm-code-field"
          label="Mã xác thực"
          name="confirm"
          rules={[{ required: true, message: "Xin hãy điền mã xác thực" }]}
        >
          <TextInput type="text" maxLength={20} />
        </Form.Item>
        <Form.Item>
          <div
            className="back-to-login bottom-field"
            onClick={() => switchLayout()}
          >
            <LeftOutlined /> Quay lại trang chủ
          </div>
        </Form.Item>
        <Form.Item className="submit-field">
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            className="login-form-submit"
            block
          >
            Cấp lại mật khẩu
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgotPassForm;
