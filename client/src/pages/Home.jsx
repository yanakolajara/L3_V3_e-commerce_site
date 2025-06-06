import React, { useState } from 'react';
import { Cta } from '../components/Cta/Cta';
import './Home.css';
import Hero from './components/Hero';
import Brands from './components/Brands';
import MostWatched from './components/MostWatched';
import TrendingSearches from './components/TrendingSearches';
import HotDeals from './components/HotDeals';
import Footer from '../components/Footer/Footer';
import JustListed from './components/JustListed';
import Categories from './components/Categories';
import PhoneAppQR from './components/PhoneAppQR';

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
      {/* <JustListed Cta={Cta} />
      <Categories />
      <PhoneAppQR /> */}
      <Footer />
    </main>
  );
}

// todo: create generic cards with props styles
