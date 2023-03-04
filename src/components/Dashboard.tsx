import React,{ useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Dashboard",path:"/dashboard"},
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[breadcrumb,dispatch])
  return (
    <div className='mt-4 ml-4'>
      Dashboard
    </div>
  )
}

export default Dashboard
