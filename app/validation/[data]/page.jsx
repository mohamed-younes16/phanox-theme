
import { redirect } from "next/navigation"
import { headers } from 'next/headers'


const validation = async ({params:{data}}) => {
    const he = headers()
    
    const res =  await fetch(`https://phanox-theme.vercel.app/api/stripe`,{
      cache:"no-cache",
      method:"POST",
      
      body:JSON.stringify(decodeURIComponent(data))
      
    
      
    })
    const response = await res.json()
    // redirect(response.url)


}

export default  validation