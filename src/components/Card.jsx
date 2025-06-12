import React from 'react'
import Button from './Button/Button'
import { jsx } from 'react/jsx-runtime'
import ButtonSecundario from './Button/ButtonSecundario'

const Card = ({card}) => {
  return (

    <>


    <div className='card'>
      
      <img src={card.image} alt={card.title} />
      <div className='text-content'>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <p className='price'>{card.price}</p>
      </div>
      <ButtonSecundario/>
    </div>



    <style jsx> {`
      
      .card {
        border: none;
        background-color: #FFF3EB;
        width:200px;
        height: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
        box-shadow: 0px 1px 1px 1px black;
        padding-top:5px;
    }
    img {
        width: 80%;
        height: 62%;
        object-fit: cover;
        padding:3px
    }
    .text-content {
        width: inherit;
    }
    h3, p {
        text-align: center;
        line-height: 1.5;
    }
    h3 {
        font-size: 1rem;
    }
    p {
        font-size: 0.8rem;
    }
  .price {
        font-size: 1rem;
  }

  }

`}
</style>
    </>
  )
}

export default Card
