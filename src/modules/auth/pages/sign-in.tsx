
// import { useSignInMutation } from "../hooks/mutation"

// const SignIn = ()=> {
//   const {mutate} = useSignInMutation()
//   const save = ()=> {
//     const payload = {
//       phone_number: "565656",
//       password: "565656"
//     }
//     mutate(payload)
//   } 
//   return (
//     <>
//       <h1>Sign-In</h1>
//       <button onClick={save}>Save</button>
//     </>

//   )
// }

// export default SignIn


import React from 'react';
import type { FormProps } from 'antd';
import { Button, Typography, Form, Input } from 'antd';
import { useSignInMutation } from '../hooks/mutation'; 
import { SignIn } from '../types';
import bgImg from "../../../assets/bg.jpg";
import { NavLink } from 'react-router-dom';

const { Title, Text } = Typography;

const Index: React.FC = () => {
  const {mutate} = useSignInMutation()


  const onFinish: FormProps<SignIn>['onFinish'] = async (values) => {
    const payload: SignIn = {
      phone_number: values.phone_number,
      password: values.password, 
    }
    console.log('Success:', values);
    mutate(payload)
    
  };
  
  const onFinishFailed: FormProps<SignIn>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <div style={{ display: 'flex', height: '100vh', alignItems: 'center',padding: "0px" }}>
      <div style={{ width: "50%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={bgImg} alt="bg-img" />
      </div>
      <div style={{width: "30%", display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: "150px" }}>
        <Title level={2}  className="text-center font-bold fs-1">Login</Title>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Phone number"
            name="phone_number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "100%",
                backgroundColor: "#d35400",
                borderColor: "#d35400",
                height: "40px",
                fontSize: "16px",
              }}
            >
              Login
            </Button>
          </Form.Item>

          <div style={{ textAlign: "center" }}>
            <Text>Don’t you have an account? </Text>
            <NavLink to="/sign-up">
              <Text strong style={{ color: "#d35400" }}>
                Register
              </Text>
            </NavLink>
          </div>
        </Form>
      </div>
    </div>  
  )
};

export default Index;
