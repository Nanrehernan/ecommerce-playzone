import css from "../styles/footer.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram , faFacebook , faWhatsapp} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
    <footer className={css.footer}>
        <div className={css.footer_content}>
            <p>© PlayZone. Todos los derechos reservados </p>

            <div className={css.footer_link}>
                <a href="">Acerca de</a>
                <a href="">Contacto</a>
                <a href="">Privacidad</a>
            </div>

            <div className={css.footer_social}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                < FontAwesomeIcon icon={faInstagram}/>
                </a>
                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                < FontAwesomeIcon icon={faFacebook}/>
                </a>
                 <a href="" target="_blank" rel="noopener noreferrer">
                < FontAwesomeIcon icon={faWhatsapp}/>
                </a>
            </div>
        </div>

    </footer>
    </>
  )
}

export default Footer
