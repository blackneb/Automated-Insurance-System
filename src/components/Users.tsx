import React from 'react'
import { Breadcrumb } from 'antd'

const Users = () => {
  return (
    <div className='mt-4 ml-4'>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Users</Breadcrumb.Item>
      </Breadcrumb>
      Users
    </div>
  )
}

export default Users
