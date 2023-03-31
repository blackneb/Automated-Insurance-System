import React from 'react'
import { Button, Checkbox, Form, Input, Upload, Select} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { add_additional_info } from '../../redux/Actions';
const { Option } = Select;

const AdditionalInformations = ({next,prev}:any) => {
    const dispatch = useDispatch();
    const additionalInfoDefaultValues = useSelector((state:any) => state.additionalInfo);
    const onFinish = (values: any) => {
        console.log('Success:', values);
        dispatch(add_additional_info(values));
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
            initialValues={additionalInfoDefaultValues}
            labelCol={{ flex: '350px', span: 30 }}
            labelAlign="left"
            labelWrap
            colon={false}
        >
            <div className='flex flex-col h-[32rem]'>
                <Form.Item
                    label="Please state Cover Required"
                    name="coverRequired"
                    rules={[{ required: true, message: 'Please input your Choice!' }]}
                    >
                    <Select style={{width:250}} placeholder="Please Select">
                        <Option value="comprehensive">Comprehensive</Option>
                        <Option value="thirdParty">Third Party</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Drivers Covered"
                    name="driversCovered"
                    rules={[{ required: true, message: 'Please input your Choice!' }]}
                    >
                    <Select style={{width:250}} placeholder="Please Select">
                        <Option value="insuredOnly">Insured Only</Option>
                        <Option value="anyDriver">Any Driver</Option>
                    </Select>
                </Form.Item>
                <Form.Item 
                        label="Owner"
                        rules={[{ required: true, message: 'Please input the Name!' }]}
                        >
                        <Input.Group style={{width:250}} compact>
                            <Form.Item
                            name="firstName"
                            rules={[{ required: true, message: 'Please input first name!' }]}
                            noStyle
                            >
                            <Input style={{ width: '50%' }} placeholder="First Name" />
                            </Form.Item>
                            <Form.Item
                            name="lastName"
                            rules={[{ required: true, message: 'Please input last name!' }]}
                            noStyle
                            >
                            <Input style={{ width: '50%' }} placeholder="Last Name" />
                            </Form.Item>
                        </Input.Group>
                    </Form.Item>
                <Form.Item
                    label="Purpose of Vehicle"
                    name="vehiclePurpose"
                    rules={[{ required: true, message: 'Please input purpose of vehicle!' }]}
                    >
                    <Select style={{width:250}} placeholder="Please Select">
                        <Option value="private">Private</Option>
                        <Option value="ownGood">Own Good</Option>
                        <Option value="generalCartage">General Cartage</Option>
                        <Option value="tour">Car Hire Tour Operation</Option>
                        <Option value="publicTransport">Public Transport</Option>
                        <Option value="ownService">Own Service</Option>
                        <Option value="motorTrade">Motor Trade</Option>
                        <Option value="learner">Learner</Option>
                        <Option value="taxi">Taxi</Option>
                        <Option value="motorCycle">Motor Cycle</Option>
                        <Option value="specialVehicle">Special Vehicle</Option>
                        <Option value="threeWheeled">Three Wheeled</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Insure Vehicle from Bandit, Shifta and Guerrilla?"
                    name="BSG"
                    rules={[{ required: true, message: 'Please input your Choice!' }]}
                    >
                    <Select style={{width:250}} placeholder="Yes/No">
                        <Option value="yes">Yes</Option>
                        <Option value="no">No</Option>
                    </Select>
                </Form.Item>
            </div>
            <div>
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

export default AdditionalInformations
