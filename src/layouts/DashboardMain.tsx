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


function DashboardMain() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Sidebar/>
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
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default DashboardMain;
