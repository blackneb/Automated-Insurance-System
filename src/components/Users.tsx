import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import ChartUsersStatus from './Charts/ChartUsersStatus';
import {users} from '../data/users';
import TotalUsers from './Tables/TotalUsers';
import OnClaimUsers from './Tables/OnClaimUsers';
import axios from 'axios';


const Users = () => {
  const dispatch = useDispatch();
  const [simpleData, setSimpleData] = useState([])
  const data:any[] = users;
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Users",path:"/users"},
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
    axios.get("http://ais.blackneb.com/api/ais/getproposers").then((response:any) => {
        setSimpleData(response.data)
    })
  },[])
  return (
    <div className='mt-4 ml-4 h-screen'>
      <div className='flex flex-row flex-wrap justify-center'>
        <ChartUsersStatus/>
        <OnClaimUsers data={data} />
      </div>
      <div className='flex justify-center'>
        <TotalUsers data={simpleData} />
      </div>
    </div>
  )
}

export default Users
