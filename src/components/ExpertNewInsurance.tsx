import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import {newinsurancevehicle} from '../data/newinsurancevehicle';
import UsersMyClaims from './Tables/UsersMyClaims';
import NewPendingIsurances from './Tables/NewPendingIsurances';
import axios from 'axios';
import { clear_vehicles, clear_vehicles_only, add_vehicles, only_vehicles } from '../redux/Actions';

const ExpertNewInsurance = () => {
  const dispatch = useDispatch();  
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"New Insurance",path:"/userclaims"},
  ]
  const data:any[] = newinsurancevehicle;
  const simpleData = useSelector((state:any) => state.vehiclesOnly.Vehicles);
  console.log(simpleData)
  useEffect(() => {
    const initialState = {}
    dispatch(add_breadcrumb(breadcrumb));
    axios.get("https://ais.blackneb.com/api/ais/getvehicles").then((response:any) => {
      const vehicles = response.data[0];
      const accidentBefore = response.data[1];
      const otherInsurances = response.data[2];
      const plate = response.data[3];
      dispatch(clear_vehicles(initialState));
      dispatch(clear_vehicles_only(initialState));
      for(let i = 0;i<vehicles.length;i++){
        dispatch(only_vehicles(vehicles[i]));
        const newForm = {
            vehicles:vehicles[i],
            accidentBefore:accidentBefore.filter((items:any) => items.vehicle === vehicles[i].id),
            otherInsurances:otherInsurances.filter((items:any) => items.vehicle === vehicles[i].id),
            plate:plate.filter((items:any) => items.vehicle === vehicles[i].id),
        }
        dispatch(add_vehicles(newForm))       
      }
    })
  },[])
  return (
    <div className='mt-4 ml-4 h-screen'>
      <NewPendingIsurances data={simpleData}/>
    </div>
  )
}

export default ExpertNewInsurance
