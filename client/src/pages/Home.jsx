import React, { useState } from 'react';
import { Cta } from '../components/Cta/Cta';
import './Home.css';
import Hero from './components/Hero';

export default function Home() {
  const [mostWatchedProducts, setMostWatchedProducts] = useState([]);
  const [bestSellingProducts, setBestSellingProducts] = useState([]);

  return (
    <main className='home'>
      <Hero />
      <section className='home__brands'>
        <h3 className='home__brands-title'>
          Save an average of 30% on top brands by buying used
        </h3>
        <section className='home__brands-cards'>
          {BRAND_CARDS.map((card) => {
            return (
              <article className='home__brands-card'>
                <img src={card.image} alt={card.name} />
              </article>
            );
          })}
          <article className='home__brands__brand-card'>
            <div
              className='home__brands__brand-card__background'
              // style={{ backgroundImage }}
            />
            <div
              className='home__brands__brand-card__logo'
              // style={{ backgroundImage: logoImage }}
            />
          </article>
        </section>
      </section>

      <section className='home__most-watched'>
        <h3>Most Watched music gear</h3>
        <Cta>See more →</Cta>
        <section className='home__most-watched__products'>
          {mostWatchedProducts.map((product) => {
            const backgroundImage = product.image
              ? `url(${product.image})`
              : '';
            return (
              <article
                className='home__most-watched__product'
                key={product.id}
                style={{ backgroundImage }}
              >
                <button className='home__most-watched__product__favorite'></button>
                <div className='home__most-watched__product__info'>
                  <p>{product.price}</p>
                  <p>{product.title}</p>
                </div>
              </article>
            );
          })}
        </section>
      </section>

      <section className='home__trending-searches'>
        <h2>Trending searches</h2>
        <section className='home__trending-searches__cards'>
          {/* // todo show 3 cards 
          - 2 images
          - header light
          - text on header
          - text dark */}
        </section>
      </section>

      <section className='home__hot-deals'>
        <h2>
          Hot deals this week
          <section className='home__hot-deals__cards'>
            {/* // todo: show 11 cards 
            - image on top
            - padding 10px
            - text on bottom
            - fav button on image (right-top)  */}
          </section>
        </h2>
      </section>

      <section className='home__just-listed'>
        <h2>
          <h2>Just listed</h2>
          <Cta>See more →</Cta>
          <section className='home__just-listed__cards'>
            {/* // todo: show 11 cards
            - image on top
            - padding 10px
            - text on bottom
            - fav button on image (right-top) */}
          </section>
        </h2>
      </section>

      <section className='home__categories'>
        <h2>Browse by category</h2>
        <section className='home__categories__cards'>
          {/*
          // todo: build special grid
          // todo: show 10 cards

          FIRST ROW (6 cards)
          - Image on top
          - Title on botton
          - Background grey 
          - Hover white  
          
          SECOND ROW (4 cards)
          - Image on right
          - Title on left
          - Background grey 
          - Hover white
          */}
        </section>
      </section>

      <section className='home__app'>
        <section className='home__app__qr-code'>
          <p>Scan with your camera app to download</p>
          <img src='' alt='qr-code' />
        </section>
        <section className='home__app__text'>
          <h2>Never miss a deal with the Reverb app</h2>
          <h2>Be the first to know about price drops on the gear you want.</h2>
        </section>
        <section className='home__app__promotion-image'>
          <img src='' alt='promotion image' />
        </section>
      </section>
    </main>
  );
}

// todo: create generic cards with props styles

const BRAND_CARDS = [
  {
    id: 1,
    name: 'Gibson',
    image:
      'https://res.cloudinary.com/reverb-cms/image/upload/curation%2Fvqs50rm6qlqquoizhakm',
    link: '',
  },
  {
    id: 2,
    name: 'Fender',
    image:
      'https://res.cloudinary.com/reverb-cms/image/upload/curation%2Fsbskyljj4bvzhtdqqoly',
    link: '',
  },
  {
    id: 3,
    name: 'Ibanez',
    image:
      'https://res.cloudinary.com/reverb-cms/image/upload/curation%2Fsrahoqhkhtsjknlbb0bz',
    link: '',
  },
  {
    id: 4,
    name: 'Yamaha',
    image:
      'https://res.cloudinary.com/reverb-cms/image/upload/curation%2Fsi1y0kzivyt7sqky8rrs',
    link: '',
  },
];
