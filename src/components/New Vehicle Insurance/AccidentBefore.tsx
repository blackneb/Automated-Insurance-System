import React from 'react'
import { Button, Checkbox, Form, Input, Upload} from 'antd';
import { DatePicker, Space } from 'antd';

const AccidentBefore = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div>
        <div className='flex justify-center my-8'>
        <Form
            name=""
            labelCol={{ flex: '120px' }}
            labelAlign="left"
            labelWrap
            colon={false}
        >
            <Form.Item
                label="Accident Date"
                name="accidentDate"
                >
                <DatePicker style={{ width:180 }}/>
            </Form.Item>
            <Form.Item
                label="Vehicle Damage"
                name="vehicleDamage"
                >
                <Input />
            </Form.Item>
            <Form.Item
                label="Personal Injury"
                name="personalInjury"
                >
                <Input />
            </Form.Item>
            <Form.Item
                label="Property Damage"
                name="propertyDamage"
                >
                <Input />
            </Form.Item>
        </Form>
        </div>
        <div>
            <Button>Add</Button>
        </div>
    </div>
    
  )
}

export default AccidentBefore
