import React from 'react'
import {AiOutlineMenu,AiOutlineSearch,AioutlineClose,AiFillTag}from 'react-icons/ai'

function TopNav() {
  return (
    <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>
    <div className='flex items-center'>
    <div className='cursor-pointer'>
          <AiOutlineMenu size={25}/>
          </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Yum
            <span>Eats</span>
       </h1>
       <div className='hidden  lg:flex items-center bg-gyay-200 rounded-full p-1
  text-[14px]'>
    <p>Free</p>
    <p>Delivery</p>
  </div>
 </div>
</div>
 )
}

export default TopNav