import React,{ useState } from 'react'
import { Button, Checkbox, Form, Input, Upload} from 'antd';
import { DatePicker, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { add_accident_before } from '../../redux/Actions';

export interface accbefore{
    accidentDate:any;
    personalInjury:string;
    propertyDamage:string;
    vehicleDamage:string;
}

const AccidentBefore = ({next,prev}:any) => {
    const [accidentBeforeData, setAccidentBeforeData] = useState<any[]>([]);
    const dispatch = useDispatch();
    const accidentBeforeDefaultValues = useSelector((state:any) => state.accidentBefore);
    const onFinish = (values: any) => {
        console.log('Success:', values);
        setAccidentBeforeData([...accidentBeforeData, values]);
        const accidentBeforeArray = [...accidentBeforeData,values];
        console.log(accidentBeforeArray);
        dispatch(add_accident_before(accidentBeforeArray));
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div>
        <div className='flex justify-center my-8'>
        <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            initialValues={accidentBeforeDefaultValues}
            labelCol={{ flex: '120px', span: 30 }}
            labelAlign="left"
            labelWrap
            colon={false}
        >
            <div className='flex flex-col h-[32rem]'>
                <div>
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
                </div>
                <div>
                    <Button htmlType="submit">Add</Button>
                </div>
            </div>
            <div className='flex flex-row justify-center'>
                <Button style={{ margin: '0 8px' }} type="default" onClick={()=>next()}>
                    Next
                </Button>
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                    Previous
                </Button>
            </div>
        </Form>
        </div>
        
    </div>
    
  )
}

export default AccidentBefore
