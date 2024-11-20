import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className=" border-gray-200 shadow-lg">
  <div className="lg:w-11/12 flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="flex items-center space-x-3 rtl:space-x-reverse ">
      <NavLink to="/">
        <img
          src="https://www.starbucks.in/assets/icon/logo.png"
          className="h-16"
          alt="Starbucks Logo"
        />
      </NavLink>
    </div>
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500  md:hidden "
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
    <div
      className="hidden w-full md:block md:w-auto md:flex-1 md:justify-between"
      id="navbar-default"
    >
      <div className=" font-medium flex flex-col md:justify-between p-4  md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:bg-white">
        <ul className="flex flex-col justify-start md:flex-row gap-6  md:pl-4 ">
          <li className="hover:text-green-600  flex items-center">
            <NavLink to="/menu">
              <strong className='tracking-wider '>MENU</strong>
            </NavLink>
          </li>
          <li className=" hover:text-green-600 flex items-center">
            <NavLink to="/rewards">
              <strong className='tracking-wider '>REWARDS</strong>
            </NavLink>
          </li>
          <li className="hover:text-green-600 flex items-center">
            <NavLink to="/giftcards">
              <strong className='tracking-wider'>GIFT CARDS</strong>
            </NavLink>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row">
          <div className="mr-[50px] flex gap-4 hover:text-green-600 font-semibold items-center ">
            <i className="fa-solid fa-location-dot my-auto text-xl" />
            <NavLink to="#" className="my-auto">
              Find a store
            </NavLink>
          </div>
          <div className="flex gap-4  my-4">
            <button className="px-4 py-1 rounded-[150px] border border-black hover:bg-gray-300">
              <NavLink to="/signin">Sign in</NavLink>
            </button>
            <button className="px-4 py-1 bg-black text-white rounded-[150px] hover:bg-gray-700">
              <NavLink to="/joinnow">Join now</NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar