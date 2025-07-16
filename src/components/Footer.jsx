import css from "../styles/footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";

const Footer = () => {
   return (
      <>
         <footer className={css.footer}>
            <div className={css.footer_content}>

               <nav className={css.footer_link}>
                  <Link href="/">Inicio</Link>
                  <Link href="/acerca_de">Sobre Nosotros</Link>
                  <Link href="/privacidad">Privacidad</Link>
                  <Link href="/videojuegos">Video Juegos</Link>
                  <Link href="/cartas">Cartas</Link>
                  <Link href="/figuras">Figuras</Link>
                  <Link href="/contacto">Contacto</Link>
               </nav>

               <div className={css.footer_social}>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                     < FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                     < FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                     < FontAwesomeIcon icon={faWhatsapp} />
                  </a>
               </div>
            </div>

            <p>© PlayZone. Todos los derechos reservados </p>

         </footer>
      </>
   )
}

export default Footer
