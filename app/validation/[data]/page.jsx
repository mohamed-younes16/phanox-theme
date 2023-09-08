
import { redirect } from "next/navigation"



const validation = async ({params:{data}}) => {

   
    const res =  await fetch(`http://localhost:3000/api/stripe`,{
      cache:"no-cache",
      method:"POST",
      
      body:JSON.stringify(decodeURIComponent(data))
      
    
      
    })
    const response = await res.json()
    redirect(response.url)


}

export default  validation