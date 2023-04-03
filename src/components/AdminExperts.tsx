import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_breadcrumb } from '../redux/Actions';
import { Button, Modal } from 'antd';
import { PlusOutlined, PlusCircleOutlined } from '@ant-design/icons'
import ExpertCreateAccount from './Modals/ExpertCreateAccount';
import {experts} from '../data/experts';
import AdminExpertsTable from './Tables/AdminExpertsTable';


const AdminExperts = () => {
  const [openModal, setOpenModal] = useState(false);
  const data:any[] = experts;
  const dispatch = useDispatch();
  const breadcrumb:any[] = [
    {title:"Home",path:"/"},
    {title:"Experts",path:"/course"},
  ]
  const onViewRow = (record:any) => {
    setOpenModal(true);
  }

  useEffect(() => {
    dispatch(add_breadcrumb(breadcrumb));
  },[])
  return (
    <div className='mt-4 ml-4'>
      <Button onClick={()=>setOpenModal(true)} icon={<PlusCircleOutlined/>}>Add New Expert</Button>
      <Modal
        title="Create Account For Experts"
        style={{ top: 20 }}
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
        width={800}
      >
        <ExpertCreateAccount/>
      </Modal>
      <AdminExpertsTable data={data} />
    </div>
  )
}

export default AdminExperts
