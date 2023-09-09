
import HeroBanner from "./components/HeroBanner";

import { client } from "@/lib/client";
import ProductCard from "./components/Product";
import FooterBanner from "./components/FooterBanner";



export default async function Home() {
  
  
  const productsdata = await client.fetch('*[_type == "product"]',{},{next:{revalidate:1}})
  const bannersdata = await client.fetch('*[_type == "banner"]',{},{next:{revalidate:2}})

  return (
    <>
    
        <HeroBanner banner={bannersdata.length > 0 &&  bannersdata[0]}/>
        
        <div  >
          <div className=" products-heading">
          <h2>
          Best Seller Products
          </h2>
          <p>speaker There are many variations passages</p>

          </div>
            <div className=" products-container">
              {productsdata?.map(e=><ProductCard key={e.id} prod={e}/>)}

            </div>


        </div>

        <FooterBanner banner={bannersdata && bannersdata[0]}/>

        </>
    
  )
}
