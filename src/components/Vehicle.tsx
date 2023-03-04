import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';

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
      Vehicle
    </div>
  )
}

export default Vehicle
