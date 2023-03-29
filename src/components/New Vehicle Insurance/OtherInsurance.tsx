import React from 'react'
import { Button, Checkbox, Form, Input, Upload, Select,} from 'antd';
const { Option } = Select;


const OtherInsurance = ({next,prev}:any) => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
        next();
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div className='flex justify-center my-8'>
       <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        labelCol={{ flex: '225px', span: 30 }}
        labelAlign="left"
        labelWrap
        colon={false}
      >
        <div className='flex flex-col h-[32rem]'>
            <Form.Item
                label="Decline your proposal?"
                name="decline"
                rules={[{ required: true, message: 'Please input your Choice!' }]}
                >
                <Select style={{width:150}} placeholder="Yes/No">
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Refused to renew your policy?"
                name="refuse"
                rules={[{ required: true, message: 'Please input your Choice!' }]}
                >
                <Select style={{width:150}} placeholder="Yes/No">
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Cancelled your policy?"
                name="cancel"
                rules={[{ required: true, message: 'Please input your Choice!' }]}
                >
            <Select style={{width:150}} placeholder="Yes/No">
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Requrie an increase of premium?"
                name="require"
                rules={[{ required: true, message: 'Please input your Choice!' }]}
                >
                <Select style={{width:150}} placeholder="Yes/No">
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Imposed additional excess?"
                name="iae"
                rules={[{ required: true, message: 'Please input your Choice!' }]}
                >
                <Select style={{width:150}} placeholder="Yes/No">
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Imposed special conditions?"
                name="isc"
                rules={[{ required: true, message: 'Please input your Choice!' }]}
                >
                <Select style={{width:150}} placeholder="Yes/No">
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                </Select>
            </Form.Item>
        </div>
        <div className='flex flex-row justify-center'>
          <Button style={{ margin: '0 8px' }} type="default" htmlType="submit">
            Next
          </Button>
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        </div>

      </Form>
    </div>
  )
}

export default OtherInsurance
