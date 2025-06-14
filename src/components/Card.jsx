import React from 'react'
import Button from './Button'
import css from "../styles/card.module.css"
import css_button from "../styles/button.module.css"

const Card = ({ card }) => {
   return <>
      <div className={css.card}>
         <img src={card.image} alt={card.title} className={css.img} />

         <div className={css.text_content}>
            <h3 className={css.h3}>{card.title}</h3>
            <p className={css.p}>{card.description}</p>
            <p className={`${css.p} ${css.price}`}>{card.price}</p>
         </div>
         
         <Button className={css_button.button_agregar}>Comprar</Button>
      </div>
   </>
}

export default Card
