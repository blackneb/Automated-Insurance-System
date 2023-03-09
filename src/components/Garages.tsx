import React,{ useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import TotalGarages from './Tables/TotalGarages';
import {garages} from '../data/garages';
import WorkingGarages from './Tables/WorkingGarages';


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
      <WorkingGarages data={data}/>
      <TotalGarages data={data}/>
    </div>
  )
}

export default Garages
