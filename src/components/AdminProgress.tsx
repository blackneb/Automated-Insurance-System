import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import {progress} from '../data/progress';
import ClaimProgress from './Tables/ClaimProgress';
import axios from 'axios';

const AdminProgress = () => {
  const screenHeight = window.innerHeight;
  const [sampleData, setSampleData] = useState([])
  const dispatch = useDispatch();  
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Progress",path:"/vehicle"},
  ]
  const data:any[] = progress;
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
    axios.get("https://ais.blackneb.com/api/ais/getclaims").then((response:any) => {
      setSampleData(response.data);
    })
  },[])
  return (
    <div className='mt-4 ml-4 h-screen'>
      <ClaimProgress data={sampleData}/>
    </div>
  )
}

export default AdminProgress
