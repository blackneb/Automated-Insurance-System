import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import {progress} from '../data/progress';
import ActiveClaims from './Tables/ActiveClaims';
import { Card, Space } from 'antd';
import ClaimProgress from './Tables/ClaimProgress';


const ExpertClaims = () => {
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
      <div className='flex flex-row flex-wrap justify-center'>
        <div className='flex flex-col flex-wrap justify-center'>
            <Card className='mx-4 my-4' size="small" title="Total Claims" style={{ width: 300 }}>
              <p>Number</p>
            </Card>
            <Card className='mx-4 my-4' size="small" title="New Claims" style={{ width: 300 }}>
              <p>Number</p>
            </Card>
            <Card className='mx-4 my-4' size="small" title="On Progress" style={{ width: 300 }}>
              <p>Number</p>
            </Card>
            <Card className='mx-4 my-4' size="small" title="Closed Claims" style={{ width: 300 }}>
              <p>Number</p>
            </Card>
          </div>
        <ActiveClaims data={data}/>
        </div>
        <ClaimProgress data={data}/>
    </div>
  )
}

export default ExpertClaims
