import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import {progress} from '../data/progress';
import ClaimProgress from './Tables/ClaimProgress';
import UsersMyClaims from './Tables/UsersMyClaims';
import VehicleClaimModal from './Modals/VehicleClaimModal';
import HealthClaimModal from './Modals/HealthClaimModal';
import { Button, Modal } from 'antd';
import axios from 'axios';

const UserClaims = () => {
  const dispatch = useDispatch();
  const [openModalVehicle, setOpenModalVehicle] = useState(false);
  const [openModalHealth, setOpenModalHealth] = useState(false);  
  const [sampleData, setSampleData] = useState([]);
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"claims",path:"/userclaims"},
  ]
  const data:any[] = progress;
  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
    axios.get('http://ais.blackneb.com/api/ais/getclaims').then((response:any) => {
      console.log(response.data);
      setSampleData(response.data);
    })
  },[])
  return (
    <div className='mt-4 ml-4 h-screen'>
      <div className='flex flex-row justify-evenly'>
      <Modal
        title="Claim For Vehicle"
        style={{ top: 20 }}
        open={openModalVehicle}
        onOk={() => setOpenModalVehicle(false)}
        onCancel={() => setOpenModalVehicle(false)}
        width={1200}
      >
        <VehicleClaimModal />
      </Modal>
      <Modal
        title="Claim For Health"
        style={{ top: 20 }}
        open={openModalHealth}
        onOk={() => setOpenModalHealth(false)}
        onCancel={() => setOpenModalHealth(false)}
        width={1200}
      >
        < HealthClaimModal />
      </Modal>
        <Button onClick={()=>setOpenModalVehicle(true)}>Vehicle Claim</Button>
        <Button onClick={()=>setOpenModalHealth(true)}>Health Claim</Button>
      </div>
      <UsersMyClaims data={sampleData}/>
    </div>
  )
}

export default UserClaims
