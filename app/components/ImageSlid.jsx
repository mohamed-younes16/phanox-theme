"use client"
import { urlFor } from '@/lib/client'
import Image from 'next/image'
import React from 'react'
import { storedata } from '../store/store'

const ImageSlid = ({image}) => {

    const selected = storedata(s=>s.selected)
    const setselected = storedata(s=>s.setselected)

  return (
    <div>
    <div className="image-container flex justify-center">
      <Image alt='' height={400} width={400 } className=' product-detail-image' src={urlFor(image[selected != null ? selected : 0]).url()}/>
    </div>
    <div className="small-images-container">
    {image?.map((e,i)=>(
      <Image alt='produt' key={i} onMouseEnter={()=>setselected(i)}   height={100} width={100 } className={`small-image ${i == selected  ?"selected-image":""} `} src={urlFor(e).url()} />
    ))}

    </div>
</div>
  )
}

export default ImageSlid