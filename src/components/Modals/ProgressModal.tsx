import React from 'react'
import { Descriptions, Badge, Progress } from 'antd'


const ProgressModal = () => {
  return (
    <div className=' h-[32rem] scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
        <Descriptions bordered>
            <Descriptions.Item label="Accident ID" span={2}>Jhon Doe</Descriptions.Item>
            <Descriptions.Item label="Vehicle ID">jhon4doe</Descriptions.Item>
            <Descriptions.Item label="Claim Date" span={2}>Bole</Descriptions.Item>
            <Descriptions.Item label="Garage Name">+251945698745</Descriptions.Item>
            <Descriptions.Item label="Vehicle Proposer" span={2}>garage@gmail.com</Descriptions.Item>
            <Descriptions.Item label="Vehicle Owner">10</Descriptions.Item>
            <Descriptions.Item label="Claim Progress" span={2}><Progress percent={25} status="active" /></Descriptions.Item>
        </Descriptions>
    </div>
  )
}

export default ProgressModal
