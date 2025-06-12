import React from 'react'
import Card from "@/components/Card"


const Videojuegos = [
  {
    image: 'https://m.media-amazon.com/images/I/81htlTqEckL._SL1500_.jpg',
    title: 'Grand Thef Auto V',
    description: 'Plataforma PS4',
    price: "$43.000" ,
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Jj4OXOFOvQZvw_buj7ftgSNTVUf2CX5PbWLpJkED9qk9hs3ICRT-Ko-DwsuIXtOTtNA&usqp=CAU',
    title: 'EA Sport FC 25',
    description: 'Plataforma PS5',
    price:"$101.000",
  },
  {
    image: 'https://static.viaaurea.eu/t/game2k-new.cz/images/13697.jpg/o-w:600%7Ch:600/s-b4260b17984b?fn=call_of_duty_black_ops_iii_xone_1.jpg&_ts=1605534563g',
    title: 'Call of Duty Black Ops III',
    description: 'Plataforma Xbox One',
    price: "$87.000"
  },
  {
    image: 'https://production-gameflipusercontent.fingershock.com/us-east-1:8725a9b1-6043-498b-a460-fc5085793522/57f767e8-fb9a-42d5-a28c-d8001ab6dced/eb6c0a26-cec2-46f0-ac6e-c0b9dd506bcf/640x640.webp',
    title: 'Fornite',
    description: 'Plataforma PC',
    price: "$10.000"
  },
    {
    image: 'https://i.redd.it/playstation-counter-strike-1-6-source-go-2-original-post-v0-5h235kjlyyec1.jpg?width=794&format=pjpg&auto=webp&s=23e9cdfd65deb7d6036ebbc0fa010ec3792b287f',
    title: 'Counter Strike GO',
    description: 'Plataforma PS5',
    price: "$8.000"
  },
  {
    image: 'https://i.redd.it/f68iwz4njkw91.jpg',
    title: 'Uncharted 5',
    description: 'Plataforma PS5',
    price: "$72.000"
  },
  {
    image: 'https://http2.mlstatic.com/D_Q_NP_670139-MLA85296705790_062025-O.webp',
    title: 'F1 2025',
    description: 'Plataforma Xbox Serie X',
    price: "$86.000"
  },
  {
    image: 'https://p1.akcdn.net/full/1191447598.electronic-arts-ufc-5-xbox-series-x-s.jpg',
    title: 'UFC 5',
    description: 'Plataforma Xbox Serie X',
    price: "$60.000"
  },
    {
    image: 'https://juegosdigitalesargentina.com/files/images/productos/1651790904-jump-force-xbox-series-xs-0.jpg',
    title: 'Jump Force',
    description: 'Plataforma Xbox Serie X y S',
    price: "$50.000"
  },
  {
    image: 'https://www.clavecd.es/wp-content/uploads/rust-console-edition-featured-300x300-1.jpg',
    title: 'Rust',
    description: 'Plataforma PC',
    price: "$27.500"
  },
  {
    image: 'https://cdn.awsli.com.br/22/22652/produto/220955950/capa-wflyav931e.jpg',
    title: 'Dragon Ball Z Kakarot',
    description: 'Plataforma PC',
    price: "$17.000"
  },
  {
    image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/08/caratula-ark-survival-evolved.jpg?tf=1200x',
    title: 'Ark Survival Evolved',
    description: 'Plataforma PC',
    price: "$20.000"
  },
    {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAnSS-LpGf4S3Rulim5x2bTGbiwYon141QgQ&s',
    title: 'Rainbow 6 Siege X',
    description: 'Plataforma PC',
    price: "$23.000"
  },
  {
    image: 'https://juegosdigitalesargentina.com/files/images/productos/1658270695-forza-horizon-5-xbox-series-xs-0.jpg',
    title: 'Forza Horizon 5',
    description: 'Plataforma Xbox Serie X y S',
    price: "$24.000"
  },
  {
    image: 'https://gorilagames.com/img/Public/1019/38946-producto-assassins-creed-shadows-for-playstation-gorila-games-1.jpg',
    title: 'Assassins Creed Shadows',
    description: 'Plataforma PS5',
    price: "$43.000"
  },
]

const VideojuegosPage = () => {
  return (
      <>
        <section>
            <h2>¡Elige y disfruta jugando en tu plataforma favorita!</h2>
            <div className="cards_list">
                {
                    Videojuegos.map((videojuego, i) => <Card key={i} card={videojuego} />)
                }
            </div>
        </section>
        

        <style jsx>{`
            section {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
            }
            .cards_list {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                width: 80%;
            }
            .cards_list :global(.card) {
                margin: 5px;
                margin-top: 5px;
            }

        `}</style>
    </>
  )
}

export default VideojuegosPage
  