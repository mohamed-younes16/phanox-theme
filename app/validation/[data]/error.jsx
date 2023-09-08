'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
import errpic from "../../store/404.svg"
import Image from 'next/image'
 
export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className=' h-screen fixed top-0 flex items-center flex-col  left-0 backdrop-blur-sm z-50 w-screen bg-slate-200 bg-opacity-40'>
      
      <Image src={errpic} height={600}  width={600} className=' max-md:!w-[600px] max-sm:!w-[400px]'    alt='error image '/>
      <div className="font-bold max-md:text-lg shadow-inner  mb-9 text-2xl p-3"> check your connection  </div>
      <div className="flex gap-6">
        <button className='font-bold border-2 active:scale-90 transition hover:text-white hover:bg-black border-black 
      p-3 rounded-full  max-md:text-lg shadow-xl text-2xl'
        onClick={
          
          () => reset()
        }
      > 
        
        Try again
      </button>


      <button className='font-bold max-md:text-lg shadow-xl border-2 active:scale-90 transition hover:text-white hover:bg-black border-black 
      p-3 rounded-full text-2xl'
        onClick={()=>
          
          window.location.assign("/")
        }
      > 
        
        Return Home
      </button>
      
      </div>
      
    </div>
  )
}