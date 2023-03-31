import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Button, Space, Table,Input } from 'antd';
import { Progress } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import {vehicles} from '../../data/vehicles';
const { Search } = Input;

interface DataType {
  vehicleType: string;
  vehiclePlate: string;
  vehicleOwner: string;
  VehicleBrand: string;
  vehicleColor:string;
  key:string
}

const Vechicles = ({data}:any) => {
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  const [searchValue, setSearchValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value.toLowerCase());
  };
  

  const handleChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setSortedInfo(sorter as SorterResult<DataType>);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Vehcile Type',
      dataIndex: 'vehicleType',
      key: 'vehicleType',
      sorter: (a, b) => a.vehicleType.length - b.vehicleType.length,
      sortOrder: sortedInfo.columnKey === 'vehicleType' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Vehcile Plate',
      dataIndex: 'vehiclePlate',
      key: 'vehiclePlate',
      sorter: (a, b) => a.vehiclePlate.length - b.vehiclePlate.length,
      sortOrder: sortedInfo.columnKey === 'vehiclePlate' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Vehcile Owner',
      dataIndex: 'vehicleOwner',
      key: 'vehicleOwner',
      sorter: (a, b) => a.vehicleOwner.length - b.vehicleOwner.length,
      sortOrder: sortedInfo.columnKey === 'vehicleOwner' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Vehcile Brand',
      dataIndex: 'VehicleBrand',
      key: 'VehicleBrand',
      sorter: (a, b) => a.VehicleBrand.length - b.VehicleBrand.length,
      sortOrder: sortedInfo.columnKey === 'VehicleBrand' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Vehcile Color',
      dataIndex: 'vehicleColor',
      key: 'vehicleColor',
      sorter: (a, b) => a.vehicleColor.length - b.vehicleColor.length,
      sortOrder: sortedInfo.columnKey === 'vehicleColor' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <div><Button type='link'>view</Button></div> ,
    },
  ];


  return (
    <div className='mx-4 mt-4 bg-white shadow rounded-md border-0 p-2 shadow'>
      <p>Total Vehicles</p>
      <Input className='mb-2' placeholder="Search with Plate number" allowClear onChange={onChange} />
      <Table columns={columns} dataSource={data.filter((items:any) => items.vehiclePlate.toLowerCase().includes(searchValue))} onChange={handleChange} />
    </div>
  )
}

export default Vechicles
