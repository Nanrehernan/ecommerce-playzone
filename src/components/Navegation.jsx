import Link from "next/link"
import Button from "./Button/Button"


const Navegation = () => {
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src="./logo.png" className="logo-img"/>
                    <h2 className="Logo-text">PlayZone</h2>
                </div>

                <div className="nav-links">
                    <Link href="/">Inicio</Link>
                    <Link href="/videojuegos">Videojuegos</Link>
                    <Link href="/cartas">Cartas</Link>
                    <Link href="/figuras">Figuras</Link>
                    <Link href="/contacto">Contacto</Link>
                </div>

                <div className="cart-button">
                    <button className="cart-icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/57/57629.png" className="icon-img"/>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navegation

