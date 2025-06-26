import Card from "./Card.jsx"
import { cartas } from '@/data/cartas.data.js'
import css from "../styles/juegos.module.css"



const CartasPage = () => {
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

export default CartasPage