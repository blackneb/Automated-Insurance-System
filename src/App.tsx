import React from 'react';
import './App.css';
import Sidebar from './widgets/layouts/SideBar';
import NavBar from './widgets/layouts/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Course from './components/Course'
import Profile from './components/Profile'
import Login from './components/Login'


function App() {
  
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
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
