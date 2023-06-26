import React, { useEffect,useState } from 'react'
import { Card, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import Vechicles from './Tables/Vechicles';
import {vehicles} from '../data/vehicles';
import ChartVehicleBrand from './Charts/ChartVehicleBrand';
import OnClaimVehicles from './Tables/OnClaimVehicles';
import { clear_vehicles, clear_vehicles_only, add_vehicles, only_vehicles } from '../redux/Actions';
import axios from 'axios';



const Vehicle = () => {
  const dispatch = useDispatch();
  const [unique, setUnique] = useState<string[]>([]);
  const [occurence, setOccurence] = useState<number[]>([]);
  const simpleData = useSelector((state:any) => state.vehiclesOnly.Vehicles);
  const data:any[] = vehicles;
  
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Vehicle",path:"/vehicle"},
  ]
  useEffect(() => {
    const initialState = {}
    dispatch(add_breadcrumb(breadcrumb));
    const unique = data.map((item) => item.VehicleBrand).filter((value, index, self) => self.indexOf(value) === index);
    setUnique(unique);
    const occurence = [];
    for (let i=0;i<unique.length;i++){
      const count = data.filter((items:any) => items.VehicleBrand === unique[i]).length;
      occurence.push(count);
    }
    setOccurence(occurence);

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
      <div className='flex flex-row flex-wrap justify-center'>
        <ChartVehicleBrand unique={unique} occurence={occurence}/>
        <div>
          <Card className='mx-4 my-4' size="small" title="Total Vehicles" style={{ width: 300 }}>
            <p>Number</p>
          </Card>
          <Card className='mx-4 my-4' size="small" title="Active Claims" style={{ width: 300 }}>
            <p>Number</p>
          </Card>
          <Card className='mx-4 my-4' size="small" title="Outdated Vehicles" style={{ width: 300 }}>
            <p>Number</p>
          </Card>
        </div>
        
      </div>
      
      <Vechicles data={simpleData}/>
    </div>
  )
}

export default Vehicle
