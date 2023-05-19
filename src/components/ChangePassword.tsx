import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import { Form, Input, Button } from 'antd';

const ChangePassword = () => {
    const dispatch = useDispatch();
   const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Change Password",path:"/profile"},
  ]

    const onFinishPassword = (values: any) => {
        console.log('Success:', values);
      };
      
      const onFinishFailedPassword = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
      useEffect(() => {
        dispatch(add_breadcrumb(breadcrumb));
      },[])
  return (
    <div className='mx-4 my-4 flex justify-center'>
      <div className='flex flex-col justify-center w-96'>
        <div className='mt-4'>
          <Form
            name="Address"
            //initialValues={AddressDefaultValue}
            onFinish={onFinishPassword}
            onFinishFailed={onFinishFailedPassword}
            autoComplete="off"
            labelCol={{ flex: '140px', span: 30 }}
            labelAlign="left"
            labelWrap
            colon={false}
            >
              <div className='flex flex-col'>
              <Form.Item label="Old Password" name="oldPassword" rules={[{ required: true, message: 'Please Enter Old Password!' }]}>
                <Input placeholder=""/>
              </Form.Item>
              <Form.Item label="New Password" name="newPassword" rules={[{ required: true, message: 'Please Enter New Password!' }]}>
                <Input placeholder=""/>
              </Form.Item>
              <Form.Item label="Confirm Password" name="confirmPassword" rules={[{ required: true, message: 'Please Confirm Password!' }]}>
                <Input placeholder=""/>
              </Form.Item>
              </div>
              <div className='flex flex-row justify-center'>
                <Button style={{ margin: '0 8px' }} type="default" htmlType="submit">
                  Update Password
                </Button>
              </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
