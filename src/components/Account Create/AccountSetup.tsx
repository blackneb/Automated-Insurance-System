import React from 'react'
import { Button, Checkbox, Form, Input, Upload} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { add_account_set_up } from '../../redux/Actions';

const AccountSetup = ({prev,setCreateAccountReterive}:any) => {
  const dispatch = useDispatch();
  const Done = () => {
    
  }

  const onFinish = (values: any) => {
    console.log('Success:', values);
    dispatch(add_account_set_up(values));
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='flex justify-center my-4'>
       <Form
        name="basic"
        labelCol={{ span: 30 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className='flex flex-col h-[32rem]'>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
        </div>
        <div className='flex flex-row justify-center'>
          <Button style={{ margin: '0 8px' }} type="default" htmlType="submit" onClick={() => Done()}>
            Done
          </Button>
          <Button style={{ margin: '0 8px' }} type="default" onClick={() => prev()}>
            Prev
          </Button>
          <Button style={{ margin: '0 8px' }} onClick={() => { setCreateAccountReterive(false) }}>
            Back to Login
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default AccountSetup
