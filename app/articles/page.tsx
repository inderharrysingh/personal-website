import { getPosts } from "@/lib/get_posts";
import { SanityDocument } from "next-sanity";
import { MyCard } from "../_components/Showpost";



export default async function Home() {

    const posts = await getPosts() 
        return (
            <div>
               { posts.map( ( post ) => {
                return  (
                <div key={post._id}>  <MyCard  card={post}  /></div>
               
    )
               })}
            </div>
        )
}