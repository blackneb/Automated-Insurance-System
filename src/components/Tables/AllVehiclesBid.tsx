import React, {useState} from 'react'
import type { TableProps } from 'antd';
import { Button, Space, Table,Input, Tag, Modal } from 'antd';
import { Progress } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import {vehicles} from '../../data/vehicles';
import GarageBidModal from '../Modals/GarageBidModal';
const { Search } = Input;

interface DataType {
    id: string;
    vehicle: string;
    items:any;
  }


const AllVehiclesBid = ({data}:any) => {
    const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
    const [searchValue, setSearchValue] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [ selectedValue, setSelectedValue ] = useState();

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      console.log(e.target.value);
      setSearchValue(e.target.value.toLowerCase());
    };

    const onViewRow = (record:any) => {
      setSelectedValue(record);
      setOpenModal(true);
    }
    
  
    const handleChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
      console.log('Various parameters', pagination, filters, sorter);
      setSortedInfo(sorter as SorterResult<DataType>);
    };
    const columns: ColumnsType<DataType> = [
      {
        title: 'Bid ID',
        dataIndex: 'id',
        key: 'id',
        sorter: (a, b) => a.id.length - b.id.length,
        sortOrder: sortedInfo.columnKey === 'id' ? sortedInfo.order : null,
        ellipsis: true,
      },
      {
        title: 'Veicle ID',
        dataIndex: 'vehicle',
        key: 'vehicle',
        sorter: (a, b) => a.vehicle.length - b.vehicle.length,
        sortOrder: sortedInfo.columnKey === 'vehicle' ? sortedInfo.order : null,
        ellipsis: true,
      },
      {
        title: 'Tags',
        dataIndex: 'items',
        key: 'items',
        render: (items) => (
          <div>
            {items.map((tag:any) => (
              <Tag color="blue" key={tag.id}>
                {tag.item_name}
              </Tag>
            ))}
          </div>
        ),
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
      <p>Active Bids</p>
      <Modal
        title="Bid Modal"
        style={{ top: 20 }}
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
        width={1200}
      >
        <GarageBidModal data={selectedValue}/>
      </Modal>
      <Input className='mb-2' placeholder="Search with Client name" allowClear onChange={onChange} />
      <Table columns={columns} scroll={{ x: 900 }} style={{minHeight:700}} dataSource={data} onChange={handleChange} />
    </div>
  )
}

export default AllVehiclesBid
