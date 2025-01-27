import React from 'react';
import styles from '../Styles';
import { discount,robot } from '../assets';
import Getstarted from './Getstarted';

const Hero = () => {
  return (

    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      <div className={`flex-1  ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex  flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 '>
      <img src={discount}  className='w-[32px] h-[32px]'>
      
      </img>
      <p className={`${styles.paragraph} ml-2`}>
      <span>
        40%
      </span>Disount For {" "}
      <span className='text-white'>
        1 Month
        
      </span>{" "} Account

      </p>
      


      </div>
      
      <div className='flex flex-row justify-between items-center w-full'>
       <h1 className='flex-1 font-poppins font-semibold ss:leading-[100px] leading-[75px] text-[52px] text-white '>
        The Next <br className='sm:block hidden'/>
        {" "}
        <span className='text-gradient'>
          Generation

        </span>{" "}
            
       </h1>
       <div className='ss:flex hidden  md:mr-4 mr-0'>
        <Getstarted/>
    

        
       </div>

      </div>
       <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px]  text-white w-full leading-[75px]'>
         Payment method
       </h1>
       <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credits cards mostly likelt to fit you needs we examine annual percentage rates
       </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}>
        <img src={robot} className='w-[100%] relative z-[5]'>
        </img>

        <div className='absolute z-[0] w-[40%]  h-[35%] top-0 pink__gradient '/>
        <div className='absolute z-[1] w-[80%]  h-[80%] rounded-full bottom-40 white__gradient'/>
        <div className='absolute z-[0] w-[50%]  h-[50%] right-20 rounded-full bottom-40 blue__gradient'/>
      </div>
      <div className={`ss:hidden  ${styles.flexCenter} `}>
        <Getstarted/>

      </div>
    </section>
  )
}

export default Hero