import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa6";
import { IoMailOutline, IoCallOutline, IoEyeOutline,IoLogoFacebook } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

const FormValidation = () => {






  return (
    <>
      <section className='bg-red-300 dark:bg-gray-900 flex justify-center items-center min-h-screen px-4'>
        <form className='bg-[#FFFFFF] dark:bg-gray-800 rounded-2xl p-6 sm:p-10 w-full max-w-xl'>

          {/* Heading */}
          <div className='dark:bg-gray-700 text-white flex flex-col justify-center items-center mb-6 rounded-md py-2'>
            <h2 className="text-xl font-popin text-hclr font-bold">Create Account</h2>
            <h2 className="text-sm text-[#7E7E8F]">You are Welcome</h2>
          </div>

          {/* Name */}
          <h3 className="text-gray-800 dark:text-gray-200 mb-2">Your name</h3>
          <div className='flex flex-col sm:flex-row gap-4 mb-5'>
            <div className='bg-yellow-100 dark:bg-gray-700 border rounded-md flex items-center gap-2 px-3 py-2 w-full'>
              <input type="text" placeholder='First name' className='bg-transparent w-full text-black dark:text-white outline-none' />
              <FaRegUser className="text-gray-600 dark:text-white" />
            </div>
            <div className='bg-yellow-100 dark:bg-gray-700 border rounded-md flex items-center gap-2 px-3 py-2 w-full'>
              <input type="text" placeholder='Last name' className='bg-transparent w-full text-black dark:text-white outline-none' />
              <FaRegUser className="text-gray-600 dark:text-white" />
            </div>
          </div>

          {/* Email */}
          <h2 className="text-gray-800 dark:text-gray-200 mb-2">E-mail</h2>
          <div className='bg-yellow-100 dark:bg-gray-700 border rounded-md flex items-center gap-2 px-3 py-2 mb-5'>
            <input type="email" placeholder='Email' className='bg-transparent w-full text-black dark:text-white outline-none' />
            <IoMailOutline className="text-gray-600 dark:text-white" />
          </div>

          {/* Phone */}
          <h2 className="text-gray-800 dark:text-gray-200 mb-2">Phone numbers</h2>
          <div className='bg-yellow-100 dark:bg-gray-700 border rounded-md flex items-center gap-2 px-3 py-2 mb-5'>
            <input type="number" placeholder='(+01)' className='bg-transparent w-full text-black dark:text-white outline-none' />
            <IoCallOutline className="text-gray-600 dark:text-white" />
          </div>

          {/* Password */}
          <h2 className="text-gray-800 dark:text-gray-200 mb-2">Password</h2>
          <div className='bg-yellow-100 dark:bg-gray-700 border rounded-md flex items-center gap-2 px-3 py-2 mb-5'>
            <input type="password" placeholder='Password' className='bg-transparent w-full text-black dark:text-white outline-none' />
            <IoEyeOutline className="text-gray-600 dark:text-white" />
          </div>

          {/* Confirm Password */}
          <h2 className="text-gray-800 dark:text-gray-200 mb-2">Confirm Password</h2>
          <div className='bg-yellow-100 dark:bg-gray-700 border rounded-md flex items-center gap-2 px-3 py-2 mb-5'>
            <input type="password" placeholder='Confirm Password' className='bg-transparent w-full text-black dark:text-white outline-none' />
            <IoEyeOutline className="text-gray-600 dark:text-white" />
          </div>

          {/* Sign Up Button */}
          <div className="flex justify-center mt-6">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md w-full sm:w-auto">
              SIGN UP
            </button>
          </div>

          {/* Terms & Conditions */}
<div className="flex items-center mt-6 mb-4 text-sm text-gray-800 dark:text-gray-200">
  <input type="checkbox" id="terms" className="mr-2 accent-blue-600" defaultChecked />
  <label htmlFor="terms">I agree with terms & conditions</label>
</div>

{/* Third-party Sign Up */}
<div className="flex flex justify-between gap-3 mb-6">
  <button type="button" className=" px-10 flex items-center justify-center gap-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600">
    <FcGoogle className="w-5 h-5"/> 
    Google Account
  </button>
  <button type="button" className=" px-10 flex items-center justify-center gap-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600">
    <IoLogoFacebook className="w-5 h-5 text-blue-700" />
    Facebook account
  </button>
</div>

{/* Already have account */}
<div className="text-center text-sm text-gray-800 dark:text-gray-200">
  Already have an account?{' '}
  <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">
    Sign in
  </a>
</div>



        </form>
      </section>
    </>
  );
};

export default FormValidation;