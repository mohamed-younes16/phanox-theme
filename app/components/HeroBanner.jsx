
import Image from 'next/image'
import React from 'react'
import { urlFor } from '@/lib/client'
import Link from 'next/link'
import { getPlaiceholder } from "plaiceholder";
 



const HeroBanner = async ({banner}) => {

  return (
    <div className=' hero-banner-container'>
        <div>
            <p className="beats-solo">{banner.smallText}</p>
            <h3 className=' font-bold'>{banner.midText} </h3>
            <h1  className=' font-bold max-lg:!text-[8em] max-sm:!text-[3em] max-md:!text-[5em] '>{banner.largeText1} </h1>
            <Image 

            priority={false} src={urlFor(banner.image).url()} width={400} height={400} alt='headphone' className='
            max-sm:w-56 max-md:h-56 max-md:-top-10
            max-lg:w-72 max-lg:h-72 max-lg:-top-10 max-lg:right-0 hero-banner-image'/>
            <Link href={`/product/${banner.product}`} className="btn max-md:text-lg mx-auto text-center block  !w-fit ">{banner.buttonText} </Link>
                <div className="desc">
                    <p className='text-2xl  !font-bold mb-2 !text-blue-950'>description  </p>
                    <p className=' !text-black !font-normal'>{banner.desc}</p>
                </div>
        </div>
        
    </div>
  )
}

export default HeroBanner