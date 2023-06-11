import { useLoaderData } from 'react-router-dom';
import { getGuitarras } from '~/models/guitarras.server'
import { getPosts } from '~/models/post.server';
import { getCurso } from '~/models/curso.server';
import ListadoGuitarras from '~/components/listadoGuitarras';
import ListadoPosts from '~/components/listadoPosts';
import Curso from '~/components/curso';
import stylesG from '~/styles/guitarras.css'
import stylesC from '~/styles/curso.css'
import stylesP from '~/styles/blog.css'


export function meta(){

}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: stylesG
    },
    {
      rel: 'stylesheet',
      href: stylesC
    },
    {
      rel: 'stylesheet',
      href: stylesP
    }
  ]
}

export async function loader(){
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
}
function Index() {
  const {guitarras, posts, curso} = useLoaderData()

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras}/>
      </main>

      <Curso curso={curso.attributes}/>

      <section className='contenedor'>
        <ListadoPosts posts={posts}/>
      </section>
    </>
  )
}

export default Index