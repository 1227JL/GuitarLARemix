import { useLoaderData } from '@remix-run/react';
import { getPost } from "~/models/post.server";
import { formatearFecha } from "~/utils/helpers"

export async function loader({params}){
  const { postUrl } = params
  const post = await getPost(postUrl)
  if(post.data.length === 0){
    throw new Response('',{
      status: 404,
      statusText: 'Entrada no encontrada'
    })
  }
  
  return post
}

export function meta(data){
  return [
    {
      title: `GuitarLA - ${data.data.data[0].attributes.titulo}`
    },
    {
      description: `Guitarras, venta de guitarras, entrada ${data.data.data[0].attributes.titulo}`
    }
  ]
}

export default function Post() {
  const post = useLoaderData()
  const {titulo, contenido, imagen, publishedAt} = post?.data[0]?.attributes
  return (
    <article className='post mt-3'>
      <img src={imagen.data.attributes.url} className="imagen" alt={`imagen blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
        </div>
    </article>
  )
}
