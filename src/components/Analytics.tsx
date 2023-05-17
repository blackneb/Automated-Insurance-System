import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import { Select } from 'antd';
import ChartUsersStatus from './Charts/ChartUsersStatus';
import ChartVehicleBrand from './Charts/ChartVehicleBrand';
import ClaimsChartYearly from './Charts/ClaimsChartYearly';
import MonthlyExpenduters from './Charts/MonthlyExpenduters';
import CoverRequiredChart from './Charts/CoverRequiredChart';
import VehiclePurposeChart from './Charts/VehiclePurposeChart';
import HorsePowerChart from './Charts/HorsePowerChart';
import ExtraFittingChart from './Charts/ExtraFittingChart';
import AccidentTypesChart from './Charts/AccidentTypesChart';
import YearAccidentChart from './Charts/YearAccidentChart';
import VehicleSpeedAccidentChart from './Charts/VehicleSpeedAccidentChart';
import RoadTypesAccidentChart from './Charts/RoadTypesAccidentChart';
import GenderAccidentChart from './Charts/GenderAccidentChart';
import CityAccidentChart from './Charts/CityAccidentChart';
import DeathChart from './Charts/DeathChart';
import AgeAccidentChart from './Charts/AgeAccidentChart';

const Analytics = () => {
  const dispatch = useDispatch();
  const [labels, setLabels] = useState("UserStatusChart");
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Analytics",path:"/analytics"},
  ]
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
    setLabels(value);
  };
  
  const onSearch = (value: string) => {
    console.log('search:', value);
  };
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[])

  return (
    <div className='mt-4 ml-4'>
      <Select
        showSearch
        placeholder="Select a Chart"
        optionFilterProp="children"
        style={{width:'400px'}}
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={[
          {
            value: 'UserStatusChart',
            label: 'User Status Chart',
          },
          {
            value: 'VehicleBrandChart',
            label: 'Vehicle Brand Chart',
          },
          {
            value: 'YearlyClaimsChart',
            label: 'Yearly Claims Chart',
          },
          {
            value: 'YearlyExpendituresChart',
            label: 'Yearly Expenditures Chart',
          },
          {
            value: 'CoverRequiredChart',
            label: 'Cover Required Chart',
          },
          {
            value: 'VehiclePurposeChart',
            label: 'Vehicle Purpose Chart',
          },
          {
            value: 'HorsePowerChart',
            label: 'Horse Power Chart',
          },
          {
            value: 'ExtraFittingChart',
            label: 'Extra Fitting Chart',
          },
          {
            value: 'AccidentTypesChart',
            label: 'Accident Types Chart',
          },
          {
            value: 'AgeAccidentChart',
            label: 'Age Accident Chart',
          },
          {
            value: 'YearAccidentChart',
            label: 'Year Accident Chart',
          },
          {
            value: 'VehicleSpeedAccidentChart',
            label: 'Vehicle Speed Accident Chart',
          },
          {
            value: 'RoadTypesAccidentChart',
            label: 'Road Types Accident Chart',
          },
          {
            value: 'GenderAccidentChart',
            label: 'Gender Accident Chart',
          },
          {
            value: 'CityAccidentChart',
            label: 'City Accident Chart',
          },
          {
            value: 'DeathChart',
            label: 'Death Chart',
          },
        ]}
      />
      <div className='flex justify-center'>
        {(()=>{
          switch(labels){
            case "UserStatusChart":
              return(
                <div>
                  <ChartUsersStatus/>
                </div>
              )
            case "VehicleBrandChart":
              return(
                <div>
                </div>
              )
            case "YearlyClaimsChart":
              return(
                <div>
                  <ClaimsChartYearly/>
                </div>
              )
            case "YearlyExpendituresChart":
              return(
                <div>
                  <MonthlyExpenduters/>
                </div>
              )
            case "CoverRequiredChart":
              return(
                <div>
                  <CoverRequiredChart/>
                </div>
              )
            case "VehiclePurposeChart":
              return(
                <div>
                  <VehiclePurposeChart/>
                </div>
              )
            case "HorsePowerChart":
              return(
                <div>
                  <HorsePowerChart/>
                </div>
              )
            case "ExtraFittingChart":
              return(
                <div>
                  <ExtraFittingChart/>
                </div>
              )
            case "AccidentTypesChart":
              return(
                <div>
                  <AccidentTypesChart/>
                </div>
              )
            case "AgeAccidentChart":
              return(
                <div>
                  <AgeAccidentChart/>
                </div>
              )
            case "YearAccidentChart":
              return(
                <div>
                  <YearAccidentChart/>
                </div>
              )
            case "VehicleSpeedAccidentChart":
              return(
                <div>
                  <VehicleSpeedAccidentChart/>
                </div>
              )
            case "RoadTypesAccidentChart":
              return(
                <div>
                  <RoadTypesAccidentChart/>
                </div>
              )
            case "GenderAccidentChart":
              return(
                <div>
                  <GenderAccidentChart/>
                </div>
              )
            case "CityAccidentChart":
              return(
                <div>
                  <CityAccidentChart/>
                </div>
              )
            case "DeathChart":
              return(
                <div>
                  <DeathChart/>
                </div>
              )          
          }
        })()}
      </div>
    </div>
  )
}

export default Analytics
