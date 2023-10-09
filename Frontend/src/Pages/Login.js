import React, { useState } from "react";
import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { showLoading, hideLoading } from "../Redux/features/alertSlice";
import '../'
import {
  UserOutlined,
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Form, Input, message, Button } from "antd";
import { Modal } from "react-bootstrap";
import "../Styles/LoginModal.css";
import axios from "axios";
const Login = () => {
  document.title='StayWave-Login'
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const onFinish = async (values) => {
    try {
      // dispatch(showLoading());
      const res = await axios.post("/api/user/login", values);
      // dispatch(hideLoading());
      if (res.data.success) {
        console.log(res.data.userid,res.data.token)
        console.log('bbb')
        localStorage.setItem("token", res.data.token);
        message.success("Success");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      // dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <>
      <div className="form-container">
        {/* <Form layout='vertical' onFinish={onFinish} className='form-card'>
   <h3>Login</h3>
    <Form.Item label="Email" name="email">
      <Input type='email' required/>
    </Form.Item>
    <Form.Item label="Password" name="password">
      <Input type='password' required/>
    </Form.Item>
    <div className='container'>
      <Link to='/register'>Already Register</Link>
    </div>
    <div className='container'>
    <button type='submit' className='btn btn-primary'>
      Login
    </button>
    </div>
   </Form> */}
        login
        <Modal
          show={show}
          id="loginModal"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <h4>Log In</h4>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={()=>setShow(false)}
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
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
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
                <button id="newUser">
                  <Link to="/register">Already Register</Link>
                </button>
              </Form.Item>
              <Form.Item>
                <div id="loginButton">
                  <Button
                    type="submit"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Log in
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Login;
