import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { BsArrowLeftCircle } from 'react-icons/bs'
import { AiFillPieChart } from 'react-icons/ai'
import { SiFuturelearn } from 'react-icons/si'
import { SiOpenaccess,SiAcclaim } from 'react-icons/si'
import { CgProfile } from 'react-icons/cg'
import { AiFillCar } from 'react-icons/ai'
import { GiMechanicGarage } from 'react-icons/gi'
import { HiDocumentAdd } from 'react-icons/hi'
import { GrUserExpert } from 'react-icons/gr'
import { PlusOutlined, PercentageOutlined,HistoryOutlined,ProfileOutlined,FileProtectOutlined } from '@ant-design/icons'

const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const location = useLocation()
    const [userType, setUserType] = useState("expert");
    const Menus = [
        { title: 'Vehicle', path:'/vehicle', src:<AiFillCar/>, auth:"admin"},
        { title: 'Analytics', path: '/analytics', src: <SiFuturelearn />, auth:"admin" },
        { title: 'Users', path: '/users', src: <CgProfile />, auth:"admin" },
        { title: 'Garages',path:'/garages',src:<GiMechanicGarage/>, gap: 'false', auth:"expert"},
        { title: 'Experts', path:'/adminexperts', src:<GrUserExpert/>, auth:"admin" },
        { title: 'Progress', path: '/adminprogress', src: <PercentageOutlined />, auth:"admin" },
        { title: 'New Vehicle Insurance', path: '/newinsurance', src: <PlusOutlined />, auth:"proposer"},
        { title: 'New Health Insurance', path: '/newhealthinsurance', src: <PlusOutlined />, auth:"proposer"},
        { title: 'My Claims', path: '/userclaims', src: <SiAcclaim />, auth:"proposer" },
        { title: 'History', path: '/userhistory', src: <HistoryOutlined />, auth:"proposer" },
        { title: 'Bids', path: '/bids', src: <ProfileOutlined />, auth:"garage" },
        { title: 'Vehicles', path:'/garagevehicles', src:<AiFillCar/>, auth:"garage"},
        { title: 'Submitted Bids', path:'/garagesubmittedbids', src:<FileProtectOutlined />, auth:"garage"},
        { title: 'New Insurances', path:'/expertnewinsurances', src:<HiDocumentAdd/>, auth:"expert"},
        { title: 'Claims', path: '/expertclaims', src: <SiAcclaim />, auth:"expert" },
    ]
    const sideBarLists = Menus.filter((items:any) => items.auth === userType);

    return (
        <>
            <div
                className={`${
                    open ? 'w-60' : 'w-fit'
                } hidden sm:block relative h-full duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-white`}
            >
                <BsArrowLeftCircle
                    className={`${
                        !open && 'rotate-180'
                    } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-white`}
                    onClick={() => setOpen(!open)}
                />
                <Link to='/'>
                    <div className={`flex ${'gap-x-4'} items-center`}>
                        {true && (
                            <span className='text-xl font-medium whitespace-nowrap dark:text-zinc-700'>
                                AIS
                            </span>
                        )}
                    </div>
                </Link>

                <ul className='pt-6'>
                    {sideBarLists.map((menu, index) => (
                        <Link to={menu.path} key={index}>
                            <li
                                className={`flex items-center gap-x-2 p-1 text-base font-normal rounded-lg cursor-pointer dark:text-zinc-700 hover:bg-gray-200 dark:hover:bg-white dark:hover:shadow-lg
                        ${menu.gap ? 'mt-4' : 'mt-2'} ${
                                    location.pathname === menu.path &&
                                    'bg-gray-50 dark:shadow-lg '
                                }`}
                            >
                                <span className='text-2xl'>{menu.src}</span>
                                <span
                                    className={`${
                                        !open && 'hidden'
                                    } origin-left duration-300 hover:block`}
                                >
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Sidebar