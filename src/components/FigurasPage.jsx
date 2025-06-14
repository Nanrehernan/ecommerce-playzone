import React from 'react'
import Card from "@/components/Card"
import { figuras } from '@/data/figuras.data'
import css from "../styles/juegos.module.css"



const MunecosPage = () => {
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

export default MunecosPage
