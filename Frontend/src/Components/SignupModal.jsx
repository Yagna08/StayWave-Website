import React,{useState} from "react";
import { Form, Input, Button, message } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Modal } from "react-bootstrap";
import "../Styles/SignupModal.css";
import axios from "axios";
export default function SignupModal(props) {
  const [password, setPassword] = useState('')
  const onFinish = async (values) => {
    const regex =/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[^\s"'<>]{8,}$/;
    console.log(regex.test(password));
    try {
      if(regex.test(password)){
        const res = await axios.post("https://staywave-backend.onrender.com/api/user/register", values);
      if (res.data.success) {
        message.success("Success");
        props.openLogin();
      } else {
        message.error(res.data.message);
      }}
      else{
        message.warning('Not Strong Password')
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <>
      <Modal
        show={props.isOpen}
        id="signupModal"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <h4>Sign Up</h4>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            onClick={props.toggle}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email id!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              onChange={(e)=>{setPassword(e.target.value)}}
              rules={[
                {
                  required: true,
                  message: "Please enter your Password!",
                },
              ]}
              
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
                visibilityToggle
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            <Form.Item>
              <div id="signupButton">
                <Button
                  type="submit"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Sign up
                </Button>
              </div>
            </Form.Item>
          </Form>
          <div className="user">
            <button onClick={props.openLogin} className="newUser">
              Already User? Login
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}