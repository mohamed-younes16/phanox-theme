import { urlFor } from '@/lib/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FooterBanner = ({banner:{discount,largeText1,image,product,midText,smallText,largeText2,saleTime,buttonText}}) => {

  return (
    <div className=' footer-banner-container'>
        <div className="banner-desc">
            <div className="left">
            <p>{discount} </p>
            <h3>MODERN </h3>
            <h3>{largeText2} </h3>
            <p>{saleTime} </p>
            </div>
            <div className="right">
                <p>{smallText} </p>
                <h3>{midText} </h3>
                <p>Shop now good quality headphones   </p>
               <Link href={`/product/${product}`}><button type='button'>{buttonText} </button></Link> 
            </div>
        <Image src={urlFor(image).url()} className=' footer-banner-image' alt='headphone' height={400} width={400} />
        </div>
        
    </div>
  )
}

export default FooterBanner