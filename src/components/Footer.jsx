import "../styles/footer.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram , faFacebook , faWhatsapp} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
    <footer className="footer">
        <div className="footer-content">
            <p>© PlayZone. Todos los derechos reservados </p>

            <div className="footer-link">
                <a href="/acerca_de">Acerca de</a>
                <a href="/contacto">Contacto</a>
                <a href="/privacidad">Privacidad</a>
            </div>

            <div className="footer-social">
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
