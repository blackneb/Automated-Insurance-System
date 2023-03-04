import React from 'react'
import { Breadcrumb, Card, Space, Col, Row, Statistic } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
const Home = () => {
  return (
    <div className='mt-4 ml-4'>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <div className='flex flex-row flex-wrap mt-4'>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false} style={{ width: 300 }}>
              <Statistic
                title="Active Clients"
                value={11.28}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>

        <Card className='mx-4 my-4' size="small" title="Pending Clients"  style={{ width: 300 }}>
          <p>Card content</p>
        </Card>


        <Card className='mx-4 my-4' size="small" title="Total Claims"  style={{ width: 300 }}>
          <p>Card content</p>
        </Card>


        <Card className='mx-4 my-4' size="small" title="Active Claims"  style={{ width: 300 }}>
          <p>Card content</p>
        </Card>


      </div>
    </div>
  )
}

export default Home
