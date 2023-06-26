import React,{ useEffect } from 'react'
import { Card, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import { garagesubmittedbids } from '../data/garagesubmittedbids';
import GarageSubBids from './Tables/GarageSubBids';
import { add_garage_bids, clear_garage_bids } from '../redux/Actions';
import axios from 'axios';
const GarageSubmittedBids = () => {
  const dispatch = useDispatch();
  const data:any[] = garagesubmittedbids;
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Submitted Bids",path:"/garage"},
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
    axios.get("https://ais.blackneb.com/api/ais/getgaragebid").then((response:any) => {
      console.log(response.data);
      const totalBids = response.data[0];
      const garageBids = response.data[1];
      const vehicleData = response.data[2];
      console.log(garageBids);
    })

  },[])
  return (
    <div className='mt-4 ml-4 h-screen'>
      <GarageSubBids data={data}/>
    </div>
  )
}

export default GarageSubmittedBids
