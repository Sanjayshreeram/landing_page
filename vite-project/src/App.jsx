import React from 'react'
import {   Clients,
  CTA,
  Footer,
  Billing,
  Business,
  Button,
  CardDeal,
  Getstarted,
  Hero,
  Navbar,
  Feedback,
  Stats,
  Testimonials } from './components'
import styles from './Styles'

const App = () => {
  return (

    <>
     
    <div className='bg-primary w-full overflow-hidden'>

       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}
        >
   <Navbar/>


        </div>




       </div>

       <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>


        </div>


       </div>

       <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>

        <div className={`${styles.boxWidth}`}>
         <Stats/>
         <Business/>
         <Billing/>
         <CardDeal/>
          
          <Testimonials/>
          <Feedback/>
          <Clients/>
       
          
          <CTA/>
          <Footer/>

           

        </div>


       </div>



       

      

      </div>


      
    
    
   
    </>
   
  )
}

export default App
