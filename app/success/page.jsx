"use client"

import Image from "next/image"
import { storedata } from "../store/store"

import success from "../store/success.svg"
import { useEffect } from "react"


function Page() {
    useEffect(() => {
    storedata.setState({cart:[],total:0,choosed:0})
    }, [])
    
    

  return (
    <div className=' h-screen flex flex-col fixed top-0 left-0 items-center justify-center w-screen'>
        <Image height={80} width={ 80} alt="" src={success} className="animate-bounce mb-6"/>
        <p className=" text-2xl mb-12">Your purchase was done succesfuly </p>
        <button className='font-bold max-md:text-lg  text-green-700 shadow-xl border-2 active:scale-90 transition
        hover:text-white hover:bg-green-700 border-green-700 
        p-3 rounded-full text-2xl'
        onClick={()=>
        
        window.location.assign("/")
        }
    > 
        
        Return Home
    </button>

    </div>
)
}

export default Page