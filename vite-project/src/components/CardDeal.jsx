import React from 'react'
import { card } from '../assets';
import styles,{layout} from '../Styles';
import Button from './Button';

const CardDeal = () => {
  return (
   <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card Deal <br className='sm:block hidden'/>In few Steps

      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      As a seasoned Credit Card Handler with a passion for financial excellence, I bring a wealth of expertise in managing credit transactions and ensuring seamless financial operations. My commitment to accuracy, integrity, and customer satisfaction has been honed through [X] years of dedicated service in the finance industry.


      </p>
      <Button/>

    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card"  className='w-[100%] h-[100%]'/>

    </div>


   </section>
  )
}

export default CardDeal