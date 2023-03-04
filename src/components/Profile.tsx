import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';

const Profile = () => {
  const dispatch = useDispatch();
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Profile",path:"/profile"},
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[])
  return (
    <div className='mt-4 ml-4'>
      Profile
    </div>
  )
}

export default Profile
