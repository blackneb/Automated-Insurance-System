import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import {bids} from '../data/bids';
import AllVehiclesBid from './Tables/AllVehiclesBid';
import axios from 'axios';
import { add_items, clear_items } from '../redux/Actions';


const Bids = () => {
  const dispatch = useDispatch();
  const simpleData = useSelector((state:any) => state.items.items);
  console.log(simpleData)
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Bids",path:"/bids"},
  ]
  const data:any[] = bids;
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
    axios.get("http://ais.blackneb.com/api/ais/getbid").then((response:any) => {
      const bids = response.data[0];
      const itemsInfo = response.data[1];
      dispatch(clear_items({}))
      for(let i=0;i<bids.length;i++){
        const itemsData = itemsInfo.filter((it:any) => it.bid === bids[i].id);
        const tempData = {
          id:bids[i].id,
          vehicle:bids[i].vehicle,
          items:itemsData
        }
        dispatch(add_items(tempData))
      }
    })
  },[])
  return (
    <div className='mt-4 ml-4 h-screen'>
      <AllVehiclesBid data={simpleData}/>
    </div>
  )
}

export default Bids
