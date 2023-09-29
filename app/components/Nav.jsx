"use client"

import {AiOutlineShoppingCart} from "react-icons/ai"

import  { useEffect,useState } from 'react'
import Link from "next/link"
import { storedata } from "../store/store"
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs"


const   Nav = () => {


  const toggleshown = storedata(s=>s.setshown)

  const [dark, setDark] = useState(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    setDark(!dark);
    const newTheme = dark ? 'light' : 'dark';
  
    localStorage.setItem('theme', newTheme);
  };
  
 useEffect(() => {
  const scrolling = ()=>{
   document.body.style.backgroundPosition = `${((window.scrollY / ( document.documentElement.scrollHeight - window.innerHeight )) * 50 ) }%`
  }
  window.addEventListener("scroll",scrolling) 
  return ()=> window.removeEventListener("scroll",scrolling)
  }, [])

  useEffect(() => {

  

    setDark(() => {
    
      const savedTheme = window.localStorage.getItem('theme');
      return savedTheme === 'dark' ? true : false;
      
    })

    const checkMedia = () => {
      
      if (!dark ) {
        
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      } else {
        
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }
    };


    checkMedia();



  }, [dark])
 
  
  
  


  return (<>
  <nav className=' fixed max-md:pt-6 border-b border-white max-md:text-3xl  bg-white bg-opacity-30 backdrop-blur-md 
   w-full max-md:px-8  px-16 top-0 left-0 z-40 flex justify-between items-center  py-2'>
        <Link href='/' className="logo !text-2xl dark:!text-black !font-normal">
            PHANOX 
        </Link>
        <button aria-label="toggle theme " className=' max-sm:text-xl h-12 p-1 pl-2 items-center dark:bg-light-white-500 max-sm:h-9 
        bg-[#252531] rounded-full max-sm:min-w-[4.5rem] text-3xl min-w-[6rem] ' onClick={()=>toggleTheme()}> 
            <div style={{translate:dark?"170% 0 ":"0px 0",rotate:dark?"z 360deg":"z 0deg"}}  
            className=' duration-500  w-fit origin-center transition-all '> 
            {dark ? <BsFillMoonFill  className=' text-blue-900    '/> 
            : <BsFillSunFill   className=' text-yellow-500 ' /> } </div>  
        </button>
        <button aria-label="open cart" onClick={()=>toggleshown()} className="relative hover:bg-black p-2 
        duration-500
        rounded-full  hover:text-white max-md:text-3xl text-5xl ">
            <AiOutlineShoppingCart />
        </button>



  </nav>
  </> 
   
  )
}

export default Nav