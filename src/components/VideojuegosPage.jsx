import Card from "@/components/Card.jsx"
import { videoJuegos } from '@/data/videojuegos.data.js'
import css from "../styles/juegos.module.css"

const VideojuegosPage = () => {
   return <>
      <section>
         <h2 className={css.titulo}>¡Elige y disfruta jugando en tu plataforma favorita!</h2>
         <div className={css.cards_list}>
            {
               videoJuegos.map((videoJuego) => <Card key={videoJuego.id} card={videoJuego} />)
            }
         </div>
      </section>
   </>
}

export default VideojuegosPage
