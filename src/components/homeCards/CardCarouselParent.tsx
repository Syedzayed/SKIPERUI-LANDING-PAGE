import React from 'react'
import { CardCarousel } from '../ui/card-carousel'

const CardCarouselParent = () => {
    const images=[
        {src: '/images/card1.webp' ,alt:"card1"},
        {src: '/images/card2.webp' ,alt:"card2"},
        {src: '/images/card3.webp' ,alt:"card3"},
    ]
  return (
    <div>
        <CardCarousel images={images} />
        </div>
  )
}

export default CardCarouselParent