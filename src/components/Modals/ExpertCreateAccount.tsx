import React from 'react'
import { Button, Form, Input, Upload} from 'antd';


const ExpertCreateAccount = () => {
    const onFinish = async (values: any) => {
        console.log('Success:', values);
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div className='flex justify-center'>
      <Form
        name="basic"
        labelCol={{ flex: '100px', span: 30 }}
        labelAlign="left"
        labelWrap
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className='flex flex-col'>
          <Form.Item
                label="First Name"
                name="firstName"
                rules={[{ required: true, message: 'Please input expert first name!' }]}
           >
            <Input />
          </Form.Item>
          <Form.Item
                label="Last Name"
                name="lastName"
                rules={[{ required: true, message: 'Please input expert last name!' }]}
           >
            <Input />
          </Form.Item>
          <Form.Item
            label="Username"
            name="userName"
            rules={[{ required: true, message: 'Please input expert username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
                label="Profile Pic"
                name="profilePic"
                rules={[{ required: true, message: 'Please input expert image!' }]}
           >
            <Input />
          </Form.Item>
          <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input expert email!' }]}
           >
            <Input />
          </Form.Item>
          <Form.Item
                label="Phone"
                name="phone"
                rules={[{ required: true, message: 'Please input expert phone!' }]}
           >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please generate password!' }]}
          >
            <Input.Password/>
          </Form.Item>
        </div>
        <div className='flex flex-row justify-center'>
          <Button style={{ margin: '0 8px' }} type="default" htmlType="submit">
            Create Account
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default ExpertCreateAccount
