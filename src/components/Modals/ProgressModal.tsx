import React,{useState} from 'react'
import { Descriptions, Badge, Progress } from 'antd'


const ProgressModal = ({data}:any) => {
  const [progressNumber, setProgressNumber] = useState(63);
  return (
    <div className=' h-[32rem] scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
        <Descriptions bordered>
            <Descriptions.Item label="Accident ID" span={2}>{data.accident_id}</Descriptions.Item>
            <Descriptions.Item label="Vehicle ID">{data.vehicle}</Descriptions.Item>
            <Descriptions.Item label="Claim Date" span={2}>{data.date}</Descriptions.Item>
            <Descriptions.Item label="Garage Name">{data.garage}</Descriptions.Item>
            <Descriptions.Item label="Vehicle Proposer" span={2}>{data.proposer}</Descriptions.Item>
            <Descriptions.Item label="Claim Progress" span={2}><Progress percent={data.progress} status="active" /></Descriptions.Item>
        </Descriptions>
    </div>
  )
}

export default ProgressModal
