import React from 'react'
import { Breadcrumb } from 'antd'

const Dashboard = () => {
  return (
    <div className='mt-4 ml-4'>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      Dashboard
    </div>
  )
}

export default Dashboard
