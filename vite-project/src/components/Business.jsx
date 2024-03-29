import React from 'react';
import { features } from '../constants';
import styles from '../Styles';
import { layout } from '../Styles';
import Button from './Button';

const FeatureCard=({icon,title,content,index})=>(


  <div className={`flex flex-row p-6 rounded-[20px] ${index!==features.length-1 ?"mb-6":"mb-0"}  feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain' />
    </div>

    <div className='flex-1 flex flex-col ml-3 '>
      <h4 className=' mb-1 font-poppins font-semibold text-white text-[18px] leading-[23px]'>
        {title}

      </h4>
      <p className='mb-1 font-poppins font-semibold text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>

    </div>

  </div>
)


const Business = () => {
  return (
<section id="features" className={layout.section}>
  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      you do the  Business

      <br className='sm:block hidden'/> we'll handle the money
    </h2>
    <p className={`${styles.paragraph} mt-5  max-w-[470px]`}>
      With the right credit card,you can improve financial life by credit,earning rewards and saving money .but with hundreds of credit card on market 

    </p>
    <Button className='mt-10'/>


  </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {

        features.map((feature,index)=>(
          <FeatureCard key={feature.id} {...feature} index={index}/>


        ))
      }


    </div>


</section>
  )
}

export default Business