import React from 'react'
import { DatePicker,Form, Space, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { add_date_appointment } from '../../redux/Actions';

const DateAppointment = ({prev}:any) => {
  const dispatch = useDispatch();
  const dateAppointmentDefaultValues = useSelector((state:any) => state.dateAppointment);
  const particular = useSelector((state:any) => state.particular);
  const extraFitting = useSelector((state:any) => state.extraFitting);
  const otherInsurance = useSelector((state:any) => state.otherInsurance);
  const accidentbefore = useSelector((state:any) => state.accidentBefore);
  const additionalInfo = useSelector((state:any) => state.additionalInfo);
  const pid:string = useSelector((state:any) => state.userType.proposerID).toString();
  const onFinish = (values: any) => {
    console.log('Success:', values);
    dispatch(add_date_appointment(values));
    const accidentBefore = {...accidentbefore};
    const proposerId = {
      proposerId:pid,
      expertId:"",
    }
    const submittedData = {...particular, ...extraFitting, ...otherInsurance, ...accidentBefore, ...additionalInfo, ...values,...proposerId};
    console.log(JSON.stringify(submittedData,null,2));
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
