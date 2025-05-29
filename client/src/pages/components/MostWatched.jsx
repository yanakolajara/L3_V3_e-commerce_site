import React, { useEffect } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import './MostWatched.css';

const Card = ({ product }) => {
  const { image, title, price, discount } = product;

  const hasDiscount = discount && discount !== '0';

  return (
    <div className='product-card'>
      <div className='product-image-container'>
        <img src={image} alt={title} className='product-image' />
        <button className='favorite-button' aria-label='Add to favorites'>
          <FaRegHeart className='heart-icon' />
        </button>
      </div>
      <div className='product-info'>
        <div className='product-price'>
          <span className='current-price'>{price}</span>
          {hasDiscount && (
            <span className='original-price'>
              $
              {parseFloat(discount) + parseFloat(price.replace(/[^0-9.]/g, ''))}
            </span>
          )}
        </div>
        <h3 className='product-title'>{title}</h3>
      </div>
    </div>
  );
};

export default function MostWatched({ mostWatched, setMostWatched }) {
  useEffect(() => {
    setMostWatched(MOST_WATCHED);
  }, [setMostWatched]);

  return (
    <section className='most-watched-section'>
      <div className='most-watched-header'>
        <h2 className='most-watched-title'>Most Watched in Bass Guitars</h2>
        <a href='#' className='see-more-link'>
          See more <span className='arrow'>→</span>
        </a>
      </div>

      <div className='product-grid'>
        {mostWatched.map((product) => (
          <Card key={product.title} product={product} />
        ))}
      </div>
    </section>
  );
}

const MOST_WATCHED = [
  {
    image:
      'https://rvb-img.reverb.com/image/upload/s--lTa_dD_i--/t_large-square/v1743203360/fbu1mblf1z8euu5wizq8.jpg',
    title: 'Fender Mustang Bass - 1976 - Walnut Brown',
    price: '$1,995',
    discount: '0',
    inWatchList: 'false',
  },
  {
    image:
      'https://rvb-img.reverb.com/image/upload/s--HVGL_WaA--/a_0/t_large-square/v1746042322/e5qxz9g5lijtborpuf68.jpg',
    title: 'Esh Stinger - Peter Steele',
    price: '$2,000',
    discount: '0',
    inWatchList: 'false',
  },
  {
    image:
      'https://rvb-img.reverb.com/image/upload/s--Nodp0UHe--/t_large-square/v1747692628/bjowkdehsuiiucekzfqy.jpg',
    title: 'Gibson Custom 1957 Les Paul Custom Reissue, Ebony | Demo',
    price: '$4,999',
    discount: '0',
    inWatchList: 'false',
  },
  {
    image:
      'https://rvb-img.reverb.com/image/upload/s--9vZ-ZNcl--/a_0/t_large-square/v1744728175/ozozqxq9xyodpauwf0kh.jpg',
    title: '1959 Gibson Les Paul Special (Refinish)',
    price: '$5,499',
    discount: '0',
    inWatchList: 'false',
  },
  {
    image:
      'https://rvb-img.reverb.com/image/upload/s---dyV8b-a--/a_0/t_large-square/v1741629186/g2s87v6ejsopuxeuuuyu.jpg',
    title: 'Vox Bobcat S66  - Italian Green',
    price: '$499.99',
    discount: '1000',
    inWatchList: 'false',
  },
  {
    image:
      'https://rvb-img.reverb.com/image/upload/s--GppQzh7f--/a_0/t_large-square/v1747234788/gkoslgq9lvqjzya2ku2o.jpg',
    title: 'Neural DSP Nano Cortex (B-Stock)',
    price: '$469',
    discount: '80',
    inWatchList: 'false',
  },
  {
    image:
      'https://rvb-img.reverb.com/image/upload/s--Vftn4Oop--/a_0/t_large-square/v1742222036/w3gejhqorkopeilf8py4.jpg',
    title: 'MXR M279 Deep Phase Phaser',
    price: '$49.99',
    discount: '80',
    inWatchList: 'false',
  },
  {
    image:
      'https://rvb-img.reverb.com/image/upload/s--d0cnIyha--/a_0/t_large-square/v1682607310/rkvi9vcngr8u5bzjfl5v.jpg',
    title:
      'KORG microKORG Crystal Special Edition - Semi-Translucent Synthesizer / Vocoder',
    price: '$299.99',
    discount: '230',
    inWatchList: 'false',
  },
];
