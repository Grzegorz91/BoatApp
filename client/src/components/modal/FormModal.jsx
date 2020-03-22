import React from "react";
import { Form, Input, Button } from "antd";

const FormModal = ({ addBoatToList }) => {
  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={addBoatToList}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input your description!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          ADD BOAT
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormModal;
