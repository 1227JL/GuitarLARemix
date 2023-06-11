import { Outlet } from "react-router-dom"
import styles from '~/styles/blog.css'

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

function Blog() {
  return (
    <main className="contenedor">
        <Outlet/>
    </main>
  )
}

export default Blog