import React from 'react'
import { Descriptions, Badge } from 'antd'


const ExpertsModal = () => {
  return (
    <div className=' h-[32rem] scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
        <Descriptions bordered>
            <Descriptions.Item label="Full Name" span={3}>Jhon Doe</Descriptions.Item>
            <Descriptions.Item label="username" span={3}>jhon4doe</Descriptions.Item>
            <Descriptions.Item label="Address" span={3}>Bole</Descriptions.Item>
            <Descriptions.Item label="Phone" span={3}>+251945698745</Descriptions.Item>
            <Descriptions.Item label="Email" span={3}>garage@gmail.com</Descriptions.Item>
        </Descriptions>
    </div>
  )
}

export default ExpertsModal
