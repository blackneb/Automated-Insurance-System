import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Upload,notification} from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios'


const CreateGarageAccount = () => {
    const pid = useSelector((state:any) => state.userType.expertID)
    const [password, setPassword] = useState("");
    const onFinish = async (values: any) => {
        console.log('Success:', values);
        const submittedData = {
            expertId:pid,
            username: values.username,
            password:password,
            name:values.name,
            email:values.name,
            phone:values.phone,
            address:values.address
        }
        console.log(JSON.stringify(submittedData,null,2))
        const sendEmail = {
          email:values.email,
          title:"Traffic Account Create",
          message:`your user name is ${values.username} and password is ${password}`
        }
        axios.post("https://ais.blackneb.com/api/ais/sendemail",sendEmail).then((response) => {
          console.log(response.data);
        })
        await axios.post("https://ais.blackneb.com/api/ais/creategarageaccount", submittedData).then((response:any) => {
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
      useEffect(() => {
        const passwordLength = 10; 
        const passwordChars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()ABCDEFGHIJKLMOPQRSTUVWXYZ"; // Define characters to be included in the password

        let generatedPassword = "";
        for (let i = 0; i < passwordLength; i++) {
          const randomIndex = Math.floor(Math.random() * passwordChars.length);
          generatedPassword += passwordChars[randomIndex];
        }

        setPassword(generatedPassword);
      }, [])
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