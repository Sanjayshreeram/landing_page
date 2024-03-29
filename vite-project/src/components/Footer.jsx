import React from 'react';
import styles from '../Styles';
import { logo } from '../assets';
import { footerLinks,socialMedia } from '../constants';



const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY } flex-col`}>
<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>

  <div className={`flex-1 flex flex-col justify-start mr-10`}>
    <img src={logo} className='w-[266px] h-[72px]'/>
    <p>

      A new way to make the payments easy ,relaibale ans secure
    </p>
  </div>

  <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
 {
  footerLinks.map((item)=>(

    <div key={item.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>

    <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
      {item.title}
    </h4>
    <ul className='list-none mt-4'>

      {
        item.links.map((link,index)=>(

          <li key={link.name} className={`font-poppins font-normal text-[16px] hover:text-secondary text-dimWhite`}>
         {link.name}
          </li>
        ))
      }
    </ul>
      </div>
  ))

}
  </div>

 


</div>
<div className='w-[100px] h-[100px] rounded-full blue__gradient '/>




<a className='bg-primary text-white font-poppins b font-semibold' href='https://www.linkedin.com/in/sanjay-shreeram-9645ba232' target='_blank' rel='noopener noreferrer'>
  @SanjaySr
</a>

    </section>
  )
}

export default Footer