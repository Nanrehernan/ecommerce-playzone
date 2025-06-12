import React from 'react'
import Card from "@/components/Card"

const datosCartas = [
  {
    image: 'https://www.kroger.com/product/images/large/front/0082065081344',
    title: 'Pokémon',
    description: 'Box de Cartas',
    price: "$50.000"
  },
  {
    image: 'https://i.pinimg.com/564x/9d/c2/58/9dc25825cd8f91ec2b4d0161d785d0f2.jpg',
    title: 'Pikachu & Zekrom GX',
    description: 'Pokemon - Legendaria',
    price: "$800"
  },
  {
    image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/temporal-forces/en-us/SV05_EN_50.png',
    title: 'Walkin Wake ex',
    description: 'Carta Basica',
    price: "$200"
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0685/7451/1412/files/greninja-ex-214_167_480x480.jpg?v=1727469340',
    title: 'Greninja ex',
    description: 'Pokemon - Rara',
    price: "$400"
  },
    {
    image: 'https://tools.toywiz.com/_images/_webp/_products/lg/pokemonevolvingskies095.webp',
    title: 'Umbreon VMAX',
    description: 'Carta Ultra Rara',
    price: "$600"
  },
  {
    image: 'https://http2.mlstatic.com/D_837793-MLB82793874049_022025-O.jpg',
    title: 'Dragon Ball Z',
    description: 'Box de Cartas',
    price: "$50.000"
  },
  {
    image: 'https://i.ebayimg.com/thumbs/images/g/5gIAAOSwSqpnLo3F/s-l1200.jpg',
    title: 'Dragon Ball Z',
    description: 'Sobre de Cartas',
    price: "$5.000"
  },
  {
    image: 'https://totalcards.net/cdn/shop/files/DBS-BT25-154_41bf507c-a532-4b45-ad79-4964951d48a7.jpg?v=1721403770&width=535',
    title: 'Vegetta SS$ ',
    description: 'Dragon Ball Z - Ultra Rara',
    price: "$600"
  },
    {
    image: 'https://i.ebayimg.com/00/s/MTYwMFgxMjAw/z/f0YAAOSwRRpgPg4S/$_57.JPG?set_id=880000500F',
    title: 'Goku Ultra Instinto',
    description: 'Dragon Ball Z - Ultra Rara',
    price: "$600"
  },
  {
    image: 'https://cf.ltkcdn.net/antiques/images/std-xs/329877-340x477-son-goku-the-awakened-power.jpeg',
    title: 'Goku Ultra Instinto',
    description: 'Dragon Ball Z - Legendaria',
    price: "$800"
  },
  {
    image: 'https://m.media-amazon.com/images/I/71izXa2E5AL._AC_UF894,1000_QL80_.jpg',
    title: 'YU-GI-OH',
    description: 'Box de Cartas',
    price: "$50.000"
  },
  {
    image: 'https://media.miniaturemarket.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/o/kon86188-pack.jpg',
    title: 'YU-GI-OH',
    description: 'Sobre de Cartas',
    price: "$5.000"
  },
    {
    image: 'https://www.yugioh-card.com/en/wp-content/uploads/2024/07/SS-DMG03_550.png',
    title: 'Maga Oscura',
    description: 'Yu-gi-oh - Basica',
    price: "$200"
  },
  {
    image: 'https://m.media-amazon.com/images/I/515QwAS0JcL._AC_.jpg',
    title: 'Dragon blanco de ojo azules',
    description: 'Yu-gi-oh - Rara',
    price: "$400"
  },
  {
    image: 'https://images-eu.ssl-images-amazon.com/images/I/81JLy8VIaUL._AC_UL210_SR210,210_.jpg',
    title: 'Dragon Maestro de 3 Cabeza',
    description: 'Yu-gi-oh - Legendaria',
    price: "$800"
  },
]

const CartasPage = () => {
  return (
      <>
        <section>
            <h2>¡Elige tu carta y colecciona tu albúm!</h2>
            <div className="cards_list">{
              datosCartas.map((carta, i) => <Card key={i} card={carta} />)
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

export default CartasPage