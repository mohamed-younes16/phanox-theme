import React from 'react'

const loading = () => {
  return (
    <div className=' h-screen bg-no-repeat flex fixed top-0 left-0  dark:text-blue-100  items-center justify-center w-screen'>
        <div className="font-bold text-3xl">Loading your Product...  </div>
      <div className=' flex gap-1'> {[...Array(4).keys()].map((e,i)=><div key={i} style={{animationDelay:`${i*.25}s`}} className='  h-8 mx-3 rounded-full       bg-blue-100  w-8 animate-pulse'></div>)}</div> 
    </div>
  )
}

export default loading