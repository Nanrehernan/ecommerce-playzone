import Button from "./Button"
import css from "../styles/cariito.module.css"
import { useCart } from "@/hooks/useCart"
import css_button from "../styles/button.module.css"
import { Close, Delete, ChevronLeft, ChevronRight } from '@mui/icons-material'

const Carrito = () => {
   const { setShowCart } = useCart()

   const handleShowCart = () => {
      setShowCart(prevShowCart => !prevShowCart)
   }

   return <>
      <div className={css.cart_box}>
         <aside className={css.cart}>
            <header>
               <h3>Mi Carrito</h3>
               <button className="close-cart" onClick={handleShowCart}>
                  <Close />
               </button>
            </header>

            <section className={css.cart_list}>
               <div className={css.cart_item}>
                  <div className={css.item_description}>
                     <img src="https://m.media-amazon.com/images/I/81htlTqEckL._SL1500_.jpg" alt="imagen" />
                     <div>
                        <span>Grand Thef Auto V</span>
                        <span>$12.000</span>
                     </div>
                  </div>
                  <div className={css.item_action}>
                     <button><ChevronLeft /></button>
                     <span>1</span>
                     <button><ChevronRight /></button>
                     <button><Delete /></button>
                  </div>
               </div>

               <div className={css.cart_item}>
                  <div className={css.item_description}>
                     <img src="https://m.media-amazon.com/images/I/81htlTqEckL._SL1500_.jpg" alt="imagen" />
                     <div>
                        <span>Grand Thef Auto V</span>
                        <span>$12.000</span>
                     </div>
                  </div>
                  <div className={css.item_action}>
                     <button><ChevronLeft /></button>
                     <span>1</span>
                     <button><ChevronRight /></button>
                     <button><Delete /></button>
                  </div>
               </div>

               <div className={css.cart_item}>
                  <div className={css.item_description}>
                     <img src="https://m.media-amazon.com/images/I/81htlTqEckL._SL1500_.jpg" alt="imagen" />
                     <div>
                        <span>Grand Thef Auto V</span>
                        <span>$12.000</span>
                     </div>
                  </div>
                  <div className={css.item_action}>
                     <button><ChevronLeft /></button>
                     <span>1</span>
                     <button><ChevronRight /></button>
                     <button><Delete /></button>
                  </div>
               </div>

               <div className={css.cart_item}>
                  <div className={css.item_description}>
                     <img src="https://m.media-amazon.com/images/I/81htlTqEckL._SL1500_.jpg" alt="imagen" />
                     <div>
                        <span>Grand Thef Auto V</span>
                        <span>$12.000</span>
                     </div>
                  </div>
                  <div className={css.item_action}>
                     <button><ChevronLeft /></button>
                     <span>1</span>
                     <button><ChevronRight /></button>
                     <button><Delete /></button>
                  </div>
               </div>
            </section>

            <footer>
               <section>
                  <span>Total:</span>
                  <span>$12.000</span>
               </section>
               <Button className={css_button.button_comprar}>Procesar Compra</Button>
            </footer>
         </aside>
      </div>
   </>
}

export default Carrito