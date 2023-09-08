"use client"

import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';
import { storedata } from '../store/store'
import Image from 'next/image';
import { urlFor } from '@/lib/client';
import { useRouter } from 'next/navigation';




const Cart = () => {
  const route = useRouter()
  


const cartdata = storedata(s=>s.cart)
const toggleshown = storedata(s=>s.setshown)
const shown = storedata(s=>s.shown)
const total = storedata(s=>s.total)
const setcart = storedata(s=>s.setcartmenu)
const setshow = storedata(s=>s.toggleshown)

const deletecart = storedata(s=>s.deletecartitem)



  return (<>
    <div  className={`cart-wrapper ${shown ? "translate-x-[110%] ":""}`}>
      
      <div className="cart-container">
        <button className=' cart-heading' onClick={()=>{toggleshown();}}>
          <AiOutlineLeft className=' text-red-800  text-2xl'/>
          <span> Your Cart</span>
          <span> </span>
        </button>
          <div className="product-container " suppressHydrationWarning={true}>
                  {cartdata?.map(e=>(
                    <div key={e._id} className="product">
                      <Image src={urlFor(e.image).url()} 
                      width={180} alt='product '
                      className=' cart-product-image' height={150}/>
                      <div className="item-desc">
                        <div className="flex top">
                          <h5 className=' font-bold'>{e.name} </h5>
                          <h4 className=' font-bold !text-2xl'>${e.price} </h4>
                        </div>
                        <div className="flex bottom ">
                            <div>
                            <h3>Quantity : </h3>

                            <p className=' !w-32 mt-2 quantity-desc !p-0  flex items-center'>
                              <span className=' minus ' onClick={()=>setcart(e._id,"dec")}  ><AiOutlineMinus/></span>
                              <span  className='h-full num border-x !py-1 !px-2 border-gray-500'  > {e.quantity} </span>
                              <span className=' plus' onClick={()=>setcart(e._id,"inc")}><AiOutlinePlus/></span>
                            </p>

          
                            </div> 
                              <button className="remove-item" onClick={()=>{deletecart(e._id);toast.success(`deleted succesfuly ${e.name}`,{
                                style:{background:"black",color:"white",
                                fontSize:"18px",minWidth:"150px",whiteSpace:"nowrap"}
                              })}}>
                                <TiDeleteOutline className=' text-4xl translate-y-3'/>
                              </button>
                          </div>
                      </div>

                    </div>
                  ))}
                </div>
              <div className="cart-bottom bg-white">
                      <div className="total">
                        <h3 className=' font-semibold'> Subtotal :</h3>
                        <h3 className=' font-bold'> ${total} </h3>
                      </div>
                      
    <div className="btn-container">
    <button className="btn  
    transition 

hover:text-violet-700 hover:!bg-white

   stripe hover:scale-95 active:scale-90 !bg-violet-700" onClick={()=>{
      if (cartdata.length >0 ) {
        setshow(true)

        route.push(`/validation/${JSON.stringify(cartdata)}`)
      }
    }} >Pay With Stripe</button>
</div>
                      
                    </div>
      </div>
      
      

      
    </div>

     
      
    </>
  )
}

export default Cart