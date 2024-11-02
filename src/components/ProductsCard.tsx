import React from 'react'
import { Card } from 'react-bootstrap'
import { useAppContext } from '../context/AppContext'
import CompressedImage from './CompressedImage'

interface Props {
  title: string,
  desc: string,
  img: string,
  animation: string,
  animationDelay: number
}

const ProductsCard = ({ title, desc, img, animation, animationDelay }: Props): React.JSX.Element => {
  const { showImage } = useAppContext()

  return (
    <Card
      data-ani={animation}
      data-delay={animationDelay}
      className='products-card border-0 overflow-hidden'>
      <div className="card-img-top overflow-hidden position-relative">
        <CompressedImage
          src={img}
          alt={title}
          loading='lazy'
          blurWidth="100%"
          blurHeight="100%"
          clickEvent={() => showImage(img)}
        />
      </div>

      <Card.Body>
        <Card.Title className="fw-semibold">{title}</Card.Title>
        <p className='text-black-50 fw-medium'>{desc}</p>
      </Card.Body>
    </Card>
  )
}

export default ProductsCard
