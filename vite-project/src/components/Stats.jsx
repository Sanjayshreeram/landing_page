import React from 'react';
import { stats } from '../constants';
import styles from '../Styles';


const Stats = () => {
  return (
    <div className={`${styles.flexCenter} text-white md:flex-row flex-col` }>

      {
        stats.map((item)=>(
          <div className='flex items-center justify-between flex-row  p-12 sm:py-4'>
            <h4 className='xs:text-[40px]  text-[30px] font-extrabold  font-poppins'>
            {
              item.value
            }
          </h4>

          {"  "}
          <span className=' uppercase xs:text-[20px] text-[30px] leading-[43px] pl-4 text-gradient font-bold font-poppins'>
            {
              item.title
            }

          </span>
          <div className='w-1 h-6 bg-white'>
            </div>



            </div>
                
          
          

        ))
      }




    </div>
  )
}

export default Stats