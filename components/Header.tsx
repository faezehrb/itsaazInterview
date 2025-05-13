import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-row justify-between my-12 gap-4">
        <div className="flex flex-row justify-center items-center">
            <svg width="24" height="24"fill="none">
                <use href="/icons.svg#logo" />
            </svg>
            
            <p className="px-2 py-2 sm:px-5 text-sm sm:text-base">داشبورد کاربر</p>
            <span className='bg-[#E0EEFF] px-5 py-2 text-sm sm:text-base h-[38px] rounded-sm'>کارمند</span>
        </div>
        <div className="flex flex-row justify-between">
            <div className="bg-[#FF7B2D]/30 p-2 ml-2 w-[42px] h-[38px] cursor-pointer rounded-md flex items-center justify-center">
                <svg width="24" height="24" fill="none">
                    <use href="/icons.svg#alert" />
                </svg>
            </div>
            <div className="border border-[#FF7B2D]/30 w-[42px] h-[38px] cursor-pointer p-2 rounded-md flex items-center justify-center">
                <svg width="24" height="24"  >
                    <use href="/icons.svg#envelop" />
                </svg>
            </div>
        </div>
    </div>
  )
}

export default Header
