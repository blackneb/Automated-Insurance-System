import React from 'react'
import { Descriptions, Badge } from 'antd'


const GarageModal = ({data}:any) => {
  console.log(data);
  return (
    <div className=' h-[32rem] scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
        <Descriptions bordered>
            <Descriptions.Item label="Full Name" span={2}>{data.username}</Descriptions.Item>
            <Descriptions.Item label="Address" span={2}>{data.address}</Descriptions.Item>
            <Descriptions.Item label="Phone" span={2}>{data.phone}</Descriptions.Item>
            <Descriptions.Item label="Email" span={2}>{data.email}</Descriptions.Item>
        </Descriptions>
    </div>
  )
}

export default GarageModal
