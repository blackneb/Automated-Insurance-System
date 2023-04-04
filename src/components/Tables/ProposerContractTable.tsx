import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Button, Space, Table,Input, Modal } from 'antd';
import { Progress } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import {vehicles} from '../../data/vehicles';
import VehiclesModal from '../Modals/VehiclesModal';
const { Search } = Input;

interface DataType {
    vehicleId: string;
    proposerName: string;
    contractPrice: string;
    contractType: string;
    expireDate:string;
  }

const ProposerContractTable = ({data}:any) => {
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
        dataIndex: 'vehicleId',
        key: 'vehicleId',
        sorter: (a, b) => a.vehicleId.length - b.vehicleId.length,
        sortOrder: sortedInfo.columnKey === 'vehicleId' ? sortedInfo.order : null,
        ellipsis: true,
      },
      {
        title: 'Proposer Name',
        dataIndex: 'proposerName',
        key: 'proposerName',
        sorter: (a, b) => a.proposerName.length - b.proposerName.length,
        sortOrder: sortedInfo.columnKey === 'proposerName' ? sortedInfo.order : null,
        ellipsis: true,
      },
      {
        title: 'Contract Price',
        dataIndex: 'contractPrice',
        key: 'contractPrice',
        sorter: (a, b) => a.contractPrice.length - b.contractPrice.length,
        sortOrder: sortedInfo.columnKey === 'contractPrice' ? sortedInfo.order : null,
        ellipsis: true,
      },
      {
        title: 'Contract Type',
        dataIndex: 'contractType',
        key: 'contractType',
        sorter: (a, b) => a.contractType.length - b.contractType.length,
        sortOrder: sortedInfo.columnKey === 'contractType' ? sortedInfo.order : null,
        ellipsis: true,
      },
      {
        title: 'Expire Date',
        dataIndex: 'expireDate',
        key: 'expireDate',
        sorter: (a, b) => a.expireDate.length - b.expireDate.length,
        sortOrder: sortedInfo.columnKey === 'expireDate' ? sortedInfo.order : null,
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
      <Table style={{minHeight:700}} scroll={{ x: 900 }}  columns={columns} dataSource={data.filter((items:any) => items.proposerName.toLowerCase().includes(searchValue))} onChange={handleChange} />
    </div>
  )
}

export default ProposerContractTable
