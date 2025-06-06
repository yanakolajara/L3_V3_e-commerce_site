import React from 'react';
import './HotDeals.css';
import { PiHeartStraight } from 'react-icons/pi';

export default function HotDeals() {
  // todo: png image should be trimmed
  // todo: image background should be gray
  // todo: add shipping and return policy icons
  return (
    <section className='hot-deals'>
      <div className='hot-deals-header'>
        <h3>Hot deals this week</h3>
      </div>
      <div className='deals-grid'>
        {HOT_DEALS.map((deal) => (
          <div key={deal.id} className='deal-card'>
            <div className='deal-image'>
              <img src={deal.image} alt={deal.title} loading='lazy' />
              <button className='watchlist-button'>
                <PiHeartStraight />
              </button>
              <div className='price-drop'>PRICE DROP</div>
            </div>
            <div className='deal-info'>
              <h4>{deal.title}</h4>
              <span className='condition'>{deal.condition}</span>
              <div className='price-info'>
                <span className='current-price'>{deal.price}</span>
                <span className='original-price'>{deal.originalPrice}</span>
              </div>
              <div className='deal-meta'>
                <span className='shipping'>{deal.shipping}</span>
                <span className='policy'>{deal.policy}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const HOT_DEALS = [
  {
    id: 1,
    title: 'Vox Bobcat V90 - Sapphire Blue',
    price: '$599.99',
    originalPrice: '$900',
    image:
      'https://rvb-img.reverb.com/image/upload/s--QOIR0mTA--/a_0/t_card-square/v1741630563/rnwrt7qanhdpgpegv1ca.jpg',
    condition: 'Brand New',
    shipping: 'Free Shipping',
    policy: '14-Day Return Policy',
  },
  {
    id: 2,
    title: 'Charvel Pro-Mod San Dimas Bass P/IV Bass Guitar, Platinum',
    price: '$549.99',
    originalPrice: '$750',
    image:
      'https://rvb-img.reverb.com/image/upload/s--RjeMNJuy--/t_card-square/v1663157460/ytrkob1ulkmqnalaoztv.jpg',
    condition: 'Brand New',
    shipping: 'Free Shipping',
    policy: '30-Day Return Policy',
  },
  // Add more items as needed
];
