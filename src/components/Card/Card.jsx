import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './style.css';
import Loading from '../../components/Loading/Loading';
const Card = ({
    src,
    name,
    status,
    species,
}) => {
  return (
    <div className='container__card'>
      <LazyLoadImage
        src={src}
        width='100%'
        height='200px'
        alt={src}
        effect='blur'
        placeholderSrc={<Loading />}
      />
      <h2 className='card__title'>{name}</h2>
      <div className='container__caracteristicas'>
      <b>Status: {status}</b>
      <b>Specie: {species}</b>
      </div>

    </div>
  )
}

export default Card
