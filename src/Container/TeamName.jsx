import React, { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

const TeamName = ({data}) => {

 const handleNew=(e)=>{
  data(e);
 }
  return (
    <div className='flex items-center justify-between font-bold mx-7 md:mx-14 md:mt-[3.7rem] mt-8 md:text-lg'>
        <div className='flex items-center gap-2'>
        <p className="font-bold border-[0.2rem] border-black bg-orange-300  rounded-full px-[0.6rem] text-sm py-1 ">
          A
        </p>
            <p className='text-[1.10rem]'>Adam Cooper Team</p>
        </div>
        <button className='w-auto px-3 py-1 rounded-md bg-black text-white text-sm ' onClick={()=>handleNew(true)}>New Project</button>
    </div>
  )
}

export default TeamName