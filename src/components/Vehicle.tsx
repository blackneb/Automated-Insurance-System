import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import Vechicles from './Tables/Vechicles';

const Vehicle = () => {
  const dispatch = useDispatch();
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Vehicle",path:"/vehicle"},
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[])
  return (
    <div className='mt-4 ml-4'>
      <Vechicles/>
    </div>
  )
}

export default Vehicle
