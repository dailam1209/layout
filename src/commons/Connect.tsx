import React from 'react';
import { SVGS } from '../assets/svgs';

const Connect = () => {
  return (
    <div className='sm:hidden mt-10 mx-5  h-[46.08px]'>
      <a className='flex justify-between bg-[#FFFFFF] bg-opacity-60 p-2 rounded-[1000px] overflow-hidden mb-5'>
        <div className='flex items-center'>
          <div className='w-[36.28px] h-[36.28px] bg-white rounded-full'>
            <img src={SVGS.zalo_nav} alt='1' className='h-[37px] w-[37px]'></img>
          </div>
          <div className='text-white pl-2  flex-col'>
            <h4 className='text-[11.947px] h-[18px] leading-[18px] font-bold'>Kết nối Zalo</h4>
            <p className='text-[8.533px] font-medium h-[13px] leading-[13px] '>0339.867.688</p>
          </div>
        </div>
        <img src={SVGS.two} className='pr-2' alt='1'></img>
      </a>
      <a className='flex justify-between bg-[#FFFFFF] bg-opacity-60 p-2 rounded-[1000px] overflow-hidden'>
        <div className='flex items-center'>
          <div className='w-[36.28px] h-[36.28px] items-center bg-[#21695B] rounded-full flex justify-center '>
            <img src={SVGS.one} alt='1' className='h-[16.75px] w-[16.75px]'></img>
          </div>
          <div className=' text-white pl-2 items-center'>
            <h4 className='text-[11.947px] h-[18px] leading-[18px] font-bold'>Liên hệ</h4>
            <p className='text-[8.533px] font-medium h-[13px] leading-[13px] '>0339.867.688</p>
          </div>
        </div>
        <img src={SVGS.two} className='pr-2' alt='1'></img>
      </a>
      
    </div>
  )
}

export default Connect;