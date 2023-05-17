import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import {calander} from '../data/calander';
import CalanderTable from './Tables/CalanderTable';
import { CalanderChart } from './Charts/CalanderChart';


const Calander = () => {
  const dispatch = useDispatch();
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Calander",path:"/calander"},
  ]
  const data:any[] = calander;
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[])
  return (
    <div className='mt-4 ml-4 flex flex-row flex-wrap justify-evenly'>
      <CalanderTable data={data} />
      <div className=''>
       <CalanderChart/>
      </div>
    </div>
  )
}

export default Calander
