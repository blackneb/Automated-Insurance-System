import React from 'react'
import { Button, Checkbox, Form, Input, Upload, InputNumber} from 'antd';

const Particular = () => {
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
        labelCol={{ flex: '150px' }}
        labelAlign="left"
        labelWrap
        colon={false}
      >
        <div className='flex flex-row mx-4'>
            <div className='flex flex-col'>
                <Form.Item 
                    label="Plate Number"
                    name="plateNumber"
                    rules={[{ required: true, message: 'Please input your Chassis Number!' }]}>
                    <Input.Group compact>
                        <Form.Item
                        name="plateNumber"
                        noStyle
                        rules={[{ required: true, message: 'Province is required' }]}
                        >
                        <Input style={{ width: '20%' }} placeholder="Code" />
                        </Form.Item>
                        <Form.Item
                        name={['address', 'street']}
                        noStyle
                        rules={[{ required: true, message: 'Street is required' }]}
                        >
                        <Input style={{ width: '30%' }} placeholder="City" />
                        </Form.Item>
                        <Form.Item
                        name={['address', 'street']}
                        noStyle
                        rules={[{ required: true, message: 'Street is required' }]}
                        >
                        <Input style={{ width: '50%' }} placeholder="Number" />
                        </Form.Item>
                    </Input.Group>
                </Form.Item>
                <Form.Item
                label="Chassis Number"
                name="chassisNumber"
                rules={[{ required: true, message: 'Please input your Chassis Number!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Engine Number"
                name="engineNumber"
                rules={[{ required: true, message: 'Please input your Engine Number!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Model"
                name="model"
                rules={[{ required: true, message: 'Please input your model!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Body Type"
                name="bodyType"
                rules={[{ required: true, message: 'Please input your body type !' }]}
                >
                <Input/>
                </Form.Item>

                <Form.Item
                label="Horse Power"
                name="horsePower"
                rules={[{ required: true, message: 'Please input your Horse Power !' }]}
                >
                <Input/>
                </Form.Item>
            </div>
            <div className='flex flex-col mx-8'>
                <Form.Item
                label="Cylinder Capacity"
                name="cylinderCapacity"
                rules={[{ required: true, message: 'Please input your !' }]}
                >
                <Input/>
                </Form.Item>

                <Form.Item
                label="Manufacture Year"
                name="manufactureYear"
                rules={[{ required: true, message: 'Please input your manufacture year !' }]}
                >
                <Input/>
                </Form.Item>

                <Form.Item
                label="Goods Carry"
                name="goodsCarry"
                rules={[{ required: true, message: 'Please input your goods carry !' }]}
                >
                <Input/>
                </Form.Item>

                <Form.Item
                label="Passengers Carry"
                name="passengersCarry"
                rules={[{ required: true, message: 'Please input your passengers Carry !' }]}
                >
                <Input/>
                </Form.Item>
                <Form.Item
                label="Current Estimation"
                name="currentEstimation"
                rules={[{ required: true, message: 'Please input your current estimation!' }]}
                >
                <InputNumber placeholder='Birr' style={{width:160}} />
                </Form.Item>
            </div>
        </div>
        

      </Form>
    </div>
  )
}

export default Particular
