import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';

const Users = () => {
  const dispatch = useDispatch();
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Users",path:"/users"},
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[breadcrumb,dispatch])
  return (
    <div className='mt-4 ml-4'>
      Users
    </div>
  )
}

export default Users
