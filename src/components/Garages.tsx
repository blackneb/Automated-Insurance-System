import React,{ useEffect } from 'react'
import { Card, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import TotalGarages from './Tables/TotalGarages';
import {garages} from '../data/garages';
import WorkingGarages from './Tables/WorkingGarages';
import BidsOnVehicle from './Tables/BidsOnVehicle';


const Garages = () => {
    const dispatch = useDispatch();
    const data:any[] = garages;
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Garages",path:"/garage"},
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[])
  return (
    <div className='mt-4 ml-4'>
      <div className='flex flex-row flex-wrap justify-center'>
      <div>
          <Card className='mx-4 my-4' size="small" title="Total Garages" style={{ width: 300 }}>
            <p>Number</p>
          </Card>
          <Card className='mx-4 my-4' size="small" title="Total Vehicles Under Garages" style={{ width: 300 }}>
            <p>Number</p>
          </Card>
        </div>
        <BidsOnVehicle data={data}/>
        <WorkingGarages data={data}/>
      </div>
      <TotalGarages data={data}/>
    </div>
  )
}

export default Garages
