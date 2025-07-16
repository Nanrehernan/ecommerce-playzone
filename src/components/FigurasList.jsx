import { useEffect, useState } from 'react'
import Card from "./Card.jsx"
import css from "../styles/juegos.module.css"
import { api } from '@/utilities/api.axios.js'



const FigurasList = () => {
   const [figuras, setFiguras] = useState([])

   useEffect(() => {
      api.get("/figuras")
      .then(response => {
         const {data} = response
         setFiguras(data)
      })
   }, [])

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
