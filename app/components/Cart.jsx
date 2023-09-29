"use client"

import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';
import { storedata } from '../store/store'
import Image from 'next/image';
import { urlFor } from '@/lib/client';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';




const Cart = () => {
  const route = useRouter()
  const setshow = storedata(s=>s.toggleshown)

const cartdata = storedata(s=>s.cart)
const toggleshown = storedata(s=>s.setshown)
const shown = storedata(s=>s.shown)
const total = storedata(s=>s.total)
const setcart = storedata(s=>s.setcartmenu)
const product = useRef(null)
const deletecart = storedata(s=>s.deletecartitem)




  return (
    <div  className={`cart-wrapper ${shown ? "translate-x-[110%] ":""}`}>
      
      <div className="cart-container">
        <button aria-label="close cart" className=' active:!scale-110 transition mt-6 cart-heading' onClick={()=>{setTimeout(() => {
          toggleshown()
        }, 150); ;}}>
          <AiOutlineLeft className=' text-red-800  text-2xl'/>
          <span> Your Cart</span>
          <span> </span>
        </button>
          <div className="product-container px-3 " suppressHydrationWarning={true}>
                  {cartdata && cartdata?.map((e,i)=>(
                    <div ref={product} key={e._id} style={{marginBottom: i == cartdata.length -1 ? "100px" :""}}
                    className="product justify-between items-center  duration-700 my-4 rounded-lg">
                      <Image src={urlFor(e.image).url()} 
                      width={180} alt='product '
                      className=' cart-product-image' height={150}/>
                      <div className="item-desc max-md:min-w-[40%] !text-white">
                        <div className="flex top">
                          <h3 className='text-xl max-sm:text-lg font-semibold text-gray-100'>{e.name} </h3>
                          <h4 className=' font-bold !text-2xl text-white  '>${e.price} </h4>
                        </div>
                        <div className="flex bottom ">
                            <div>
                            <h5 className=' text-white max-sm:text-lg ' >Quantity : </h5>

                            <p className=' !w-[7.5rem] mt-2 quantity-desc !p-0  flex items-center'>
                              <span className=' minus !w-10 ' onClick={()=>setcart(e._id,"dec")}  ><AiOutlineMinus/></span>
                              <span  className='h-full !w-10 text-center num border-x !py-1 !px-2 border-gray-500 text-white'  > {e.quantity} </span>
                              <span className=' !w-10 plus' onClick={()=>setcart(e._id,"inc")}><AiOutlinePlus/></span>
                            </p>

          
                            </div> 
                              <button aria-label="delete item from cart" className="remove-item" 
                              onClick={()=>{
                                product.current.classList.add("translate-x-full")
                                setTimeout(() => {

                                  deletecart(e._id);

                                                              toast.success(`deleted succesfuly ${e.name}`,{

                                                                style:{background:"black",color:"white",

                                                                fontSize:"18px",minWidth:"150px",whiteSpace:"nowrap"}
                                });
                              


                                  },1000)
                                  
                                  }}>
                                <TiDeleteOutline className=' text-4xl translate-y-3'/>
                              </button>
                          </div>
                      </div>

                    </div>
                  ))}
                </div>
              <div className="cart-bottom rounded-t-2xl  ">
                      <div className="total">
                        <h3 className=' font-semibold text-3xl text-black max-sm:text-2xl' > Subtotal :</h3>
                        <h3 className=' font-bold text-3xl  text-black max-sm:text-2xl'> ${total} </h3>
                      </div>
                      
                        <div className="btn-container">
                          { cartdata.length > 0 && <button 
                              
                              
                              className="btn  
                              transition 
                              max-sm:w-[60%] mx-auto block
                          hover:text-violet-700 hover:!bg-white

                            stripe hover:scale-95 max-sm:text-lg active:scale-90 !bg-violet-700" onClick={()=>{
                                if (cartdata.length >0 ) {
                                  setshow(true)

                                  route.push(`/validation/${JSON.stringify(cartdata)}`)
                                }
                              }} >Pay With Stripe</button>}
                              
                        </div>
                                          
              </div>
      </div>
      
      

      
    </div>

     
      
    
  )
}

export default Cart