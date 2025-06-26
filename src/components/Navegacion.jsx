import Link from "next/link";
import css from "../styles/navegacion.module.css"
import { Menu, ShoppingCart } from '@mui/icons-material';
import { useState } from "react";


const Navegacion = () => {
   const [showMenu, setShowmenu] = useState(false)

   const handleShowMenu = () => {
      setShowmenu(!showMenu)
   }

   return <>
      <nav className={css.navbar}>
         <button onClick={handleShowMenu} className={css.button_menu}><Menu /></button>
         
         <div className={css.logo}>
            <img src="/logo.png" className={css.logo_img} />
            <h2 className={css.logo_text}>PlayZone</h2>
         </div>

         <div className={`${css.nav_links} ${showMenu && css.show_menu}`}>
            <Link href="/">Inicio</Link>
            <Link href="/videojuegos">Video Juegos</Link>
            <Link href="/cartas">Cartas</Link>
            <Link href="/figuras">Figuras</Link>
            <Link href="/contacto">Contacto</Link>
         </div>

         <button className={css.button_cart}>
            <ShoppingCart />
         </button>
      </nav>
   </>
}

export default Navegacion

