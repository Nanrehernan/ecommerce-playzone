import Button from './Button.jsx'
import css from "../styles/card.module.css"
import css_button from "../styles/button.module.css"
import { ShoppingCart } from "@mui/icons-material";
import { useCart } from '@/hooks/useCart.js';
import { priceFormat } from '@/utilities/priceFormat.utility.js';

const Card = ({ card }) => {
   const {addToCart} = useCart()

   const handleAddToCart = () => {
      addToCart(card)
      window.alert(`El producto "${card.title}" fue agreado al carrito`)
   }

   return <>
      <div className={css.card}>
         <img src={card.image} alt={card.title} className={css.img} />

         <div className={css.text_content}>
            <h3>{card.title}</h3>
            <span>{card.description}</span>
            <span className={`${css.price}`}>{priceFormat(card.price)}</span>
         </div>
         
         <Button className={css_button.button_agregar} onClick={handleAddToCart}>
            <ShoppingCart />
            Agregar al carrito
         </Button>
      </div>
   </>
}

export default Card
