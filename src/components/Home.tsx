import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Statistic } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { clientnewinsurancevehicle } from '../data/clientnewinsurancevehicle';
import { add_breadcrumb } from '../redux/Actions';
import ChartUsersStatus from './Charts/ChartUsersStatus';
import ClaimsChartYearly from './Charts/ClaimsChartYearly';
import MonthlyExpenduters from './Charts/MonthlyExpenduters';
import CityAccidentChart from './Charts/CityAccidentChart';
import ClientNewPendingIsurances from './Tables/ClientNewPendingInsurances';
import NewPendingIsurances from './Tables/NewPendingIsurances';
import axios from 'axios';
import { add_contract, clear_vehicles,clear_vehicles_only, only_vehicles, add_vehicles } from '../redux/Actions';
import ProposerVehicles from './Tables/ProposerVehicles';
const Home = () => {
  const dispatch = useDispatch();
  const usertype = useSelector((state:any) => state.userType.accounttype);
  const data:any[] = clientnewinsurancevehicle;
  const sampleData = useSelector((state:any) => state.contract)
  const pid = useSelector((state:any) => state.userType.proposerID)
  const simpleData = useSelector((state:any) => state.vehiclesOnly.Vehicles).filter((items:any) => items.proposer === pid);
  const [allVehicles, setAllVehicles] = useState([]);
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
    axios.get("https://ais.blackneb.com/api/ais/getcontracts").then((response:any) => {
      dispatch(add_contract(response.data.filter((items:any) => items.proposer === pid && items.is_approved === "false")));
      console.log(response.data.filter((items:any) => items.proposer === pid && items.is_approved === "false"))
    })
    const initialState = {}
    dispatch(add_breadcrumb(breadcrumb));
    axios.get("https://ais.blackneb.com/api/ais/getvehicles").then((response:any) => {
      const vehicles = response.data[0];
      const accidentBefore = response.data[1];
      const otherInsurances = response.data[2];
      const plate = response.data[3];
      dispatch(clear_vehicles(initialState));
      dispatch(clear_vehicles_only(initialState));
      for(let i = 0;i<vehicles.length;i++){
        dispatch(only_vehicles(vehicles[i]));
        const newForm = {
            vehicles:vehicles[i],
            accidentBefore:accidentBefore.filter((items:any) => items.vehicle === vehicles[i].id),
            otherInsurances:otherInsurances.filter((items:any) => items.vehicle === vehicles[i].id),
            plate:plate.filter((items:any) => items.vehicle === vehicles[i].id),
        }
        dispatch(add_vehicles(newForm))       
      }
    })
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
      {
        usertype === "proposer" ? <ClientNewPendingIsurances data={sampleData} /> : <div> </div>
      }
      {
        usertype === "proposer" ? <NewPendingIsurances data={simpleData}/> : <div> </div>
      }
    </div>
  )
}

export default Home
