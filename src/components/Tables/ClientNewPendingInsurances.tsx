import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Button, Space, Table,Input, Modal } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import {vehicles} from '../../data/vehicles';
import NewInsuranceVehicleModal from '../Modals/NewInsuranceVehicleModal';
import ClientNewInsuranceVehicleModal from '../Modals/ClientNewInsuranceVehicleModal';
const { Search } = Input;

interface DataType {
  contract_date: string;
  expire_date: string;
  contract_type: string;
  vehicle: string;
  contract_price:string;
}

const ClientNewPendingIsurances = ({data}:any) => {
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedvalue, setSelectedValue] = useState();
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value.toLowerCase());
  };
  

  const handleChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setSortedInfo(sorter as SorterResult<DataType>);
  };

  const onViewRow = (record:any) => {
    setSelectedValue(record);
    setOpenModal(true);
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Contract Date',
      dataIndex: 'contract_date',
      key: 'contract_date',
      sorter: (a, b) => a.contract_date.length - b.contract_date.length,
      sortOrder: sortedInfo.columnKey === 'contract_date' ? sortedInfo.order : null,
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
      title: 'Contract Type',
      dataIndex: 'contract_type',
      key: 'contract_type',
      sorter: (a, b) => a.contract_type.length - b.contract_type.length,
      sortOrder: sortedInfo.columnKey === 'contract_type' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Vehicle ID',
      dataIndex: 'vehicle',
      key: 'vehicle',
      sorter: (a, b) => a.vehicle.length - b.vehicle.length,
      sortOrder: sortedInfo.columnKey === 'vehicle' ? sortedInfo.order : null,
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
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (record) => <div><Button onClick={()=>{ onViewRow(record); }} type='link'>view</Button></div> ,
    },
  ];
  return (
    <div className='mx-4 mt-4 bg-white shadow rounded-md border-0 p-2 shadow'>
      <Modal
        title="Vehicles"
        style={{ top: 20 }}
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
        width={1200}
      >
        <ClientNewInsuranceVehicleModal data={selectedvalue}/>
      </Modal>
      <p>New pending vehicle insurances</p>
      <Input className='mb-2' placeholder="Search with Proposer Name" allowClear onChange={onChange} />
      <Table columns={columns} scroll={{ x: 900 }} style={{minHeight:700}} dataSource={data} onChange={handleChange} />
    </div>
  )
}

export default ClientNewPendingIsurances
