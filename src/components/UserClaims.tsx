import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import {progress} from '../data/progress';
import ClaimProgress from './Tables/ClaimProgress';
import UsersMyClaims from './Tables/UsersMyClaims';

const UserClaims = () => {
  const dispatch = useDispatch();  
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"claims",path:"/userclaims"},
  ]
  const data:any[] = progress;
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[])
  return (
    <div className='mt-4 ml-4 h-screen'>
      <UsersMyClaims data={data}/>
    </div>
  )
}

export default UserClaims
