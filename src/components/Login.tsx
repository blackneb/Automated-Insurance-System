import React, { useEffect } from 'react'
import Loginvector from '../images/vectorforlogin.jpg'
import { useForm } from 'react-hook-form'
import { Button, Input } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { RiLockPasswordLine } from 'react-icons/ri'
import axios from 'axios';

interface loginprofile {
  username:string;
  password:string;
}

const Login = ({setlog, setCreateAccount}:any) => {
  const {register, handleSubmit} = useForm<loginprofile>();
  const onSubmit = handleSubmit(()=>{
    setlog(true);
  })
  useEffect(() => {
    axios.get("http://localhost:8000").then((response) => {
      console.log(response.data);
    })
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
            <form className="mt-6" onSubmit={onSubmit}>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <Input style={{height:40}} prefix={<UserOutlined/>}/>
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <Input.Password style={{height:40}} prefix={<RiLockPasswordLine/>}/>
              </div>

              <div className="text-right mt-2">
                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
              </div>

              <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                    px-4 py-3 mt-6">Log In</button>
            </form>

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
