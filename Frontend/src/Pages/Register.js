import React,{useState} from 'react'
import '../Styles/Login.css'
import { Link, useNavigate } from "react-router-dom";
// import {
//   UserOutlined,
//   LockOutlined,
//   EyeTwoTone,
//   EyeInvisibleOutlined,
// } from "@ant-design/icons";
import { Form, Input, message } from "antd";
// import { Modal } from "react-bootstrap";
import "../Styles/SignupModal.css";
import {useDispatch} from 'react-redux';

// --temporary
// import { showLoading, hideLoading } from '../Redux/features/alertSlice';

import axios from "axios";
const Register = () => {
  document.title='StayWave-Signup'
  const navigate= useNavigate()
  const dispatch = useDispatch()
  // const [show, setShow] = useState(true);
  const onFinish= async (values)=>
    {
      try {
        // dispatch(showLoading())
        const res = await axios.post('https://stay-wave-website-backend.vercel.app/api/user/register', values)
        // dispatch(hideLoading())
        if(res.data.success){
          message.success('Success')
          navigate('/login')
        }
        else{
          message.error(res.data.message)
        }
      } catch (error) {
        // dispatch(hideLoading())
        console.log(error)
        message.error('something went wrong')
      }
    }
  return (
    <>
  <div className='form-container'>
   <Form layout='vertical' onFinish={onFinish} className='form-card'>
   <h3>Register</h3>
   <Form.Item label="Username" name="name">
      <Input type='text' required/>
    </Form.Item>
    <Form.Item label="Email" name="email">
      <Input type='email' required/>
    </Form.Item>
    <Form.Item label="Password" name="password">
      <Input type='password' required/>
    </Form.Item>
    <div className='container'>
      <Link to='/login'>Already a user </Link>
    </div>
    <div className='container'>
    <button type='submit' className='btn btn-primary'>
      Login
    </button>
    </div>
   </Form>
   {/* <Modal
            show={show}
            id='signupModal'
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <h4>
                    Sign Up
                </h4>
                <button type="button" class="btn-close" aria-label="Close" onClick={()=>setShow(false)}></button>
            </Modal.Header>
            <Modal.Body>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }
                  }
                  onFinish={onFinish}
                >
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
                        <div id="signupButton">
                            <Button type="primary" htmlType="submit" className="login-form-button" >
                                Sign up
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </Modal.Body>

        </Modal>*/}
   </div> 
    </>
  )
}

export default Register