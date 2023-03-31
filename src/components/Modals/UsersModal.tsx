import React from 'react'
import { Descriptions, Badge } from 'antd'


const UsersModal = () => {
  return (
    <div className=' h-[32rem] scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
        <Descriptions bordered>
            <Descriptions.Item label="Full Name" span={2}>Jhon Doe</Descriptions.Item>
            <Descriptions.Item label="username">jhon4doe</Descriptions.Item>
            <Descriptions.Item label="Client At" span={2}>03-08-2022</Descriptions.Item>
            <Descriptions.Item label="Total insurance Value">400000</Descriptions.Item>
            <Descriptions.Item label="List of insurances" span={2}>Yes</Descriptions.Item>
            <Descriptions.Item label="Does health Insurance?">jhon4doe</Descriptions.Item>
            <Descriptions.Item label="Residential Address" span={2}>
                Sub-city: Gulele
                <br />
                Woreda: 05
                <br />
                Kebele: 17
                <br />
                House Number: 225
                <br />
                P.O.Box: 2215
                <br />
                Phone: +25194512136
                <br />
                Email: jhon@gmail.com
                <br />
            </Descriptions.Item>
            <Descriptions.Item label="Bussiness Address" span={3}>
                Sub-city: Bole
                <br />
                Woreda: 09
                <br />
                Kebele: 14
                <br />
                House Number: 3698
                <br />
                P.O.Box: 7852
                <br />
                Phone: +2519457841
                <br />
                Email: jhonwork@gmail.com
                <br />
                Fax: 13695
                <br />
            </Descriptions.Item>
        </Descriptions>
    </div>
  )
}

export default UsersModal
