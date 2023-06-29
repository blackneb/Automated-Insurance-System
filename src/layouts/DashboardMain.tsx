import React from 'react';
import Sidebar from '../widgets/layouts/SideBar';
import NavBar from '../widgets/layouts/NavBar';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
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
import VerifyPayment from '../components/VerifyPayment';
import PageNotFound from '../components/PageNotFound';
import { Breadcrumb } from 'antd';
import { useSelector } from 'react-redux/es/exports';


function DashboardMain() {
  const breadcrumb = useSelector((state:any) => state.breadcrumb);
  const userType = useSelector((state:any) => state.userType.accounttype);
  const MainRoutes = [
    {
      path:"/",
      element:<Home/>,
      auth:"all",
    },
    {
      path:"/dashboard",
      element:<Dashboard/>,
      auth:"all",
    },
    {
      path:"/profile",
      element:<Profile />,
      auth:"all",
    },
    {
      path:"/login",
      element:<Login />,
      auth:"all",
    },
    {
      path:"/vehicle",
      element:<Vehicle />,
      auth:"admin",
    },
    {
      path:"/reports",
      element:<Reports />,
      auth:"all",
    },
    {
      path:"/users",
      element:<Users />,
      auth:"admin",
    },
    {
      path:"/Analytics",
      element:<Analytics />,
      auth:"all",
    },
    {
      path:"/calander",
      element:<Calander />,
      auth:"all",
    },
    {
      path:"/garages",
      element:<Garages />,
      auth:"expert",
    },
    {
      path:"/signup",
      element:<Signup/>,
      auth:"all",
    },
    {
      path:"/newinsurance",
      element:<NewInsurance/>,
      auth:"proposer",
    },
    {
      path:"/adminprogress",
      element:<AdminProgress/>,
      auth:"admin",
    },
    {
      path:"/newhealthinsurance",
      element:<NewHealthInsurance/>,
      auth:"proposer",
    },
    {
      path:"/userclaims",
      element:<UserClaims/>,
      auth:"proposer",
    },
    {
      path:"/userhistory",
      element:<UserHistory/>,
      auth:"proposer",
    },
    {
      path:"/bids",
      element:<Bids/>,
      auth:"garage",
    },
    {
      path:"/garagevehicles",
      element:<GarageVehicles/>,
      auth:"garage",
    },
    {
      path:"/garagesubmittedbids",
      element:<GarageSubmittedBids/>,
      auth:"garage",
    },
    {
      path:"/expertnewinsurances",
      element:<ExpertNewInsurance/>,
      auth:"expert",
    },
    {
      path:"/expertclaims",
      element:<ExpertClaims/>,
      auth:"expert",
    },
    {
      path:"/verifypayment",
      element:<VerifyPayment/> ,
      auth:"all",
    },
    {
      path:"/expertprogress",
      element:<ExpertProgress/>,
      auth:"expert",
    },
    {
      path:"/adminexperts",
      element:<AdminExperts/>,
      auth:"admin",
    },
    {
      path:"/contractrenewal",
      element:<ContractRenewal/>,
      auth:"expert",
    },
    {
      path:"/proposercontract",
      element:<ProposerContract/>,
      auth:"proposer",
    },
    {
      path:"/changepassword",
      element:<ChangePassword/>,
      auth:"all",
    },
  ]
  return (
    <div className="App">
      <HashRouter>
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
                <Route path="*" element={<PageNotFound/>} />
                {MainRoutes.filter((items:any) => items.auth === userType || items.auth === "all").map((item:any, index:any) => (
                  <Route key={item.path} path={item.path} element={item.element} />
                ))}
              </Routes>
          </div>
        </div>

      </div>
      
        </HashRouter>
    </div>
  );
}

export default DashboardMain;
