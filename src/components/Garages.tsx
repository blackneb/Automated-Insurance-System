import React,{ useEffect, useState } from 'react'
import { Card, Space, Button, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import TotalGarages from './Tables/TotalGarages';
import { PlusOutlined, PlusCircleOutlined } from '@ant-design/icons'
import {garages} from '../data/garages';
import WorkingGarages from './Tables/WorkingGarages';
import BidsOnVehicle from './Tables/BidsOnVehicle';
import CreateGarageAccount from './Modals/CreateGarageAccount';
import axios from 'axios';
import { add_items, clear_items } from '../redux/Actions';


const Garages = () => {
  const [openModal, setOpenModal] = useState(false);
  const [sampleData, setSampleData] = useState([]);
  const simpleBidData = useSelector((state:any) => state.items.items);
    const dispatch = useDispatch();
    const data:any[] = garages;
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Garages",path:"/garage"},
  ]

  const onViewRow = (record:any) => {
    setOpenModal(true);
  }

  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
    axios.get('http://ais.blackneb.com/api/ais/getgarages').then((response:any) => {
      //console.log(response.data);
      setSampleData(response.data);
    })
    axios.get("http://ais.blackneb.com/api/ais/getbid").then((response:any) => {
      const bids = response.data[0];
      const itemsInfo = response.data[1];
      dispatch(clear_items({}))
      for(let i=0;i<bids.length;i++){
        const itemsData = itemsInfo.filter((it:any) => it.bid === bids[i].id);
        const tempData = {
          id:bids[i].id,
          vehicle:bids[i].vehicle,
          items:itemsData
        }
        dispatch(add_items(tempData))
      }
    })
  },[])
  return (
    <div className='mt-4 ml-4 h-screen'>
      <div className='flex flex-col flex-wrap justify-center'>
        <div>
          <Button className='w-40' onClick={()=>setOpenModal(true)} icon={<PlusCircleOutlined/>} >Add New Garage</Button>
          <Modal
            title="Create Account For Garages"
            style={{ top: 20 }}
            open={openModal}
            onOk={() => setOpenModal(false)}
            onCancel={() => setOpenModal(false)}
            width={800}
          >
            <CreateGarageAccount/>
          </Modal>
        </div>
      <div className='flex flex-row flex-wrap justify-center'>
          <Card className='mx-4 my-4' size="small" title="Total Garages" style={{ width: 300 }}>
            <p>Number</p>
          </Card>
          <Card className='mx-4 my-4' size="small" title="Total Vehicles Under Garages" style={{ width: 300 }}>
            <p>Number</p>
          </Card>
          <Card className='mx-4 my-4' size="small" title="Current Bids To Maintained" style={{ width: 300 }}>
            <p>Number</p>
          </Card>
        </div>
        <div className='flex flex-row flex-wrap justify-center'>
          <BidsOnVehicle data={data}/>
          <WorkingGarages data={simpleBidData}/>
        </div>
      </div>
      <TotalGarages data={sampleData}/>
    </div>
  )
}

export default Garages
