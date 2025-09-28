import React from 'react'
import { CiUser,CiMail } from "react-icons/ci";
import { MdEmail } from 'react-icons/md';



const Trying = () => {
  return (
    <>
    <section id='form_Validation' className='bg-blue-300 dark:bg-gray-900 flex justify-center items-center h-dvh '>
      <form>

      <div className='bg-white w-[440px] p-10 rounded-2xl'>
        <div className='text-center mb-6 p-0'>
        <h1 className='text-[24px] font-bold font-popin text-hclr  '>Create an account</h1>
        <p className='text-14px font-popin text-[#7E7E8F]'>You are welcome!</p>
        </div>
        <div className='Name w-full mb-2'>
          <p className='text-14px font-popin text-hclr '>Your name</p>
          <div className='flex justify-between gap-5 w-fit'>
            <div className='flex items-center border-[#E8EDF2] border pl-3 rounded-[8px]'>
              <input type="text" placeholder='First name' className='w-full outline-none py-2 ' />
              <CiUser/>
            </div>
            <div className='flex items-center border-[#E8EDF2] border pl-3 rounded-[8px]'>
              <input type="text" placeholder='Last name' className='w-full outline-none y-2'/>
              <CiUser/>
            </div>
          </div>
        </div>
            <p>Enter your email</p>
            <div className='items-center flex pl-3'>
              <input type="email" placeholder='Enter your email' className='w-full outline-none y-2'/>
              <CiMail/>
            </div>
            <div className='items-center flex pl-3'>
              <input type="email" placeholder='Enter your email' className='w-full outline-none y-2'/>
              <CiMail/>
            </div>
            <div className='items-center flex pl-3'>
              <input type="email" placeholder='Enter your email' className='w-full outline-none y-2'/>
              <CiMail/>
            </div>
            <div className='items-center flex pl-3'>
              <input type="email" placeholder='Enter your email' className='w-full outline-none y-2'/>
              <CiMail/>
            </div>
            <div className='text-center mt-10 bg-green-600 w-fit items-center'>
              <button type="submit">Sign Up</button>
            </div>
      </div>
      </form>
    </section>
    </>
  )
}

export default Trying