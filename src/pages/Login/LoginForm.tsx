import React, { useRef } from "react";
import { Form, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import TextInput from "@components/TextInput";

type LayoutType = Parameters<typeof Form>[0]["layout"];
type Props = {
  switchLayout: () => void;
};

const LoginForm = ({ switchLayout }: Props) => {
  const [form] = Form.useForm();
  const formLayout = useRef<LayoutType>("vertical");

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
        >
          <TextInput
            prefix={<UserOutlined />}
            maxLength={50}
          />
        </Form.Item>
        {/* Password */}
        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Xin hãy điền mật khẩu!" }]}
        >
          <TextInput.Password
            prefix={<LockOutlined />}
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
        <Form.Item className="submit-field">
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
