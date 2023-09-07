
import Image from 'next/image'
import React from 'react'
import { urlFor } from '@/lib/client'
import Link from 'next/link'


const HeroBanner = ({banner}) => {
    
    
  return (
    <div className=' hero-banner-container'>
        <div>
            <p className="beats-solo">{banner.smallText}</p>
            <h3 className=' font-bold'>{banner.midText} </h3>
            <h1  className=' font-bold'>{banner.largeText1} </h1>
            <Image src={urlFor(banner.image).url()} width={400} height={400} alt='headphone' className=' hero-banner-image'/>
            <Link href={`/product/${banner.product}`} className="btn text-center block  !w-fit ">{banner.buttonText} </Link>
                <div className="desc">
                    <h5>description  </h5>
                    <p>{banner.desc}</p>
                </div>
        </div>
        
    </div>
  )
}

export default HeroBanner