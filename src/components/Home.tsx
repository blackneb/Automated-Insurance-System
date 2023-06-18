import React, { useEffect } from 'react'
import { Card, Col, Row, Statistic } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { clientnewinsurancevehicle } from '../data/clientnewinsurancevehicle';
import { add_breadcrumb } from '../redux/Actions';
import ChartUsersStatus from './Charts/ChartUsersStatus';
import ClaimsChartYearly from './Charts/ClaimsChartYearly';
import MonthlyExpenduters from './Charts/MonthlyExpenduters';
import CityAccidentChart from './Charts/CityAccidentChart';
import ClientNewPendingIsurances from './Tables/ClientNewPendingInsurances';
const Home = () => {
  const dispatch = useDispatch();
  const data:any[] = clientnewinsurancevehicle;
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[])
  return (
    <div className='mt-2 ml-4 h-screen'>
        <div className='shadow border-b-2 border-gray-400 mx-2 mb-4'>
          <h1>Statistics Highlight</h1>
        </div>
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

        <Row gutter={16}>
          <Col span={12}>
            <Card className='mx-2 my-2' bordered={false} style={{ width: 300 }}>
              <Statistic
                title="Total Garages"
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
      <div className='shadow border-b-2 border-gray-400 mx-2 my-4'>
          <h1>Charts Highlight</h1>
        </div>
      <div className='flex flex-row flex-wrap justify-evenly'>
        <ChartUsersStatus/>
        <ClaimsChartYearly/>
        <MonthlyExpenduters/>
        <CityAccidentChart/>
      </div>
      <ClientNewPendingIsurances data={data} />
    </div>
  )
}

export default Home
