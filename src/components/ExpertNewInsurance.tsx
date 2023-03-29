import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import {newinsurancevehicle} from '../data/newinsurancevehicle';
import UsersMyClaims from './Tables/UsersMyClaims';
import NewPendingIsurances from './Tables/NewPendingIsurances';

const ExpertNewInsurance = () => {
  const dispatch = useDispatch();  
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"New Insurance",path:"/userclaims"},
  ]
  const data:any[] = newinsurancevehicle;
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[])
  return (
    <div className='mt-4 ml-4 h-screen'>
      <NewPendingIsurances data={data}/>
    </div>
  )
}

export default ExpertNewInsurance
