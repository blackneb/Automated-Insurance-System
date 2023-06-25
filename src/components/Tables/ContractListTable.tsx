import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Button, Space, Table,Input, Modal } from 'antd';
import { Progress } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import {vehicles} from '../../data/vehicles';
import VehiclesModal from '../Modals/VehiclesModal';
const { Search } = Input;

interface DataType {
  vehicle: string;
  contract_date: string;
  contract_price: string;
  contract_type: string;
  expire_date:string;
  }

const ContractListTable = ({data}:any) => {
    const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value.toLowerCase());
  };
  

  const handleChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setSortedInfo(sorter as SorterResult<DataType>);
  };

  const onViewRow = (record:any) => {
    setOpenModal(true);
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Vehcile ID',
      dataIndex: 'vehicle',
      key: 'vehicle',
      sorter: (a, b) => a.vehicle.length - b.vehicle.length,
      sortOrder: sortedInfo.columnKey === 'vehicle' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Contract Date',
      dataIndex: 'contract_date',
      key: 'contract_date',
      sorter: (a, b) => a.contract_date.length - b.contract_date.length,
      sortOrder: sortedInfo.columnKey === 'contract_date' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Contract Price',
      dataIndex: 'contract_price',
      key: 'contract_price',
      sorter: (a, b) => a.contract_price.length - b.contract_price.length,
      sortOrder: sortedInfo.columnKey === 'contract_price' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Contract Type',
      dataIndex: 'contract_type',
      key: 'contract_type',
      sorter: (a, b) => a.contract_type.length - b.contract_type.length,
      sortOrder: sortedInfo.columnKey === 'contract_type' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Expire Date',
      dataIndex: 'expire_date',
      key: 'expire_date',
      sorter: (a, b) => a.expire_date.length - b.expire_date.length,
      sortOrder: sortedInfo.columnKey === 'expire_date' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (record) => <div><Button onClick={()=>{ onViewRow(record); }} type='link'>view</Button></div> ,
    },
  ];
  return (
    <div className='mx-4 mt-4 bg-white shadow rounded-md border-0 p-2 shadow'>
      <p>Contract List Table</p>
      <Modal
        title="Contract"
        style={{ top: 20 }}
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
        width={1200}
      >
        <VehiclesModal/>
      </Modal>
      <Input className='mb-2' placeholder="Search with proposer name" allowClear onChange={onChange} />
      <Table style={{minHeight:700}} scroll={{ x: 900 }}  columns={columns} dataSource={data} onChange={handleChange} />
    </div>
  )
}

export default ContractListTable
