import React from 'react';
import Sidebar from '../widgets/layouts/SideBar';
import NavBar from '../widgets/layouts/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Dashboard from '../components/Dashboard'
import Course from '../components/Course'
import Profile from '../components/Profile'
import Login from '../components/Login'
import Vehicle from '../components/Vehicle';
import Reports from '../components/Reports';
import Users from '../components/Users';
import Analytics from '../components/Analytics';
import Calander from '../components/Calander';
import Garages from '../components/Garages';
import Signup from '../components/Signup';
import NewInsurance from '../components/NewInsurance';
import AdminProgress from '../components/AdminProgress';
import NewHealthInsurance from '../components/NewHealthInsurance';
import UserClaims from '../components/UserClaims';
import UserHistory from '../components/UserHistory';
import Bids from '../components/Bids';
import GarageVehicles from '../components/GarageVehicles';
import GarageSubmittedBids from '../components/GarageSubmittedBids';
import ExpertNewInsurance from '../components/ExpertNewInsurance';
import ExpertClaims from '../components/ExpertClaims';
import ExpertProgress from '../components/ExpertProgress';
import { Breadcrumb } from 'antd';
import { useSelector } from 'react-redux/es/exports';


function DashboardMain() {
  const breadcrumb = useSelector((state:any) => state.breadcrumb);
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <div className='flex flex-row'>
        <div>
          <Sidebar/>
        </div>
        <div className='w-full'>
          <div className='ml-4 mt-2'>
            <Breadcrumb>
              {
                breadcrumb.map((items:any,index:any) => (
                  <Breadcrumb.Item key={index}>{items.title}</Breadcrumb.Item>
                ))
              }              
            </Breadcrumb>
          </div>
          <div className="scrollbar scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100 " >
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/course' element={<Course />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/login' element={<Login />} />
                <Route path='/vehicle' element={<Vehicle />} />
                <Route path='/reports' element={<Reports />} />
                <Route path='/users' element={<Users />} />
                <Route path='/Analytics' element={<Analytics />} />
                <Route path='/calander' element={<Calander />} />
                <Route path='/garages' element={<Garages />} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/newinsurance' element={<NewInsurance/>} />
                <Route path='/adminprogress' element={ <AdminProgress/> } />
                <Route path='/newhealthinsurance' element={ <NewHealthInsurance/> } />
                <Route path='/userclaims' element={ <UserClaims/> } />
                <Route path='/userhistory' element={ <UserHistory/> } />
                <Route path='/bids' element={ <Bids/> } />
                <Route path='/garagevehicles' element={ <GarageVehicles/> } />
                <Route path='/garagesubmittedbids' element={ <GarageSubmittedBids/> } />
                <Route path='/expertnewinsurances' element={ <ExpertNewInsurance/> } />
                <Route path='/expertclaims' element={ <ExpertClaims/> } />
                <Route path='/expertprogress' element={ <ExpertProgress/> } />
              </Routes>
          </div>
        </div>

      </div>
      
        </BrowserRouter>
    </div>
  );
}

export default DashboardMain;
