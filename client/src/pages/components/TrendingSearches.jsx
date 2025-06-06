import React from 'react';
import './TrendingSearches.css';
import { IoIosHeartEmpty } from 'react-icons/io';
import { CiHeart } from 'react-icons/ci';
import { SlHeart } from 'react-icons/sl';
import { PiHeartStraight } from 'react-icons/pi';

export default function TrendingSearches() {
  return (
    <section className='trending-searches'>
      <article className='trending-searches-header'>
        <h3 className='trending-searches-title'>Trending searches</h3>
      </article>
      <section className='trending-searches-cards'>
        {TRENDING_SEARCHES.map((search) => {
          return <Card key={search.title} search={search} />;
        })}
      </section>
    </section>
  );
}

const Card = ({ search }) => {
  const { image1, image2, title } = search;

  return (
    <section className='search-card'>
      <article className='search-card-header'>
        <h4>{title}</h4>

        <button className='search-card-watchlist-button'>
          <PiHeartStraight className='search-card-watchlist-button__icon' />
        </button>
      </article>
      <article className='search-card-images'>
        <img src={image1} alt={title} />
        <img src={image2} alt={title} />
      </article>
    </section>
  );
};

const TRENDING_SEARCHES = [
  {
    image1:
      'https://rvb-img.reverb.com/image/upload/s--NAH9Ukwq--/a_0/t_card-square/v1746326057/iajfl8bw9o3eikgp9oi4.jpg',
    image2:
      'https://rvb-img.reverb.com/image/upload/s--e_EShHDT--/t_card-square/v1748436600/lnf5erdf4ysem1e3aq64.jpg',

    title: 'friedman vintage s',
  },
  {
    image1:
      'https://rvb-img.reverb.com/image/upload/s--oYlGHVgY--/a_0/t_card-square/v1746114873/hgf4qvsdd58zg6wowsaz.jpg',
    image2:
      'https://rvb-img.reverb.com/image/upload/s--aUvYO4TE--/a_0/t_card-square/v1744136363/t4a2kcemspck7x1j0xmo.jpg',

    title: 'undertone',
  },
  {
    image1:
      'https://rvb-img.reverb.com/image/upload/s--AnfF5LVs--/a_0/t_card-square/v1748256598/euj0baqmcpagxlyv8kws.jpg',
    image2:
      'https://rvb-img.reverb.com/image/upload/s--rldTHeHN--/a_0/t_card-square/v1727996500/bwcppxq4ggp5fwsbjq9b.jpg',

    title: 'valeton',
  },
];
