import { useLoaderData, Outlet } from "react-router-dom"
import ListadoPosts from "../components/listadoPosts"
import { getPosts } from "../models/post.server"

export async function loader(){
  const posts = await getPosts()
  
  return posts.data
}

export function meta(){
    return [
    {
        title: 'GuitarLA - Nuestro Blog'
    },
    {
        description: 'GuitarLA, Blog de música y venta de guitarras'
    }
    ]
}

function Blog() {
  const posts = useLoaderData()
  return (
    <ListadoPosts posts={posts}/>
  )
}

export default Blog