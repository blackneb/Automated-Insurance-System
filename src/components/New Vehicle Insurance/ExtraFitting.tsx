import React from 'react'
import { Button, Checkbox, Form, Input, Upload, InputNumber} from 'antd';

const ExtraFitting = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div className='flex justify-center my-8'>
       <Form
        name=""
        labelCol={{ flex: '300px' }}
        labelAlign="left"
        labelWrap
        colon={false}
      >
        <Form.Item
            label="Radios, Tape Recorders and record Players ?"
            name="radio"
            rules={[{ required: true, message: 'Please input your Chassis Number!' }]}
            >
            <InputNumber placeholder='Birr' />
        </Form.Item>
        <Form.Item
            label="Communication Equipment ?"
            name="communication"
            rules={[{ required: true, message: 'Please input your Chassis Number!' }]}
            >
            <InputNumber placeholder='Birr' />
        </Form.Item>
        <Form.Item
            label="Bull bar, carry boy, droppers extension ?"
            name="BCD"
            rules={[{ required: true, message: 'Please input your Chassis Number!' }]}
            >
            <InputNumber placeholder='Birr' />
        </Form.Item>

      </Form>
    </div>
  )
}

export default ExtraFitting
