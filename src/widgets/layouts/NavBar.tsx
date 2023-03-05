import React,{useState} from 'react'
import { Transition } from "@headlessui/react";
import { Link, useLocation } from 'react-router-dom';
import { Input, Avatar } from 'antd';

const { Search } = Input;



const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const onSearch = (value: string) => alert(value);
    const Menus = [
      { title: 'Home', path: '/' },
      { title: 'Calander', path:'/calander'},
      { title: 'Reports', path: '/reports'},
  ]



  return (
    <div>
        <div>
      <nav className="bg-white shadow-md">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start w-full h-16">
          <div className="flex-shrink-0">
                <p className='text-zinc-800 w-48'>LOGO</p>
              </div>
            <div className="flex items-center justify-start w-full">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 ">
                  <div>
                    {
                      Menus.map((items:any,index)=> (
                        <Link to={items.path} key={index} className={`hover:bg-slate-50 hover:shadow-lg text-zinc-800 px-3 py-2 rounded-md text-sm font-medium mx-2 ${
                          location.pathname === items.path &&
                          'bg-gray-50 dark:shadow-lg '
                      }`}>
                          {items.title}
                        </Link>
                      ))
                    }
                  </div>
                 
                </div>
              </div>
            </div>
            <div className='hidden md:flex justify-end ml-4'>
                    <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
                    <Avatar className='ml-8' style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>U</Avatar>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref:any) => (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {
                      Menus.map((items:any,index)=> (
                        <Link to={items.path} key={index} className={`hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium ${
                          location.pathname === items.path &&
                          'bg-gray-50 dark:shadow-lg '
                      }`}>
                          {items.title}
                        </Link>
                      ))
                    }
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
    </div>
  )
}

export default NavBar
