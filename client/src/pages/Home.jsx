import React, { useState } from 'react';
import { Cta } from '../components/Cta/Cta';
import './Home.css';
import Hero from './components/Hero';
import Brands from './components/Brands';
import MostWatched from './components/MostWatched';
import TrendingSearches from './components/TrendingSearches';
import HotDeals from './components/HotDeals';

export default function Home() {
  const [mostWatched, setMostWatched] = useState([]);
  const [bestSelling, setBestSelling] = useState([]);

  return (
    <main className='home'>
      <Hero />
      <Brands />

      <MostWatched
        Cta={Cta}
        mostWatched={mostWatched}
        setMostWatched={setMostWatched}
      />

      <TrendingSearches />
      <HotDeals />

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
