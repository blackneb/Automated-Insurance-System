import React,{ useEffect, useState } from 'react'
import { Card, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import { garagesubmittedbids } from '../data/garagesubmittedbids';
import GarageSubBids from './Tables/GarageSubBids';
import { add_garage_bids, clear_garage_bids } from '../redux/Actions';
import { useSelector } from 'react-redux';
import axios from 'axios';
const GarageSubmittedBids = () => {
  const gid = useSelector((state:any) => state.userType.garageID);
  const [sampleData, setSampleData] = useState([]);
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
      setSampleData(response.data.filter((items:any) => items.garage === gid));
    })

  },[])
  return (
    <div className='mt-4 ml-4 h-screen'>
      <GarageSubBids data={sampleData}/>
    </div>
  )
}

export default GarageSubmittedBids
