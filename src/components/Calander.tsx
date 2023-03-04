import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';

const Calander = () => {
  const dispatch = useDispatch();
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Calander",path:"/calander"},
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[breadcrumb,dispatch])
  return (
    <div className='mt-4 ml-4'>
      Calander
    </div>
  )
}

export default Calander
