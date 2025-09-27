import React from 'react'
import { CiUser,CiMail } from "react-icons/ci";



const Trying = () => {
  return (
    <>
    <section id='form_Validation' className='bg-blue-300 dark:bg-gray-900 flex justify-center items-center h-dvh '>
      <form>

      <div className='bg-white w-[440px] p-10 '>
        <div className='text-center mb-6 p-0'>
        <h1 className='text-[24px] font-bold font-popin text-hclr  '>Create an account</h1>
        <p className='text-14px font-popin text-[#7E7E8F]'>You are welcome!</p>
        </div>
        <div className='w-90 p-4 w-[400px'>
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
        

      </div>
      </form>
    </section>
    </>
  )
}

export default Trying