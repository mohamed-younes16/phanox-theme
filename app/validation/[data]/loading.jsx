import React from 'react'

const loading = () => {
  return (
    <div className=' h-screen flex fixed top-0 left-0 items-center justify-center w-screen'>
        <div className="font-bold text-3xl">Redirecting Into Stripe  </div>
      <div className=' flex gap-1'> {[...Array(5).keys()].map((e,i)=><div key={i} style={{animationDelay:`${i*.25}s`}} className='  h-10 mx-3 rounded-full       bg-black  w-10 animate-pulse'></div>)}</div> 
    </div>
  )
}

export default loading