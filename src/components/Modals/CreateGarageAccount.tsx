import React from 'react'
import { Button, Form, Input, Upload,notification} from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios'


const CreateGarageAccount = () => {
    const pid = useSelector((state:any) => state.userType.expertID)
    const onFinish = async (values: any) => {
        console.log('Success:', values);
        const submittedData = {
            expertId:pid,
            username: values.username,
            password:values.password,
            name:values.name,
            email:values.name,
            phone:values.phone,
            address:values.address
        }
        console.log(JSON.stringify(submittedData,null,2))
        await axios.post("http://ais.blackneb.com/api/ais/creategarageaccount", submittedData).then((response:any) => {
            console.log(response.data);
            if(response.data[0].status === "created"){
                notification.success({
                  message: 'success',
                  description: 'garage account created successfully',
                });
              }
              else{
                notification.error({
                    message: 'error',
                    description: 'garage account create failed',
                  });
              }
        })
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
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input name!' }]}
           >
            <Input />
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input email!' }]}
           >
            <Input />
          </Form.Item>
          <Form.Item
                label="Phone"
                name="phone"
                rules={[{ required: true, message: 'Please input phone!' }]}
           >
            <Input />
          </Form.Item>
          <Form.Item
                label="Address"
                name="address"
                rules={[{ required: true, message: 'Please input Address!' }]}
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

export default CreateGarageAccount