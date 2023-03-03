import React from 'react'
import { Breadcrumb } from 'antd'

const Profile = () => {
  return (
    <div className='mt-4 ml-4'>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Profile</Breadcrumb.Item>
      </Breadcrumb>
      Profile
    </div>
  )
}

export default Profile
