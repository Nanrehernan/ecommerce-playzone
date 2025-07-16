import Card from "@/components/Card.jsx"
import css from "../styles/juegos.module.css"
import { api } from "@/utilities/api.axios"
import { useEffect, useState } from "react"

const VideoJuegosList = () => {
   const [videoJuegos, setVideoJuegos] = useState([])

   useEffect(() => {
      api.get("/videojuegos")
      .then(response => {
         const {data} = response
         setVideoJuegos(data)
      })
   }, [])

   return <>
      <section>
         <h2 className={css.titulo}>¡Elige y disfruta jugando en tu plataforma favorita!</h2>
         <div className={css.cards_list}>
            {
               videoJuegos.map((videoJuego) => <Card key={videoJuego.id} card={videoJuego} />)
            }
         </div>
      </section>
   </>
}

export default VideoJuegosList
