import React from 'react'
import Card from "./Card.jsx"
import { figuras } from '@/data/figuras.data.js'
import css from "../styles/juegos.module.css"



const FigurasList = () => {
   return <>
      <section>
         <h2 className={css.titulo}>¡Colecciona tus figuras favoritas!</h2>
         <div className={css.cards_list}>
            {
               figuras.map((carta) => <Card key={carta.id} card={carta} />)
            }
         </div>
      </section>
   </>
}

export default FigurasList
