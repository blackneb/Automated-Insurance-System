import React from 'react'
import { Button, Checkbox, Form, Input, Upload, Select,} from 'antd';
const { Option } = Select;


const OtherInsurance = () => {
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
            label="Decline your proposal?"
            name="decline"
            rules={[{ required: true, message: 'Please input your !' }]}
            >
            <Select placeholder="Yes/No">
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
          </Select>
        </Form.Item>
        <Form.Item
            label="Refused to renew your policy?"
            name="refuse"
            rules={[{ required: true, message: 'Please input your !' }]}
            >
            <Input />
        </Form.Item>
        <Form.Item
            label="Cancelled your policy?"
            name="cancel"
            rules={[{ required: true, message: 'Please input your Chassis Number!' }]}
            >
            <Input />
        </Form.Item>
        <Form.Item
            label="Requrie an increase of premium?"
            name="require"
            rules={[{ required: true, message: 'Please input your !' }]}
            >
            <Input />
        </Form.Item>
        <Form.Item
            label="Imposed additional excess?"
            name="iae"
            rules={[{ required: true, message: 'Please input your !' }]}
            >
            <Input />
        </Form.Item>
        <Form.Item
            label="Imposed special conditions?"
            name="isc"
            rules={[{ required: true, message: 'Please input your !' }]}
            >
            <Input />
        </Form.Item>

      </Form>
    </div>
  )
}

export default OtherInsurance
