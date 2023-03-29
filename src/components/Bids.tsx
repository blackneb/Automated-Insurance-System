import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import {bids} from '../data/bids';
import AllVehiclesBid from './Tables/AllVehiclesBid';

const Bids = () => {
  const dispatch = useDispatch();  
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Bids",path:"/bids"},
  ]
  const data:any[] = bids;
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[])
  return (
    <div className='mt-4 ml-4 h-screen'>
      <AllVehiclesBid data={data}/>
    </div>
  )
}

export default Bids
