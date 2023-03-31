import React, { useEffect,useState } from 'react'
import { Card, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import Vechicles from './Tables/Vechicles';
import {vehicles} from '../data/vehicles';
import ChartVehicleBrand from './Charts/ChartVehicleBrand';
import OnClaimVehicles from './Tables/OnClaimVehicles';


const Vehicle = () => {
  const dispatch = useDispatch();
  const [unique, setUnique] = useState<string[]>([]);
  const [occurence, setOccurence] = useState<number[]>([]);
  const data:any[] = vehicles;
  
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Vehicle",path:"/vehicle"},
  ]
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
    const unique = data.map((item) => item.VehicleBrand).filter((value, index, self) => self.indexOf(value) === index);
    setUnique(unique);
    const occurence = [];
    for (let i=0;i<unique.length;i++){
      const count = data.filter((items:any) => items.VehicleBrand === unique[i]).length;
      occurence.push(count);
    }
    setOccurence(occurence);
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
        <OnClaimVehicles data={data}/>
      </div>
      
      <Vechicles data={data}/>
    </div>
  )
}

export default Vehicle
