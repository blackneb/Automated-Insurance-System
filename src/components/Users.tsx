import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import ChartUsersStatus from './Charts/ChartUsersStatus';
import {users} from '../data/users';
import TotalUsers from './Tables/TotalUsers';


const Users = () => {
  const dispatch = useDispatch();
  const data:any[] = users;
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Users",path:"/users"},
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[])
  return (
    <div className='mt-4 ml-4 h-screen'>
      <ChartUsersStatus/>
      <TotalUsers data={data} />
    </div>
  )
}

export default Users
