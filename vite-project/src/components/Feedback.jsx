import React from 'react';
import { quotes } from '../assets';

const Feedback = ({content,name,title,img}) => {
  return (
   <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-0 hover:bg-dimBlue '>

     <img src={quotes} className='w-[42px] h-[27px] object-contain'/>
     <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>
      {content}
     </p>
     <div className='flex flex-row'>
      <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full'/>
      <div className='flex flex-col items-center justify-center ml-2'>
        <h2 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>
          {name}
        </h2>
        <h4 className='text-dimWhite'>
          {title}
        </h4>

      </div>

     </div>
   </div>
  )
}

export default Feedback