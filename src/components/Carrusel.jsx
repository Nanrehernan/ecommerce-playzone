import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import css from "../styles/carrusel.module.css"
import Card from "./Card.jsx";
import { useEffect, useState } from "react";
import { api } from "@/utilities/api.axios";

const Carrusel = () => {
   const [cartas, setCartas] = useState([])
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      setLoading(true)
      api.get("/cartas")
         .then(response => {
            const { data } = response
            setCartas(data)
            setLoading(false)
         })
   }, [])

   return <>
      <div className={css.contenedor_carrusel}>
         <h2> Productos Destacados</h2>
         {loading ? "Cargando Contenido ..." :
            <Splide
               options={{
                  type: 'loop',
                  perPage: 3,
                  gap: '20px',
                  autoplay: true,
                  interval: 3000,
                  pauseOnHover: true,
                  arrows: true,
                  pagination: false,
                  breakpoints: {
                     768: { perPage: 1 }
                  }

               }}
               aria-label="Carrusel de Juegos"
            >
               {cartas.map((carta) => (
                  <SplideSlide key={carta.id}>
                     <div className={css.contenedor_slider}>
                        <Card card={carta} />
                     </div>
                  </SplideSlide>
               ))}
            </Splide>
         }
      </div>
   </>
}

export default Carrusel