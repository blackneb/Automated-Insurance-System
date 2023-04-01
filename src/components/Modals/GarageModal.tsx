import React from 'react'
import { Descriptions, Badge } from 'antd'


const GarageModal = () => {
  return (
    <div className=' h-[32rem] scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
        <Descriptions bordered>
            <Descriptions.Item label="Full Name" span={2}>Jhon Doe</Descriptions.Item>
            <Descriptions.Item label="username">jhon4doe</Descriptions.Item>
            <Descriptions.Item label="Address" span={2}>Bole</Descriptions.Item>
            <Descriptions.Item label="Phone">+251945698745</Descriptions.Item>
            <Descriptions.Item label="Email" span={2}>garage@gmail.com</Descriptions.Item>
            <Descriptions.Item label="current Active Bids">10</Descriptions.Item>
            <Descriptions.Item label="Client At" span={2}>03-08-2022</Descriptions.Item>
            <Descriptions.Item label="Number of vehicles Worked">400000</Descriptions.Item>
            <Descriptions.Item label="Number of Bids" span={2}>22</Descriptions.Item>
            <Descriptions.Item label="Current Working vehicles">8</Descriptions.Item>
            <Descriptions.Item label="Documents" span={2}>Document List</Descriptions.Item>
        </Descriptions>
    </div>
  )
}

export default GarageModal
