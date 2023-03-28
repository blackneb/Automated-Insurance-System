import React from 'react'
import { Divider, Steps } from 'antd';


const UserHistory = () => {
  return (
    <div className='mt-4 ml-16 h-screen'>
      <Divider />
        <Steps
          progressDot
          current={0}
          direction="vertical"
          items={[
            {
              title: 'Date 14-08-22',
              description: 'This is a description. This is a description.',
            },
            {
              title: 'Date 14-08-22',
              description: 'This is a description. This is a description.',
            },
            {
              title: 'Date 14-08-22',
              description: 'This is a description. This is a description.',
            },
            {
              title: 'Date 14-08-22',
              description: 'This is a description.',
            },
            {
              title: 'Date 14-08-22',
              description: 'This is a description.',
            },
          ]}
        />
    </div>
  )
}

export default UserHistory
