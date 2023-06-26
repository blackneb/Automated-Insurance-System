import React, {useState} from 'react'
import { Form, Button, Input, notification } from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios';

const VehicleClaimModal = () => {
  const [loading, setLoading] = useState(false);
  const pid = useSelector((state:any) => state.userType.proposerID)
  const onFinish = async (values: any) => {
    setLoading(true)
    console.log('Success:', values);
    let date = new Date("2018-01-01T00:00:00");
    let currentData = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    const submittedData = {
      vehicleId: values.vehicleId,
      accident_id: values.accidentId,
      garageId: "11",
      date:currentData,
      progress:0,
      totalPrice:"0",
      closedDate:"",
      proposerId:pid
    }
    await axios.post("https://ais.blackneb.com/api/ais/addclaim", submittedData).then((response:any) => {
      if(response.data[0].status === "created"){
        notification.success({
          message: 'success',
          description: 'Accident Registered Successfully',
        });
        setLoading(false);
      }
      else{
        setLoading(false);
      }
    })
    console.log(JSON.stringify(submittedData,null,2));
  };

  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
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
        <div className='flex flex-col align-center mt-4'>
            <Form.Item
                label="Vehicle Id"
                name="vehicleId"
                rules={[{ required: true, message: 'Please input the Estimated Price!' }]}
            >
                <Input style={{ width:200 }} />
            </Form.Item>
            <Form.Item
                label="Accident ID"
                name="accidentId"
                rules={[{ required: true, message: 'Please input the Estimated Price!' }]}
            >
                <Input style={{ width:200 }} />
            </Form.Item>
            <Button style={{ margin: '0 8px', width:80 }} type="default" htmlType="submit">
            {loading ? 'Claiming...' : 'Claim'}
            </Button>
            </div>
            <div className='flex flex-row justify-center'>
            </div>
        </Form>
    </div>
  )
}

export default VehicleClaimModal
