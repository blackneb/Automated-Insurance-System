import React from 'react'
import { Button, Checkbox, Form, Input, Upload, InputNumber} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { add_extra_fitting } from '../../redux/Actions';

const ExtraFitting = ({next,prev}:any) => {
    const dispatch = useDispatch();
    const extraFittingDefaultValues = useSelector((state:any) => state.extraFitting);
    const onFinish = (values: any) => {
        console.log('Success:', values);
        dispatch(add_extra_fitting(values));
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
        initialValues={extraFittingDefaultValues}
        labelCol={{ flex: '300px', span: 30 }}
        labelAlign="left"
        labelWrap
        colon={false}
      >
        <div className='flex flex-col h-[32rem]'>
          <Form.Item
              label="Radios, Tape Recorders and record Players ?"
              name="radio"
              rules={[{ required: true, message: 'Please input the amount!' }]}
              >
              <Input placeholder='Birr' />
          </Form.Item>
          <Form.Item
              label="Communication Equipment ?"
              name="communication"
              rules={[{ required: true, message: 'Please input the amount!' }]}
              >
              <Input placeholder='Birr' />
          </Form.Item>
          <Form.Item
              label="Bull bar, carry boy, droppers extension ?"
              name="bsd"
              rules={[{ required: true, message: 'Please input the amount!' }]}
              >
              <Input placeholder='Birr' />
          </Form.Item>
        </div>
        <div className='flex flex-row justify-center'>
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

export default ExtraFitting
