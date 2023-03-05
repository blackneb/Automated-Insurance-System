import React, { useEffect } from 'react'
import { Card, Col, Row, Statistic } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
const Home = () => {
  const dispatch = useDispatch();
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[])
  return (
    <div className='mt-4 ml-4'>
      <div className='flex flex-row flex-wrap justify-evenly'>
        <Row gutter={16}>
          <Col span={12}>
            <Card className='mx-2 my-2' bordered={false} style={{ width: 300 }}>
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

        <Row gutter={16}>
          <Col span={12}>
            <Card className='mx-2 my-2' bordered={false} style={{ width: 300 }}>
              <Statistic
                title="New Client Since Last Month"
                value={11.28}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Card className='mx-2 my-2' bordered={false} style={{ width: 300 }}>
              <Statistic
                title="Pending Clients"
                value={11.28}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Card className='mx-2 my-2' bordered={false} style={{ width: 300 }}>
              <Statistic
                title="Total Claims"
                value={11.28}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>


        <Row gutter={16}>
          <Col span={12}>
            <Card className='mx-2 my-2' bordered={false} style={{ width: 300 }}>
              <Statistic
                title="Active Claims"
                value={11.28}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>

      </div>
    </div>
  )
}

export default Home
