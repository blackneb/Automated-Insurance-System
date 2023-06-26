import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Tag, notification} from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios';


const GarageBidModal = ({data}:any) => {
    const [loading, setLoading] = useState(false);
    const gid = useSelector((state:any) => state.userType.garageID)
    const onFinish = async (values: any) => {
        console.log('Success:', values);
        const submittedData = {
            bidID:data.id,
            garageID:gid,
            item:"ALL",
            price:values.price
        }
        console.log(JSON.stringify(submittedData,null,2));
        await axios.post("https://ais.blackneb.com/api/ais/creategaragebid", submittedData).then((response:any) => {
            if(response.data[0].status === "created"){
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
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    useEffect(() => {
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
                        label="Total Price"
                        name="price"
                        >
                        <Input style={{width:150}} placeholder='Total Price' />
                    </Form.Item>
                </div>
                <div className='w-96'>
                    {
                        data.items.map((item:any) => {
                            return(
                                <Tag className='m-2' style={{fontSize:13}} color="#87d068">{item.item_name}</Tag>
                            )
                        })
                    }
                </div>
                
            </div>
            
            <div>
            <Form.Item>
                <Button className='my-4' htmlType="submit">Submit</Button>
            </Form.Item>
            </div>
        </Form>
      
    </div>
  )
}

export default GarageBidModal