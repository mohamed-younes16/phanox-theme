
import { createClient } from "next-sanity";
import  ImageUrlBuilder  from "@sanity/image-url";

export const client  = createClient({
    projectId:"uft3vvh9",
    dataset:"production",
    apiVersion:"2023-06-09",
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN

})

const builder = ImageUrlBuilder(client)


export const urlFor = (s)=> builder.image(s)
