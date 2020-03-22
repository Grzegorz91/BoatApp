import React, { Fragment } from "react";
import { Form, Input, Button, Typography } from "antd";
import { formItemLayout, tailFormItemLayout } from "../../utils/registerSize";
import "./registerUser.css";

const { Title } = Typography;

const RegisterLayout = ({ changeUrl, registerUser }) => {
  const [form] = Form.useForm();

  return (
    <Fragment>
      <Title className="register-title">Register</Title>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={registerUser}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86"
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!"
            },
            {
              required: true,
              message: "Please input your E-mail!"
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!"
            }
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!"
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              }
            })
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
          <Button
            type="primary"
            onClick={changeUrl}
            className="redirect-button"
          >
            Go To Login
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default RegisterLayout;
