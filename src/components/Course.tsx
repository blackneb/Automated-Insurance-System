import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';

const Course = () => {
  const dispatch = useDispatch();
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Course",path:"/course"},
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[])
  return (
    <div>
      
    </div>
  )
}

export default Course
