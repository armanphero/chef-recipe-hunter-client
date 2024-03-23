import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.json';
// import Lottie from 'lottie-react'
import Lottie from 'lottie-react';
import { AuthContext } from '../provider/AuthProvider';
const Header = () => {
    const {user, signOutUser} = useContext(AuthContext);
    const [openMenu, setOpenMenu] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    // const user = {
    //     displayName: 'Arman',
    //     picture: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'
    // }
    console.log(user);
    return (

        <>
            <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Lottie animationData={logo} className='w-14' />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Chef Hunter</span>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                        {/*  */}
                        {
                            user ?
                                <>
                                    <div className='relative' onMouseEnter={() => setOpenProfile(true)} onMouseLeave={() => setOpenProfile(false)}>
                                        <img src={user.photoURL} className='p-1 w-12 h-12 text-center cursor-pointer bg-yellow-400 rounded-full' alt="" />

                                        <div id="userDropdown" className={`z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-2 right-12 ${openProfile ? '' : 'hidden'}`} onMouseEnter={() => setOpenProfile(true)} onMouseLeave={() => setOpenProfile(false)}>
                                            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                                <div className="font-medium truncate">{user.displayName}</div>
                                                <div className="font-medium truncate">{user.email}</div>
                                            </div>
                                            <div className="py-1">
                                                <button onClick={signOutUser} className="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" >Sign out</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                <Link to='/login' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</Link>
                        }


                        {/*  */}
                        <button data-collapse-toggle="navbar-sticky" onClick={() => setOpenMenu(!openMenu)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-sticky ${openMenu ? '' : 'hidden'}`}>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink
                                    to='/'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-blue-600"
                                            : "text-white hover:text-blue-600"
                                    }
                                >Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/blog'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-blue-600"
                                            : "text-white hover:text-blue-600"
                                    }
                                >Blog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/about'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-blue-600"
                                            : "text-white hover:text-blue-600"
                                    }
                                >About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    );
};

export default Header;