"use client"

import {AiOutlineShoppingCart} from "react-icons/ai"

import React from 'react'
import Link from "next/link"
import { storedata } from "../store/store"

const   Nav = () => {
  
  const toggleshown = storedata(s=>s.setshown)
  return (<>
  <nav className=' fixed max-md:py-2 border-b border-white max-md:text-3xl  bg-white bg-opacity-30 backdrop-blur-md  w-full  px-16 top-0 left-0 z-40 flex justify-between  py-4'>
        <Link href='/' className="logo">
            PHANOX 
        </Link>
        <button onClick={()=>toggleshown()} className="relative text-5xl animate-pulse">
            <AiOutlineShoppingCart/>
        </button>



  </nav>
  </> 
   
  )
}

export default Nav