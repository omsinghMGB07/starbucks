import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

const Signin = () => {
  return (
    <div>
        
        <div className=' p-5'>
          <div className=' mx-auto w-[448px] p-5'>
            <h1 className='text-center font-semibold text-3xl p-5 mb-10'>Sign in or create an account</h1>
            <div className='w-full py-5 px-6 rounded-xl shadow-lg'>
              <h1 className='text-sm my-2'>*indicates required field</h1>
              <div class="relative my-4">
                <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-800 focus:outline-none focus:ring-0 focus:border-green-800 peer" placeholder=" " />
                <label for="floating_outlined" class="absolute text-md font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-800 peer-focus:dark:text-green-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">* Username or email address</label>
              </div>
              <div class="relative my-4">
                <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-800 focus:outline-none focus:ring-0 focus:border-green-800 peer" placeholder=" " />
                <label for="floating_outlined" class="absolute text-md font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-800 peer-focus:dark:text-green-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">* Password</label>
              </div>
              <div className='flex gap-2 my-4'>
                {/* <input type='checkbox' checked className='text-green-800 h-6 w-6 rounded-lg' />
                <h1 className='text-sm my-auto'>Keep me signed in.</h1> */}
                <div class="flex items-center">
                  <input checked id="checked-checkbox" type="checkbox" value="" class="w-5 h-5 text-green-800 bg-gray-100 border-gray-300 rounded " />
                  <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Keep me signed in.</label>
                </div>
                <NavLink className='underline hover:no-underline block font-semibold text-green-800'>Details</NavLink>
              </div>
              <NavLink className='underline mb-2 hover:no-underline block font-semibold text-green-800'>Forgot your username?</NavLink>
              <NavLink className='underline mb-2 hover:no-underline block font-semibold text-green-800'>Forgot your password?</NavLink>
              <div className='flex justify-end'>
                <button className="px-6 py-4 font-semibold my-5 text-white bg-green-800 rounded-[150px] shadow-md shadow-gray-400">
                  <NavLink to="#">Sign in</NavLink>
                </button>
              </div>
            </div>
            <div className='w-full mx-auto flex flex-col justify-center items-center text-center p-10 gap-3 mt-10'>
              <h1 className='text-green-800 font-semibold text-center'>JOIN STARBUCKS® REWARDS</h1>
              <p className='w-9/12'>Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.</p>
              <button className="px-4 py-1 text-green-800 font-semibold border border-green-800 rounded-[150px] hover:bg-[#0000001a]">
              <NavLink to="/joinnow">Join now</NavLink>
              </button>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Signin