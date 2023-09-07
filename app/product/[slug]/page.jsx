
import React from 'react'
import {BsStars} from  'react-icons/bs'

import { client  } from '@/lib/client'

import dynamic from 'next/dynamic'
import ProductCard from '@/app/components/Product'
import ImageSlid from '@/app/components/ImageSlid'

const Toggle = dynamic(()=> import ("@/app/components/Toogle"),{ssr:false})



const  page = async ({params:{slug}}) => {
  const productdata = await client.fetch(`*[_type == "product" && slug.current == "${slug}"][0]`,{},{next:{revalidate:1}})
  const productsdata = await client.fetch(`*[_type == "product"]`,{},{next:{revalidate:1}})
  const {name,details,price,image} = productdata
  

 

  return (
    <>
    <div className="product-detail-container">
        <ImageSlid image={image}/>
        <div className="product-detail-desc">
          <h1 className=' text-4xl font-bold'>{name} </h1>
          <div className=' reviews'>
            <div className=' flex gap-1 text-2xl'>
              <BsStars/>
              <BsStars/>
              <BsStars/>
              <BsStars/>
              <BsStars className=' text-gray-400'/>
            </div>
              <p>(20)</p>

          </div>
          <h4 className=' font-bold'>Details :</h4>
          <p>{details} </p>
          <p className="price">${price} </p>
          <Toggle product={productdata}/>
         
        </div>
        
    </div>
    <div className="maylike-products-wrapper">
    <h2>You May Also Like</h2>  
    <div className="marquee">
      <div className="maylike-products-container track">
          {productsdata?.map(e=><ProductCard key={e._id} prod={e}/>)}
        
      </div>
    </div>
</div>
    
    </>
  )
}

export default page