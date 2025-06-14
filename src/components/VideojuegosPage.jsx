import React from 'react'
import Card from "@/components/Card"
import { videoJuegos } from '@/data/videojuegos.data'
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
