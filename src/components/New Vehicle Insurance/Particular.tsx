import React from 'react'
import { Button, Checkbox, Form, Input, Upload, InputNumber} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { add_particular } from '../../redux/Actions';

const Particular = ({next}:any) => {
  const dispatch = useDispatch();
  const particularDefaultValues = useSelector((state:any) => state.particular);
    const onFinish = (values: any) => {
        console.log('Success:', values);
        dispatch(add_particular(values));
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
        initialValues={particularDefaultValues}
        autoComplete="off"
        labelCol={{ flex: '150px', span: 30 }}
        labelAlign="left"
        labelWrap
        colon={false}
      >
        <div className='flex flex-row mx-4 h-[32rem]'>
            <div className='flex flex-col'>
                <Form.Item 
                    label="Plate Number"
                    >
                    <Input.Group compact>
                        <Form.Item
                        name="code"
                        noStyle
                        rules={[{ required: true, message: 'plate code is required' }]}
                        >
                        <Input style={{ width: '20%' }} placeholder="Code" />
                        </Form.Item>
                        <Form.Item
                        name='city'
                        noStyle
                        rules={[{ required: true, message: 'plate country is required' }]}
                        >
                        <Input style={{ width: '30%' }} placeholder="City" />
                        </Form.Item>
                        <Form.Item
                        name='number'
                        noStyle
                        rules={[{ required: true, message: 'plate number is required' }]}
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
                rules={[{ required: true, message: 'Please input your cylinder capacity!' }]}
                >
                <Input/>
                </Form.Item>

                <Form.Item
                label="Manufacture Year"
                name="manufactureYear"
                rules={[{ required: true, message: 'Please input your manufacture year !' }]}
                >
                <Input style={{width:160}}/>
                </Form.Item>

                <Form.Item
                label="Goods Carry"
                name="goodCapacity"
                rules={[{ required: true, message: 'Please input your goods carry !' }]}
                >
                <Input/>
                </Form.Item>

                <Form.Item
                label="Passengers Carry"
                name="passengerCapacity"
                rules={[{ required: true, message: 'Please input your passengers Carry !' }]}
                >
                <Input/>
                </Form.Item>
                <Form.Item
                label="Current Estimation"
                name="currentEstimation"
                rules={[{ required: true, message: 'Please input your current estimation!' }]}
                >
                <Input placeholder='Birr' style={{width:160}} />
                </Form.Item>
            </div>
        </div>
        <div className='flex flex-row justify-center'>
          <Button style={{ margin: '0 8px' }} type="default" htmlType="submit">
            Next
          </Button>
        </div>

      </Form>
    </div>
  )
}

export default Particular
