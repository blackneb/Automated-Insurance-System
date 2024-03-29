import React,{useState} from 'react'
import { DatePicker,Form, Space, Button, notification } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { add_date_appointment } from '../../redux/Actions';
import axios from 'axios';

const DateAppointment = ({prev}:any) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const dateAppointmentDefaultValues = useSelector((state:any) => state.dateAppointment);
  const particular = useSelector((state:any) => state.particular);
  const extraFitting = useSelector((state:any) => state.extraFitting);
  const otherInsurance = useSelector((state:any) => state.otherInsurance);
  const accidentbefore = useSelector((state:any) => state.accidentBefore);
  const additionalInfo = useSelector((state:any) => state.additionalInfo);
  const pid:string = useSelector((state:any) => state.userType.proposerID).toString();
  const onFinish = async(values: any) => {
    setLoading(true);
    console.log('Success:', values);
    dispatch(add_date_appointment(values));
    const accidentBefore = {...accidentbefore};
    const proposerId = {
      proposerId:pid,
      expertId:"10",
    }
    const submittedData = {...particular, ...extraFitting, ...otherInsurance, ...accidentBefore, ...additionalInfo, ...values,...proposerId};
    console.log(JSON.stringify(submittedData,null,2));
    await axios.post("https://ais.blackneb.com/api/ais/createvehicleinsurance", submittedData).then((response:any) => {
      console.log(response.data[0].status);
      if(response.data[0].status === "created"){
        notification.success({
          message: 'success',
          description: 'Vehicle Registered Successfully',
        });
        setLoading(false);
      }
      else{
        setLoading(false);
      }
    })
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
        initialValues={dateAppointmentDefaultValues}
        labelCol={{ flex: '150px', span: 30 }}
        labelAlign="left"
        labelWrap
        colon={false}
      >
        <div className='flex flex-col h-[32rem]'>
          <Form.Item
              label="Select Date: "
              name="appointmentDate"
              rules={[{ required: true, message: 'Please Select Date!' }]}
              >
              <DatePicker style={{ width:200 }} />
          </Form.Item>
        </div>
        <div className='flex flex-row justify-center'>
          <Button style={{ margin: '0 8px' }} type="default" htmlType="submit">
          {loading ? 'Uploading...' : 'Done'}
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
