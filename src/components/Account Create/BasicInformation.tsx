import React, {useState} from 'react'
import { Button, Form, Input, Radio } from 'antd';

type LayoutType = Parameters<typeof Form>[0]['layout'];


const BasicInformation = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');
  return (
    <div className='flex justify-center my-4'>
      <Form
      layout={formLayout}
      form={form}
      initialValues={{ layout: formLayout }}
      style={{ maxWidth: 600 }}
    >
      <Form.Item label="First Name">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Last Name">
        <Input placeholder="" />
      </Form.Item>
      <div className='flex flex-col justify-center'>
      <h4 className='mb-2'>Address:</h4>

      <div className='flex flex-row'>

      <div className='mx-4'>

        <h3 className='mb-2'>Residential Address:</h3>
        <Form.Item label="Sub City">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Woreda">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Kebele">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="H.Number">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="P.O.Box">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Phone">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Email">
          <Input placeholder="" />
        </Form.Item>

        </div>

        <div className='mx-4'>

        <h3 className='mb-2'>Bussiness Address:</h3>
        <Form.Item label="Sub City">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Woreda">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Kebele">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="H.Number">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="P.O.Box">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Phone">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Email">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Fax">
          <Input placeholder="" />
        </Form.Item>

        </div>

      </div>
      
      
      </div>     

    </Form>
    </div>
  )
}

export default BasicInformation
