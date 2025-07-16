import Card from "./Card.jsx"
import css from "../styles/juegos.module.css"
import { useEffect, useState } from "react"
import { api } from "@/utilities/api.axios.js"



const CartasList = () => {
   const [cartas, setCartas] = useState([])

   useEffect(() => {
      api.get("/cartas")
      .then(response => {
         const {data} = response
         setCartas(data)
      })
   }, [])

   return <>
      <section>
         <h2 className={css.titulo}>¡Elige tu carta y colecciona tu albúm!</h2>
         <div className={css.cards_list}>
            {
               cartas.map((carta) => <Card key={carta.id} card={carta} />)
            }
         </div>
      </section>
   </>
}

export default CartasList