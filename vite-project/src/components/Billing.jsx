import React from 'react'
import {apple,bill,google} from '../assets';
import styles,{layout} from '../Styles';

 const Billing = () => {
  return (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}
    >
      <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]'>
      
      </img>
      <div  className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient '>

      </div>
      <div  className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full pink__gradient '>

</div>

    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control Your <br className='sm:block hidden'/>
        Billing and &invoicing

      </h2>
      <p className={styles
      .paragraph}>
        Banking is made easy here
      </p>
      <div className='flex flex-row flex-wrap gap-4 sm:mt-10 mt-6'>
        <img src={apple} className='w-[128px] h-[42px] object-contain'/>
        <img src={google} className='w-[128px] h-[42px] object-contain'/>

      </div>

    </div>


  </section>
  )
}
export default Billing
