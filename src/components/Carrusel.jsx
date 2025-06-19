import { Splide , SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css' ;
import "../styles/Carrusel.css";
import { cartas } from "@/data/cartas.data";


const Carrusel = () => {
  return (
    <div className="contenedor-carrusel">
      <h2> Productos Destacados</h2>
      <Splide 
        options={{
          type: 'loop',
          perPage: 3,
          gap: '1rem',
          autoplay: true,
          interval:3000,
          pauseOnHover: true,
          arrows: true,
          pagination:true,
          breakpoints: {
            768: {perPage: 1},
            1024: { perPage: 2}
          }

        }}
        aria-label="Carrusel de Juegos"
      >
        {cartas.map((carta) => (
            <SplideSlide key= {carta.id}>
                <div className="Cartas-data">
                    <img src={carta.image} alt="" />
                    <h3>{carta.title}</h3>
                    <p className="precio"> {carta.price}</p>
                </div>
            </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carrusel