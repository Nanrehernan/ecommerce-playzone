import css from "../styles/cariito.module.css"
import { Delete, ChevronLeft, ChevronRight } from '@mui/icons-material'
import { red } from "@mui/material/colors"
import { useCart } from "@/hooks/useCart"

const CartItem = ({product}) => {
   const {image, title, price, cantidad} = product
   const {removeOneFromCart, addToQuantity, quantityDiscount} = useCart()

   const handleRemoveOneFromCart = () => {
      removeOneFromCart(product)
      window.alert(`El producto ${title} fue eliminado del carrito`)
   }

   const handleAddToQuantity = () => {
      addToQuantity(product)
   }

   const handleQuantityDiscount = () => {
      quantityDiscount(product)
   }
   
   return <>
      <div className={css.cart_item}>
         <div className={css.item_description}>
            <img src={image} alt="imagen" />
            <div>
               <span>{title}</span>
               <span>{price}</span>
            </div>
         </div>
         <div className={css.item_action}>
            <button onClick={handleQuantityDiscount}><ChevronLeft /></button>
            <span>{cantidad}</span>
            <button onClick={handleAddToQuantity}><ChevronRight /></button>
            <button onClick={handleRemoveOneFromCart}><Delete sx={{color: red[500]}} /></button>
         </div>
      </div>
   </>
}

export default CartItem