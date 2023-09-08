import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';


const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export  async function POST(req) {
  const dat = await req.json()
  

    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          { shipping_rate: 'shr_1NniTWADFNwbo1YntlvoDCbi' }, 
          { shipping_rate:"shr_1NniT0ADFNwbo1YnkBJgDxyQ"}
        ],
        line_items: JSON.parse(dat).map((item) => {
         
          const img = item.image.asset._ref;
          
          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/uft3vvh9/production/').replace('-webp', '.webp');

          return {
            price_data: { 
              currency: 'usd',
              product_data: { 
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100, 
            },
            adjustable_quantity: {
              enabled:true,
              minimum: 1, 
            },
            quantity: item.quantity
          }
        }),
        billing_address_collection:"required",
        success_url: `${req.nextUrl.origin}/success`,
        cancel_url: `${req.nextUrl.origin}/canceled`,
      } 

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      
      
      return  NextResponse.json({"url":session.url})

    } catch (err) {
    console.log("err_",err) 
    return new  NextResponse({},{status:500,statusText:"check your connection "})
    }
 
} 