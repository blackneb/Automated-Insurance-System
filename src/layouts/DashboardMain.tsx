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
import AdminExperts from '../components/AdminExperts';
import ContractRenewal from '../components/ContractRenewal';
import ProposerContract from '../components/ProposerContract';
import ChangePassword from '../components/ChangePassword';
import { Breadcrumb } from 'antd';
import { useSelector } from 'react-redux/es/exports';


function DashboardMain() {
  const breadcrumb = useSelector((state:any) => state.breadcrumb);
  const MainRoutes = [
    {
      path:"/",
      element:<Home/>,
      auth:"",
    },
    {
      path:"/dashboard",
      element:<Dashboard/>,
      auth:"",
    },
    {
      path:"/profile",
      element:<Profile />,
      auth:"",
    },
    {
      path:"/login",
      element:<Login />,
      auth:"",
    },
    {
      path:"/vehicle",
      element:<Vehicle />,
      auth:"",
    },
    {
      path:"/reports",
      element:<Reports />,
      auth:"",
    },
    {
      path:"/users",
      element:<Users />,
      auth:"",
    },
    {
      path:"/Analytics",
      element:<Analytics />,
      auth:"",
    },
    {
      path:"/calander",
      element:<Calander />,
      auth:"",
    },
    {
      path:"/garages",
      element:<Garages />,
      auth:"",
    },
    {
      path:"/signup",
      element:<Signup/>,
      auth:"",
    },
    {
      path:"/newinsurance",
      element:<NewInsurance/>,
      auth:"",
    },
    {
      path:"/adminprogress",
      element:<AdminProgress/>,
      auth:"",
    },
    {
      path:"/newhealthinsurance",
      element:<NewHealthInsurance/>,
      auth:"",
    },
    {
      path:"/userclaims",
      element:<UserClaims/>,
      auth:"",
    },
    {
      path:"/userhistory",
      element:<UserHistory/>,
      auth:"",
    },
    {
      path:"/bids",
      element:<Bids/>,
      auth:"",
    },
    {
      path:"/garagevehicles",
      element:<GarageVehicles/>,
      auth:"",
    },
    {
      path:"/garagesubmittedbids",
      element:<GarageSubmittedBids/>,
      auth:"",
    },
    {
      path:"/expertnewinsurances",
      element:<ExpertNewInsurance/>,
      auth:"",
    },
    {
      path:"/expertclaims",
      element:<ExpertClaims/>,
      auth:"",
    },
    {
      path:"/expertprogress",
      element:<ExpertProgress/>,
      auth:"",
    },
    {
      path:"/adminexperts",
      element:<AdminExperts/>,
      auth:"",
    },
    {
      path:"/contractrenewal",
      element:<ContractRenewal/>,
      auth:"",
    },
    {
      path:"/proposercontract",
      element:<ProposerContract/>,
      auth:"",
    },
    {
      path:"/changepassword",
      element:<ChangePassword/>,
      auth:"",
    },
  ]
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
                {MainRoutes.map((item:any, index:any) => (
                  <Route key={item.path} path={item.path} element={item.element} />
                ))}
              </Routes>
          </div>
        </div>

      </div>
      
        </BrowserRouter>
    </div>
  );
}

export default DashboardMain;
