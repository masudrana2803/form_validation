import React from 'react'
import {
  IoMailOutline,
  IoCallOutline,
  IoEyeOutline,
  IoEyeOffOutline,
  IoLogoFacebook
} from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';



const Trying = () => {
  return (
    <>
      <section className='min-h-screen flex justify-center items-center bg-blue-500'>
        <form>

        <div className='h-fit bg-white p-5 rounded-xl'>
          <div className='w-1/2 text-center mx-auto mb-8'>
          <h1 className='text-2xl font-bold'>Create an Account</h1>
          <p>Your are welcome</p>
          </div>

          <div className='flex gap-4'>
            {/* First Name */}
          <div>
            <p>First Name</p>
          <label className='flex items-center rounded-xl border-2 border-gray-300 gap-2 px-2 '>
            <FaRegUser/>
            <input type="text" placeholder='Enter your First Name' className='p-1 ' />
          </label>
          </div>

          {/* Last Name */}
          <div>
          <p>Last Name</p>
          <label className='flex items-center rounded-xl border-2 border-gray-300 gap-2 px-2'>
            <FaRegUser/>
            <input type="text" placeholder='Enter your Last Name' className='p-1' />
          </label>
          </div>
          </div>

          {/* Email */}
          <div>
          <p>Email</p>
          <label className='flex items-center rounded-xl border-2 border-gray-300 gap-2 px-2'>
            <MdEmail/>
            <input type="text" placeholder='Enter your Email' className='p-1' />
          </label>
          </div>

          {/* Password */}
          <div>
          <p>Password</p>
          <label className='flex items-center rounded-xl border-2 border-gray-300 gap-2 px-2'>
            <MdEmail/>
            <input type="password" placeholder='Enter your Email' className='p-1 w-full focus-red-500' />
            <IoEyeOffOutline/>
            <IoEyeOutline/>
          </label>
          </div>

          {/* Confirm Password */}
          <div>
          <p>Password</p>
          <label className='flex items-center rounded-xl border-2 border-gray-300 gap-2 px-2'>
            <MdEmail/>
            <input type="password" placeholder='Enter your Email' className='p-1 w-full focus-red-500' />
            <IoEyeOffOutline/>
          </label>
          </div>

          <button className='w-full mt-5 bg-green-400 rounded-2xl p-2'>Sign Up</button>
          <div className='flex w-1/2 mx-auto gap-3 mt-5'>
          <p>Already have an account?</p>
          <button className='font-bold active:scale-95'>LogIn</button>
          </div>
        </div>
        
        </form>
        
      </section>

    </>
  )
}

export default Trying