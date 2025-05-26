import React from 'react';
import imagePlaceholder from '../../assets/image-placeholder.svg';
import './Hero.css';

export default function Hero() {
  return (
    <section className='home__hero'>
      <article className='home__hero-content'>
        <h2 className='home__hero-title'>Save up to 66% off now</h2>
        <p className='home__hero-subtitle'>Memorial Day sales are here</p>
        <button className='home__hero-button'>Shop the sales</button>
      </article>
      <article className='home__hero-cards'>
        <section className='home__hero-card'>
          <img src={imagePlaceholder} alt='promo-card-image' />
          <article className='home__hero-card__text'>
            <p>promo text</p>
          </article>
        </section>
        <section className='home__hero-card'>
          <img src={imagePlaceholder} alt='promo-card-image' />
          <article className='home__hero-card__text'>
            <p>promo text</p>
          </article>
        </section>
        <section className='home__hero-card'>
          <img src={imagePlaceholder} ralt='promo-card-image' />
          <article className='home__hero-card__text'>
            <p>promo text</p>
          </article>
        </section>
      </article>
    </section>
  );
}
