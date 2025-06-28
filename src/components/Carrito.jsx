import Button from "./Button"
import css from "../styles/cariito.module.css"
import { useCart } from "@/hooks/useCart"
import css_button from "../styles/button.module.css"
import { Close } from '@mui/icons-material'
import CartItem from "./CartItem"
import { AttachMoney, Delete } from '@mui/icons-material'

const Carrito = () => {
   const { setShowCart, cartProducts, deleteToCart, countToQuanty } = useCart()

   const handleShowCart = () => {
      setShowCart(prevShowCart => !prevShowCart)
   }

   const handleDeleteToCart = () => {
      deleteToCart()
      window.alert("Todos los productos del carrito fueron eliminados")
   }

   const handleProcesarCompra = () => {
      if (cartProducts.length === 0) return window.alert("Elc arrito está vacío")

      deleteToCart()
      window.alert("La venta fue procesada")
   }

   return <>
      <div className={css.cart_box}>
         <aside className={css.cart}>
            <header>
               <h3>Mi Carrito ({countToQuanty()})</h3>
               <button className="close-cart" onClick={handleShowCart}>
                  <Close />
               </button>
            </header>

            <section className={css.cart_list}>
               {cartProducts.length === 0 && "El carrito está vacío"}
               {cartProducts.map(product => <>
                  <CartItem key={product.title} product={product} />
                  <hr />
               </>)}
            </section>

            <footer>
               <section>
                  <span>Total:</span>
                  <span className={css.price}>$ {countToQuanty()}</span>
               </section>
               <div>
                  <Button className={css_button.button_clear_carrito} onClick={handleDeleteToCart}>
                     <Delete />
                     Limpiar
                  </Button>
                  <Button className={css_button.button_comprar} onClick={handleProcesarCompra}>
                     <AttachMoney color="success" />
                     Procesar Compra
                  </Button>
               </div>
            </footer>
         </aside>
      </div>
   </>
}

export default Carrito