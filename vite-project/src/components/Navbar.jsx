import React from 'react';
import { useState } from 'react';
import { navLinks } from '../constants';
import { logo,menu,close } from '../assets';

const Navbar = () => {

  const [openmenu,setmenuopen]=useState(false);
  return (
    <>
      <nav className='w-full flex py-6 justify-between items-center '>

<img src={logo} alt='image' className='w-[124px] h-[32px]'/>

<ul className='list-none  hidden sm:flex   justify-end items-center flex-1'>
  {

    navLinks.map((navitem,index)=>(

      <li key={navitem.id} className={`font-poppins font-normal cursor-pointer text-[16px]  text-white ${index===navLinks.length-1 ? 'mr-0':'mr-10'}`}>
      
    <a href={`#${navitem.id}`}>
      {navitem.title}

    </a>

      </li>
    ))
  }


</ul>

<div className='sm:hidden flex flex-1 justify-end items-center '>

<img src={openmenu ?close:menu} className='w-[28px] h-[28px] object-contain' onClick={()=>setmenuopen((prev)=>!prev)} alt="menu" />

<div className={`${openmenu ?'flex':'hidden' } p-6 bg-black-gradient  absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}>

  
<ul className='list-none  flex-col justify-end items-center flex-1'>
  {

    navLinks.map((navitem,index)=>(

      <li key={navitem.id} className={`font-poppins font-normal cursor-pointer text-[16px]  border-b-2 border-red-600 text-white ${index===navLinks.length-1 ?   'mr-0':'mb-10'}`}>
      
    <a href={`#${navitem.id}`}>
      {navitem.title}

    </a>

      </li>
    ))
  }


</ul>


</div>
</div>


</nav>
    
    
    </>
  
  )
}

export default Navbar