import React, {useState} from 'react'
import { Button, Form, Input, Radio, Upload } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { add_address } from '../../redux/Actions';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const Address = ({next,prev,setCreateAccountReterive}:any) => {
    const addressDefaultValue = useSelector((state:any) => state.address);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');
    const onFinish = (values: any) => {
      console.log('Success:', values);
      dispatch(add_address(values));
      next();
    };
    
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
  return (
    <div className='flex justify-center my-4'>
      <Form
      name="basic"
      labelCol={{ flex: '100px', span: 30 }}
      labelAlign="left"
      labelWrap
      initialValues={addressDefaultValue}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className='flex flex-col justify-center h-[32rem] scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
      <h4 className='mb-2'>Address:</h4>

      <div className='flex flex-row'>

      <div className='mx-4'>

        <h3 className='mb-2'>Residential Address:</h3>
        <Form.Item label="Sub City" name="residentialSubCity" rules={[{ required: true, message: 'Please input Residential Subcity!' }]}>
          <Input placeholder=""/>
        </Form.Item>
        <Form.Item label="Woreda" name="residentialWoreda" rules={[{ required: true, message: 'Please input Residential Woreda!' }]}>
          <Input placeholder=""/>
        </Form.Item>
        <Form.Item label="Kebele" name="residentialKebele" rules={[{ required: true, message: 'Please input Residential kebele!' }]}>
          <Input placeholder=""/>
        </Form.Item>
        <Form.Item label="H.Number" name="residentialHouseNumber" rules={[{ required: true, message: 'Please input Residential House Number!' }]}>
          <Input placeholder=""/>
        </Form.Item>
        <Form.Item label="P.O.Box" name="residentialPOBox" rules={[{ required: true, message: 'Please input Residential P.O.Box!' }]}>
          <Input placeholder=""/>
        </Form.Item>
        <Form.Item label="Phone" name="residentialPhone" rules={[{pattern: /^[\+]?[0-9]{3}[-\s\.]?[0-9]{9}$/,message: 'Please enter a valid Phone Number'},{ required: true, message: 'Please input Residential Phone!' }]}>
          <Input placeholder="+251..."/>
        </Form.Item>
        <Form.Item label="Email" name="residentialEmail" rules={[{type: 'email',message: 'The input is not valid E-mail!'},{ required: true, message: 'Please input Residential Email!' }]}>
          <Input placeholder=""/>
        </Form.Item>

        </div>

        <div className='mx-4'>

        <h3 className='mb-2'>Bussiness Address:</h3>
        <Form.Item label="Sub City" name="bussinessSubCity" rules={[{ required: true, message: 'Please input Bussiness Subcity!' }]}>
          <Input placeholder=""/>
        </Form.Item>
        <Form.Item label="Woreda" name="bussinessWoreda" rules={[{ required: true, message: 'Please input Bussiness Woreda!' }]}>
          <Input placeholder=""/>
        </Form.Item>
        <Form.Item label="Kebele" name="bussinessKebele" rules={[{ required: true, message: 'Please input Bussiness Kebele!' }]}>
          <Input placeholder=""/>
        </Form.Item>
        <Form.Item label="H.Number" name="bussinessHouseNumber" rules={[{ required: true, message: 'Please input Bussiness House Number!' }]}>
          <Input placeholder=""/>
        </Form.Item>
        <Form.Item label="P.O.Box" name="bussinessPOBox" rules={[{ required: true, message: 'Please input Bussiness POBox!' }]}>
          <Input placeholder=""/>
        </Form.Item>
        <Form.Item label="Phone" name="bussinessPhone" rules={[{pattern: /^[\+]?[0-9]{3}[-\s\.]?[0-9]{9}$/,message: 'Please enter a valid Phone Number'},{ required: true, message: 'Please input Bussiness Phone!' }]}>
          <Input placeholder="+251..."/>
        </Form.Item>
        <Form.Item label="Email" name="bussinessEmail" rules={[{type: 'email',message: 'The input is not valid E-mail!'},{ required: true, message: 'Please input Bussiness Email!' }]}>
          <Input placeholder=""/>
        </Form.Item>
        <Form.Item label="Fax" name="bussinessFax" rules={[{ required: true, message: 'Please input Bussiness Fax!' }]}>
          <Input placeholder=""/>
        </Form.Item>

        </div>
      </div>
      </div>
      <div className='flex flex-row justify-center'>
        <Button style={{ margin: '0 8px' }} type="default" htmlType="submit">
          Next
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

export default Address
