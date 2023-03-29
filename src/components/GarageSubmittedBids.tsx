import React,{ useEffect } from 'react'
import { Card, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import { garagesubmittedbids } from '../data/garagesubmittedbids';
import GarageSubBids from './Tables/GarageSubBids';
const GarageSubmittedBids = () => {
  const dispatch = useDispatch();
  const data:any[] = garagesubmittedbids;
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Submitted Bids",path:"/garage"},
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[])
  return (
    <div className='mt-4 ml-4 h-screen'>
      <GarageSubBids data={data}/>
    </div>
  )
}

export default GarageSubmittedBids
