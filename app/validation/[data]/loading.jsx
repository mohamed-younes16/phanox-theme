import React from 'react'

const loading = () => {
  return (
    <div className=' h-screen flex fixed top-0 left-0 items-center justify-center w-screen'>
        <div className="font-bold text-violet-700 text-3xl">Redirecting Into Stripe...  </div>
      <div className=' flex gap-1'> {[...Array(4).keys()].map((e,i)=><div key={i} style={{animationDelay:`${i*.25}s`}} className='  h-8 mx-3 rounded-full bg-violet-950  w-8 animate-pulse'></div>)}</div> 
    </div>
  )
}

export default loading