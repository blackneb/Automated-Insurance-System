import React from 'react'
import { DatePicker,Form, Space, Button } from 'antd';

const DateAppointment = ({prev}:any) => {
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
        labelCol={{ flex: '100px' }}
        labelAlign="left"
        labelWrap
        colon={false}
      >
        <div className='flex flex-col h-[32rem]'>
          <Form.Item
              label="Select Date: "
              name="radio"
              rules={[{ required: true, message: 'Please Select Date!' }]}
              >
              <DatePicker style={{ width:200 }} />
          </Form.Item>
        </div>
        <div className='flex flex-row justify-center'>
          <Button style={{ margin: '0 8px' }} type="default" htmlType="submit">
            Done
          </Button>
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        </div>

      </Form>
        
    </div>
  )
}

export default DateAppointment
