import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Button, Space, Table,Input } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
const { Search } = Input;

interface DataType{
    price:string,
    bid:string,
    item_name:string
  }

const GarageSubBids = ({data}:any) => {
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
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price.length - b.price.length,
      sortOrder: sortedInfo.columnKey === 'price' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Bid Id',
      dataIndex: 'bid',
      key: 'bid',
      sorter: (a, b) => a.bid.length - b.bid.length,
      sortOrder: sortedInfo.columnKey === 'bid' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Items',
      dataIndex: 'item_name',
      key: 'item_name',
      sorter: (a, b) => a.item_name.length - b.item_name.length,
      sortOrder: sortedInfo.columnKey === 'item_name' ? sortedInfo.order : null,
      ellipsis: true,
    }
  ];
  return (
    <div className='mx-4 mt-4 bg-white shadow rounded-md border-0 p-2 shadow'>
      <p>Submitted Bids</p>
      <Input className='mb-2' placeholder="Search With Bid Id" allowClear onChange={onChange} />
      <Table columns={columns} scroll={{ x: 900 }} style={{minHeight:700}} dataSource={data.filter((items:any) => items.bid.toString().includes(searchValue))} onChange={handleChange} />
    </div>
  )
}

export default GarageSubBids
