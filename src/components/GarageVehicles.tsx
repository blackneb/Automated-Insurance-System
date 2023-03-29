import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import {vehicles} from '../data/vehicles';
import Vechicles from './Tables/Vechicles';
const GarageVehicles = () => {
  const dispatch = useDispatch();
  const data:any[] = vehicles;
  
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Vehicle",path:"/vehicle"},
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[])
  return (
    <div className='mt-4 ml-4 h-screen'>
      <Vechicles data={data}/>
    </div>
  )
}

export default GarageVehicles
