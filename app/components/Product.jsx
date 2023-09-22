

import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'
import Image from 'next/image'


const ProductCard = ({prod:{image,slug,name,price}}) => {
    
  return (
    <div className=' ' >
    <Link href={`/product/${slug.current}`}>

         <div className="product-card bg-slate-300 dark:bg-[#5f5f5f] dark:text-blue-100   rounded-2xl p-6">
            
            <Image alt='image for product' className=' product-image dark:bg-[#6b6b6b]' height={250} width={250} src={urlFor(image && image[0]).url()}/>
            <div className="product-name mt-3 ">{name} </div>
            <div className="product-price text-lg dark:text-blue-100 ">${price} </div>
         </div>
    </Link>
    </div>
  )
}

export default ProductCard