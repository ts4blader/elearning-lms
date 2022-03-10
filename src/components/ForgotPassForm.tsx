import React, { useRef, useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LeftOutlined } from "@ant-design/icons";

type LayoutType = Parameters<typeof Form>[0]["layout"];
type Props = {
  switchLayout: () => void;
};

const ForgotPassForm = ({ switchLayout }: Props) => {
  const [form] = Form.useForm();
  const formLayout = useRef<LayoutType>("vertical");

  const [username, setUsername] = useState("");
  const [confirmCode, setConfirmCode] = useState("");

  const onLogin = () => {};
  return (
    <div className="form-wrapper">
      <h2 className="form-title">Cấp lại mật khẩu</h2>
      <Form
        className="forgot-password-form"
        onFinish={onLogin}
        layout={formLayout.current}
        form={form}
        requiredMark={false}
      >
        {/* Username */}
        <Form.Item
          data-length={username.length !== 0}
          label="Tên đăng nhập"
          name="username"
          rules={[{ required: true, message: "Xin hãy điền tên đăng nhập!" }]}
        >
          <Input
            prefix={<UserOutlined className="icon-user" />}
            maxLength={50}
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </Form.Item>
        {/* Confirm code */}
        <Form.Item
          data-length={confirmCode.length !== 0}
          className="confirm-code-field"
          label="Mã xác thực"
          name="confirm"
          rules={[{ required: true, message: "Xin hãy điền mã xác thực" }]}
        >
          <Input
            type="text"
            maxLength={20}
            value={confirmCode}
            onChange={({ target }) => setConfirmCode(target.value)}
          />
        </Form.Item>
        <Form.Item>
          <div
            className="back-to-login bottom-field"
            onClick={() => switchLayout()}
          >
            <LeftOutlined /> Quay lại trang chủ
          </div>
        </Form.Item>
        <Form.Item>
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
