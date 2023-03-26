import React, {useState} from 'react'
import { Button, Form, Input, Radio, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


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
      <Form.Item 
        label="First Name"
        name="FirstName"
        rules={[{ required: true, message: 'Please input your Last Name!' }]}>
        <Input placeholder="" />
      </Form.Item>
      <Form.Item 
        label="Last Name"
        name="Last Name"
        rules={[{ required: true, message: 'Please input your First Name!' }]}>
        <Input placeholder="" />
      </Form.Item>
      <Form.Item 
          label="Profile Image" 
          name="Profile Image"
          valuePropName="fileList"
          rules={[{ required: true, message: 'Please input your Profile Image!' }]}>
          <Upload action="/upload.do" listType="picture-card">
            <div className=''>
              <PlusOutlined/>
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
    </Form>
    </div>
  )
}

export default BasicInformation
