import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
    return [
      {
        title: "GuitarLA - Sobre Nosotros"
      },
      {
        description: 'Venta de Guitarras'
      }
    ]
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit libero saepe animi molestias nemo et maxime itaque consequuntur culpa quis commodi quasi vitae, corrupti quisquam illum accusamus voluptatum, soluta dolor?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, expedita possimus voluptate quidem repudiandae perspiciatis veritatis? Facilis asperiores natus earum ipsum, eligendi vel quas, doloribus consectetur ipsam voluptates sit sed.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros