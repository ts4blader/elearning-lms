import React, { useRef, useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

type LayoutType = Parameters<typeof Form>[0]["layout"];
type Props = {
  switchLayout: () => void;
};

const LoginForm = ({ switchLayout }: Props) => {
  const [form] = Form.useForm();
  const formLayout = useRef<LayoutType>("vertical");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const onLogin = (values: any) => {
    console.table(values);
    history.push("/dashboard");
    form.resetFields();
  };
  return (
    <div className="form-wrapper">
      <h2 className="form-title">Đăng nhập</h2>
      <Form
        className="login-form"
        onFinish={onLogin}
        layout={formLayout.current}
        form={form}
        requiredMark={false}
      >
        {/* Username */}
        <Form.Item
          label="Tên đăng nhập"
          name="username"
          rules={[{ required: true, message: "Xin hãy điền tên đăng nhập!" }]}
          data-length={username.length !== 0}
        >
          <Input
            prefix={<UserOutlined className="icon-user" />}
            maxLength={50}
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </Form.Item>
        {/* Password */}
        <Form.Item
          data-length={password.length !== 0}
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Xin hãy điền mật khẩu!" }]}
        >
          <Input.Password
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            prefix={<LockOutlined className="icon-password" />}
            maxLength={20}
          />
        </Form.Item>
        <Form.Item>
          <div
            className="forgot-password bottom-field"
            onClick={() => switchLayout()}
          >
            Quên mật khẩu?
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
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
