"use client"

import {AiOutlineShoppingCart} from "react-icons/ai"

import React from 'react'
import Link from "next/link"
import { storedata } from "../store/store"

const   Nav = () => {
  
  const toggleshown = storedata(s=>s.setshown)
  return (<>
  <nav className=' fixed max-md:pt-6 border-b border-white max-md:text-3xl  bg-white bg-opacity-30 backdrop-blur-md  w-full max-md:px-8  px-16 top-0 left-0 z-40 flex justify-between  py-4'>
        <Link href='/' className="logo !text-gray-700">
            PHANOX 
        </Link>
        <button onClick={()=>toggleshown()} className="relative hover:bg-black p-2 
        duration-500
        rounded-full  hover:text-white max-md:text-3xl text-5xl ">
            <AiOutlineShoppingCart />
        </button>



  </nav>
  </> 
   
  )
}

export default Nav