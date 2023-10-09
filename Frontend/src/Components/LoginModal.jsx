import React, { useState } from 'react';
import { Form, Input, Button,message } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { Modal } from 'react-bootstrap';
import '../Styles/LoginModal.css';
import axios from "axios";

export default function LoginModal(props) {
    
    const navigate = useNavigate();
    const onFinish = async (values) => {
      try {
       
          const res = await axios.get("https://staywave-backend.onrender.com/api/user/login", values);
    
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
            localStorage.setItem("userid", res.data.userid);
          message.success("Success");
          props.toggle()
        } else {
          message.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        message.error("something went wrong");
      }
    };
    return (
        <Modal
            show={props.isOpen}
            id='loginModal'
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <h4>
                    Log In
                </h4>
                <button type="button" class="btn-close" aria-label="Close" onClick={props.toggle}></button>
            </Modal.Header>
            <Modal.Body>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your email id!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your Password!',
                            },
                        ]}
                    >   
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="Password"
                            visibilityToggle
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        
                    </Form.Item>
                    <Form.Item>
                        <div id="loginButton">
                            <Button type="submit" htmlType="submit"  className="login-form-button" >
                                Log in
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
                <div className='user'>
                <button onClick={props.openSignUp} className='newUser'>New User? Sign up</button>
                </div>
            </Modal.Body>

        </Modal>

    );
};
