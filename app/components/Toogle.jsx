"use client"

import { toast } from 'react-hot-toast'
import { storedata } from '../store/store'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'



function Toogle({product}) {
    const  amount = storedata(s=>s.choosed)
    const  handleincrement = storedata(s=>s.setChoosed)
    const addToCart = storedata(s=>s.setCart)
    const setshow = storedata(s=>s.toggleshown)
    
    

    

  return (<>
    <div className="quantity">
            <p className=' text-lg font-semibold '>Quantity : </p>

            <p className=' quantity-desc !p-0  flex items-center'>
              <span className=' minus ' onClick={()=>handleincrement("minus")}><AiOutlineMinus/></span>
              <span  className='h-full num border-x !py-3 !px-4 border-gray-500'  > {amount} </span>
              <span className=' plus' onClick={()=>handleincrement("plus")}><AiOutlinePlus/></span>
            </p>

          </div>
          <div className="buttons">
            <button className="add-to-cart  shadow-xl active:scale-90 " onClick={()=>{addToCart(product,amount);
            setshow(false);
            toast.success(`added sucessfully ${product.name} `,{
              duration:2000,
              icon:"🛒",
              style:{background:"black",color:"white",
              fontSize:"18px",minWidth:"150px",whiteSpace:"nowrap"}
            })}} >ADD To Cart</button>
            <button className="buy-now shadow-xl active:scale-90 max-sm:text-left" onClick={()=>setshow(false)}>Buy Now</button>

          </div>
          </>
  )
}

export default Toogle