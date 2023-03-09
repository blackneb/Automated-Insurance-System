import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Button, Space, Table,Input } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import {vehicles} from '../../data/vehicles';
const { Search } = Input;

interface DataType{
  ID:string,
  fullName:string,
  userName:string,
  PhoneNumber:string,
  email:string,
  insuranceTypes:string,
  files:string,
}

const TotalUsers = () => {
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
      title: 'User Name',
      dataIndex: 'fullName',
      key: 'fullName',
      sorter: (a, b) => a.fullName.length - b.fullName.length,
      sortOrder: sortedInfo.columnKey === 'fullName' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Phone Number',
      dataIndex: 'PhoneNumber',
      key: 'PhoneNumber',
      sorter: (a, b) => a.PhoneNumber.length - b.PhoneNumber.length,
      sortOrder: sortedInfo.columnKey === 'PhoneNumber' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email.length - b.email.length,
      sortOrder: sortedInfo.columnKey === 'email' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Insurance Types',
      dataIndex: 'insuranceTypes',
      key: 'insuranceTypes',
      sorter: (a, b) => a.insuranceTypes.length - b.insuranceTypes.length,
      sortOrder: sortedInfo.columnKey === 'insuranceTypes' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Files',
      dataIndex: 'files',
      key: 'files',
      sorter: (a, b) => a.files.length - b.files.length,
      sortOrder: sortedInfo.columnKey === 'files' ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];
  return (
    <div>
      
    </div>
  )
}

export default TotalUsers
