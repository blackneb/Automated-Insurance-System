import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Button, Space, Table } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import {vehicles} from '../../data/vehicles'

interface DataType {
  vehicleType: string;
  vehiclePlate: string;
  vehicleOwner: string;
  VehicleBrand: string;
  vehicleColor:string;
}

const Vechicles = () => {
  const data:any[] = vehicles;
  console.log(data);

  const [filteredInfo, setFilteredInfo] = useState<Record<string, FilterValue | null>>({});
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});

  const handleChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter as SorterResult<DataType>);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'age',
    });
  };


  const columns: ColumnsType<DataType> = [
    {
      title: 'Vehcile Type',
      dataIndex: 'vehicleType',
      key: 'Key',
      filters: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' },
      ],
      filteredValue: filteredInfo.vehicleType || null,
      onFilter: (value: any, record) => record.vehicleType.includes(value),
      sorter: (a, b) => a.vehicleType.length - b.vehicleType.length,
      sortOrder: sortedInfo.columnKey === 'vehicletype' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Vehcile Plate',
      dataIndex: 'vehiclePlate',
      key: 'Key',
      filters: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' },
      ],
      filteredValue: filteredInfo.vehiclePlate || null,
      onFilter: (value: any, record) => record.vehiclePlate.includes(value),
      sorter: (a, b) => a.vehiclePlate.length - b.vehiclePlate.length,
      sortOrder: sortedInfo.columnKey === 'vehiclePlate' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Vehcile Owner',
      dataIndex: 'vehicleOwner',
      key: 'Key',
      filters: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' },
      ],
      filteredValue: filteredInfo.vehicleOwner || null,
      onFilter: (value: any, record) => record.vehicleOwner.includes(value),
      sorter: (a, b) => a.vehicleOwner.length - b.vehicleOwner.length,
      sortOrder: sortedInfo.columnKey === 'vehicleOwner' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Vehcile Brand',
      dataIndex: 'VehicleBrand',
      key: 'Key',
      filters: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' },
      ],
      filteredValue: filteredInfo.VehicleBrand || null,
      onFilter: (value: any, record) => record.VehicleBrand.includes(value),
      sorter: (a, b) => a.VehicleBrand.length - b.VehicleBrand.length,
      sortOrder: sortedInfo.columnKey === 'VehicleBrand' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Vehcile Color',
      dataIndex: 'vehicleColor',
      key: 'Key',
      filters: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' },
      ],
      filteredValue: filteredInfo.vehicleColor || null,
      onFilter: (value: any, record) => record.vehicleColor.includes(value),
      sorter: (a, b) => a.vehicleColor.length - b.vehicleColor.length,
      sortOrder: sortedInfo.columnKey === 'vehicleColor' ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];


  return (
    <div className='mx-4'>
      <Table columns={columns} dataSource={data} onChange={handleChange} />
    </div>
  )
}

export default Vechicles
