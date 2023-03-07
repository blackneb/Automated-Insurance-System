import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Button, Space, Table,Input } from 'antd';
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

const OnClaimVehicles = ({data}:any) => {
    const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  const [searchValue, setSearchValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };
  

  const handleChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setSortedInfo(sorter as SorterResult<DataType>);
  };

  const columns: ColumnsType<DataType> = [
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
  ];

  return (
    <div className='mx-4 border-0 p-2 bg-white mt-4 shadow rounded-md h-96 scrollbar scrollbar-thumb-gray-200 scrollbar-track-gray-100'>
      <p>Vehicles On Claiming</p>
      <Input className='mb-2' placeholder="Search with Plate number" allowClear onChange={onChange} />
      <Table style={{maxWidth:450 }} columns={columns} dataSource={data.filter((items:any) => items.vehiclePlate.includes(searchValue))} onChange={handleChange} />
    </div>
  )
}

export default OnClaimVehicles
