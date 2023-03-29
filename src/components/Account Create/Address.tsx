import React, {useState} from 'react'
import { Button, Form, Input, Radio, Upload } from 'antd';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const Address = ({next,prev,setCreateAccountReterive}:any) => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');
    const onFinish = (values: any) => {
      console.log('Success:', values);
      next();
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
      <div className='flex flex-col justify-center h-[32rem] scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
      <h4 className='mb-2'>Address:</h4>

      <div className='flex flex-row'>

      <div className='mx-4'>

        <h3 className='mb-2'>Residential Address:</h3>
        <Form.Item label="Sub City" name="residentialSubCity">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Woreda" name="residentialWoreda">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Kebele" name="residentialKebele">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="H.Number" name="residentialHouseNumber">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="P.O.Box" name="residentialPOBox">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Phone" name="residentialPhone">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Email" name="residentialEmail">
          <Input placeholder="" />
        </Form.Item>

        </div>

        <div className='mx-4'>

        <h3 className='mb-2'>Bussiness Address:</h3>
        <Form.Item label="Sub City" name="bussinessSubCity">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Woreda" name="bussinessWoreda">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Kebele" name="bussinessKebele">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="H.Number" name="bussinessHouseNumber">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="P.O.Box" name="bussinessPOBox">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Phone" name="bussinessPhone">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Email" name="bussinessEmail">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Fax" name="bussinessFax">
          <Input placeholder="" />
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
