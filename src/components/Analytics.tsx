import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import { Select } from 'antd';

const Analytics = () => {
  const dispatch = useDispatch();
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Analytics",path:"/analytics"},
  ]
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
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
            value: 'User Status Chart',
            label: 'User Status Chart',
          },
          {
            value: 'Vehicle Brand Chart',
            label: 'Vehicle Brand Chart',
          },
          {
            value: 'Yearly Claims Chart',
            label: 'Yearly Claims Chart',
          },
          {
            value: 'Yearly Expenditures Chart',
            label: 'Yearly Expenditures Chart',
          },
          {
            value: 'Cover Required Chart',
            label: 'Cover Required Chart',
          },
          {
            value: 'Vehicle Purpose Chart',
            label: 'Vehicle Purpose Chart',
          },
          {
            value: 'Horse Power Chart',
            label: 'Horse Power Chart',
          },
          {
            value: 'Extra Fitting Chart',
            label: 'Extra Fitting Chart',
          },
          {
            value: 'Accident Types Chart',
            label: 'Accident Types Chart',
          },
          {
            value: 'Age Accident Chart',
            label: 'Age Accident Chart',
          },
          {
            value: 'Year Accident Chart',
            label: 'Year Accident Chart',
          },
          {
            value: 'Vehicle Speed Accident Chart',
            label: 'Vehicle Speed Accident Chart',
          },
          {
            value: 'Road Types Accident Chart',
            label: 'Road Types Accident Chart',
          },
          {
            value: 'Gender Accident Chart',
            label: 'Gender Accident Chart',
          },
          {
            value: 'City Accident Chart',
            label: 'City Accident Chart',
          },
        ]}
      />
    </div>
  )
}

export default Analytics
