import React, { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import Vechicles from './Tables/Vechicles';
import {vehicles} from '../data/vehicles';


const Vehicle = () => {
  const dispatch = useDispatch();
  const data:any[] = vehicles;
  
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Vehicle",path:"/vehicle"},
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
    const unique = data.map((item) => item.VehicleBrand).filter((value, index, self) => self.indexOf(value) === index);
    const occurence = [];
    for (let i=0;i<unique.length;i++){
      const count = data.filter((items:any) => items.VehicleBrand === unique[i]).length;
      occurence.push(count);
    }
    console.log(data);
    console.log(unique);
    console.log(occurence);
  },[])

  return (
    <div className='mt-4 ml-4'>
      <Vechicles data={data}/>
    </div>
  )
}

export default Vehicle
