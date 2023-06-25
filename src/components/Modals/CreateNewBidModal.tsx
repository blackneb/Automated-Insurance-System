import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Tag, notification} from 'antd';
import axios from 'axios';


const CreateNewBidModal = ({data}:any) => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState<any[]>([]);
    const onFinish = (values: any) => {
        console.log('Success:', values);
        setItems([...items, values.items]);
        console.log(items);
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    const onSubmit = async() => {
        setLoading(true)
        const submittedData = {
            vehicleID:data.vehicle,
            items:items
        }
        console.log(JSON.stringify(submittedData, null,2))
        axios.post("http://ais.blackneb.com/api/ais/createbid", submittedData).then((response:any) => {
            console.log(response.data);
            if(response.data[0].status === "pass"){
                notification.success({
                  message: 'success',
                  description: 'Bid Created Successfully',
                });
                setLoading(false);
              }
              else{
                notification.error({
                    message: 'Error',
                    description: 'Bid Not Created',
                  });
                setLoading(false);
              }
        })
    }
    useEffect(() => {
        setItems([]);
    }, [])
  return (
    <div className='flex flex-col items-center'>
        <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        labelCol={{ flex: '120px', span: 30 }}
        labelAlign="left"
        labelWrap
        colon={false}
        >
            <div className=''>
                <div className='flex flex-row'>
                    <Form.Item
                        label="Items Add"
                        name="items"
                        >
                        <Input style={{width:150}} placeholder='items List' />
                    </Form.Item>
                    <Form.Item>
                        <Button className='mx-20' htmlType="submit">Add</Button>
                    </Form.Item>
                </div>
                <div className='w-96'>
                    {
                        items.map((item:any) => {
                            return(
                                <Tag className='m-2' style={{fontSize:13}} color="#87d068">{item}</Tag>
                            )
                        })
                    }
                </div>
                
            </div>
            
            <div>
            <Form.Item>
                <Button className='my-4' onClick={()=>onSubmit()}>Submit</Button>
            </Form.Item>
            </div>
        </Form>
      
    </div>
  )
}

export default CreateNewBidModal
