import React from 'react'
import { Descriptions, Badge, Form, InputNumber, Button } from 'antd'


const NewInsuranceVehicleModal = () => {
    const onFinish = async (values: any) => {
        console.log('Success:', values);
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div className=' h-[32rem] scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
        <Descriptions bordered>
            <Descriptions.Item label="Engine Number" span={3}>12345</Descriptions.Item>
            <Descriptions.Item label="Chassis Number" span={3}>12345</Descriptions.Item>
            <Descriptions.Item label="Plate Number" span={2}>3-AA-B12456</Descriptions.Item>
            <Descriptions.Item label="Body Type">Silver</Descriptions.Item>
            <Descriptions.Item label="Horse Power" span={2}>1200</Descriptions.Item>
            <Descriptions.Item label="Cylinder Capacity" span={2}><Badge status="processing" text="5" /></Descriptions.Item>
            <Descriptions.Item label="Manufacture year" span={2}>2005</Descriptions.Item>
            <Descriptions.Item label="Goods Carry" span={3}>6 Ton</Descriptions.Item>
            <Descriptions.Item label="Passangers Carry" span={2}>5</Descriptions.Item>
            <Descriptions.Item label="Current Estimation">12000000</Descriptions.Item>
            <Descriptions.Item label="Vehicle Owner" span={2}>Jhon Doe</Descriptions.Item>
            <Descriptions.Item label="Purpose of vehicle">Learning</Descriptions.Item>
            <Descriptions.Item label="Insure Vehicle from Bandit, Shifta and Guerrilla" span={2}>Yes</Descriptions.Item>
            <Descriptions.Item label="Proposer Name">Jhon Doe</Descriptions.Item>
            <Descriptions.Item label="Cover Required" span={2}>Third Party</Descriptions.Item>
            <Descriptions.Item label="Drivers Covered">Any Driver</Descriptions.Item>
            <Descriptions.Item label="Extra Fitting" span={3}>
                Radio: 2500 Birr
                <br />
                Communication Equipment: 3200 Birr
                <br />
                BCD: 6550 Birr
                <br />
            </Descriptions.Item>
            <Descriptions.Item label="Other Insurances" span={3}>
                Decline your proposal: Yes
                <br />
                Refused to renew your policy: No
                <br />
                Cancelled your policy:Yes
                <br />
                Requrie an increase of premium: No
                <br />
                Imposed additional excess: Yes
                <br />
                Imposed special conditions: No
                <br />
            </Descriptions.Item>
        </Descriptions>
        <div>
        <Form
        name="basic"
        labelCol={{ span: 30 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className='flex flex-row mt-4'>
            <Form.Item
                label="Estimated Insurance Price"
                name="estimatedPrice"
                rules={[{ required: true, message: 'Please input the Estimated Price!' }]}
            >
                <InputNumber style={{ width:200 }} />
            </Form.Item>
            <Button style={{ margin: '0 8px' }} type="default" htmlType="submit">
                Contract
            </Button>
            </div>
            <div className='flex flex-row justify-center'>
            </div>
        </Form>
        </div>
    </div>
  )
}

export default NewInsuranceVehicleModal