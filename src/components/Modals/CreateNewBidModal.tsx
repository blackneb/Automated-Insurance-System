import React, { useState } from 'react'
import { Button, Form, Input, Tag} from 'antd';


const CreateNewBidModal = () => {
    const [items, setItems] = useState<any[]>([]);
    const onFinish = (values: any) => {
        console.log('Success:', values);
        setItems([...items, values]);
        console.log(items);
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    const onSubmit = () => {
        alert(JSON.stringify(items,null,2))
    }
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
                                <Tag className='m-2' style={{fontSize:13}} color="#87d068">{item.items}</Tag>
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
