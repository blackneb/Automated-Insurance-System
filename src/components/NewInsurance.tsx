import React,{ useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import { Button, message, Steps, theme } from 'antd';
import Particular from './New Vehicle Insurance/Particular';
import ExtraFitting from './New Vehicle Insurance/ExtraFitting';
import OtherInsurance from './New Vehicle Insurance/OtherInsurance';
import AccidentBefore from './New Vehicle Insurance/AccidentBefore';
import AdditionalInformations from './New Vehicle Insurance/AdditionalInformations';
import DateAppointment from './New Vehicle Insurance/DateAppointment';

const NewInsurance = () => {
  const dispatch = useDispatch();
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"New Insurance",path:"/newinsurance"},
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[])

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: 'Particularities',
      content: <Particular next={next} /> ,
    },
    {
      title: 'Extra Fitting',
      content: <ExtraFitting next={next} prev={prev}/> ,
    },
    {
      title: 'Other Insurances',
      content: <OtherInsurance next={next} prev={prev}/> ,
    },
    {
        title: 'Accident Before',
        content: <AccidentBefore next={next} prev={prev}/> ,
      },
      {
        title: 'Additional Informations',
        content: <AdditionalInformations next={next} prev={prev}/> ,
      },
      {
        title: 'Date Appointment',
        content: <DateAppointment prev={prev}/> ,
      },
  ];
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <div>
      <div className='flex flex-col justify-center mx-4 mt-4'>
        <Steps current={current} items={items} />
        <div className=''>{steps[current].content}</div>
        <div className='flex justify-center mt-10'>
        {/* {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button style={{ margin: '0 8px' }} type="default" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button style={{ margin: '0 8px' }} type="default" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )} */}
        </div>
      </div>
    </div>
  )
}

export default NewInsurance
