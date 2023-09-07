

import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'
import Image from 'next/image'


const ProductCard = ({prod:{image,slug,name,price}}) => {
    
  return (
    <div className='' >
    <Link href={`/product/${slug.current}`}>

         <div className="product-card">
            
            <Image alt='image for product' className=' product-image' height={250} width={250} src={urlFor(image && image[0]).url()}/>
            <div className="product-name mt-3 ">{name} </div>
            <div className="product-price text-lg">${price} </div>
         </div>
    </Link>
    </div>
  )
}

export default ProductCard