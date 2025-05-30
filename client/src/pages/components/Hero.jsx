import React from 'react';
import imagePlaceholder from '../../assets/image-placeholder.svg';
import './Hero.css';

export default function Hero() {
  return (
    <section className='home__hero'>
      <article className='home__hero-content'>
        <h2 className='home__hero-title'>Explore what's trending this week.</h2>
        <p className='home__hero-subtitle'>
          Top deals and gear stories our community is loving.
        </p>
        <button className='home__hero-button'>Search new & used</button>
      </article>
      <article className='home__hero-cards'>
        <section className='home__hero-card'>
          <img
            src='https://res.cloudinary.com/reverb-cms/image/upload/curation%2Frfidspvonfxxztn4xrtr'
            alt='promo-card-image'
          />
          <article className='home__hero-card__text'>
            <p>DEAL: Save up to 80% on Eventide Harmonizers</p>
          </article>
        </section>
        <section className='home__hero-card'>
          <img
            src='https://res.cloudinary.com/reverb-cms/image/upload/curation%2Flnscw2rwpurldhx5sfad'
            alt='promo-card-image'
          />
          <article className='home__hero-card__text'>
            <p>BEST OF USED: Sonic Youth's Official Reverb Shop</p>
          </article>
        </section>
        <section className='home__hero-card'>
          <img
            src='https://res.cloudinary.com/reverb-cms/image/upload/curation%2Fsepyfdrdtsosjp5urlpt'
            ralt='promo-card-image'
          />
          <article className='home__hero-card__text'>
            <p>STUDIO TOUR: Inside Bootsy Collins' Boot Cave</p>
          </article>
        </section>
      </article>
    </section>
  );
}
