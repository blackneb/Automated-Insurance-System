import React from 'react'
import { Button, Checkbox, Form, Input, Upload, Select} from 'antd';
const { Option } = Select;



const AdditionalInformations = () => {
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
            labelCol={{ flex: '350px' }}
            labelAlign="left"
            labelWrap
            colon={false}
        >
            <Form.Item
                label="Please state Cover Required"
                name="coverRequired"
                >
                <Select style={{width:250}} placeholder="Please Select">
                    <Option value="comprehensive">Comprehensive</Option>
                    <Option value="thirdParty">Third Party</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Drivers Covered"
                name="driversCovered"
                >
                <Select style={{width:250}} placeholder="Please Select">
                    <Option value="insuredOnly">Insured Only</Option>
                    <Option value="anyDriver">Any Driver</Option>
                </Select>
            </Form.Item>
            <Form.Item 
                    label="Owner"
                    name="owner">
                    <Input.Group style={{width:250}} compact>
                        <Form.Item
                        name="firstName"
                        noStyle
                        >
                        <Input style={{ width: '50%' }} placeholder="First Name" />
                        </Form.Item>
                        <Form.Item
                        name="lastName"
                        noStyle
                        >
                        <Input style={{ width: '50%' }} placeholder="Last Name" />
                        </Form.Item>
                    </Input.Group>
                </Form.Item>
            <Form.Item
                label="Purpose of Vehicle"
                name="vehiclePurpose"
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
                >
                <Select style={{width:250}} placeholder="Yes/No">
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                </Select>
            </Form.Item>
        </Form>
        </div>
  )
}

export default AdditionalInformations
