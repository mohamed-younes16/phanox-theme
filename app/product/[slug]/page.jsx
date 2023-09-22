import React from 'react'
import {BsStars} from  'react-icons/bs'
import { client } from '@/lib/client'
import dynamic from 'next/dynamic'
import ProductCard from '@/app/components/Product'
import ImageSlid from '@/app/components/ImageSlid'

import Toggle from  "@/app/components/Toogle"



const  page = async ({params:{slug}}) => {
  const productdata = await client.fetch(`*[_type == "product" && slug.current == "${slug}"][0]`,{},{next:{revalidate:60}})
  const productsdata = await client.fetch(`*[_type == "product"]`,{},{next:{revalidate:60}})
  const {name,details,price,image} = productdata
  

  return (
    <>
    <div className="product-detail-container justify-center dark:text-blue-100">
        <ImageSlid image={image}/>
        <div className="product-detail-desc">
          <h1 className=' text-4xl font-bold'>{name} </h1>
          <div className=' reviews'>
            <div className=' flex gap-1 text-2xl'>
                    {[...Array(5).keys()].map((e,i)=>  <BsStars key={i} style={{animationDelay:`${i * .250}s `,animationDuration:"1.3s"}}
                    className={ `animate-bounce !text-yellow-500 ${i== 4 ? 'text-gray-400':""}`}/> )}
              
              
            </div>
              <p>(20)</p>

          </div>
          <p className=' font-bold'>Details :</p>
          <p>{details} </p>
          <p className="price">${price} </p>
          <Toggle product={productdata}/>
         
        </div>
        
    </div>
    <div className="maylike-products-wrapper">
    <h2 className=' dark:!text-blue-100 '>You May Also Like</h2>  
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