import React, { useEffect } from 'react'
import Loginvector from '../images/vectorforlogin.jpg'
import { useForm } from 'react-hook-form'
import { Button, Input, Form, notification } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { RiLockPasswordLine } from 'react-icons/ri'
import axios from 'axios';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface loginprofile {
  username:string;
  password:string;
}

const Login = ({setlog, setCreateAccount}:any) => {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
  const {register, handleSubmit} = useForm<loginprofile>();
  const onFinish = async (values: any) => {
    console.log('Success:', values);
    try {
      const response = await axios.post('http://automated.blackneb.com/api/token/', values, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      await console.log(response.data);
      const res =  await axios.post('http://automated.blackneb.com/api/ais/login', values, {
        headers: {
          Authorization: `Bearer ${response.data.access}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(res.data)
      console.log(res.data[0].username);
      if(res.data[0].status === "pass"){
        setlog(true);
      }
      else{
        console.log("login error");
      }
    } catch (error) {
      openNotificationWithIcon('error');
      console.error(error);
    }
    //setlog(true);
    
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const onSubmit = handleSubmit( async ()=>{
    
  })
  useEffect(() => {

    const fetchData = async () => {
     
    };

    fetchData();
  }, [])
  return (
    <div>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img src={Loginvector} alt="" className="w-full h-full object-cover"/>
        </div>
        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>
            <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
              >
                <div>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input name='username' style={{height:40}} prefix={<UserOutlined/>}/>
                </Form.Item>
                
                
              </div>

              <div className="mt-4">
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password name='password' style={{height:40}} prefix={<RiLockPasswordLine/>}/>
              </Form.Item>
              </div>

              <div className="text-right mt-2">
                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
              </div>                
              <Button htmlType="submit"className="w-full h-10 block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 hover:text-white text-white text font-semibold rounded-lg mt-6">Log in</Button>
              </Form>


            <hr className="my-6 border-gray-300 w-full"/>
            <div className='flex flex-row justify-between'>
              <p className="">Need an account?</p>
              <Button type='link' onClick={()=>{setCreateAccount(true)}} className="text-blue-500 hover:text-blue-700 font-semibold">Create an account</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
