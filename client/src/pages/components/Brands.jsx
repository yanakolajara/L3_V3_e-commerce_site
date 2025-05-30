import React from 'react';
import './Brands.css';

export default function Brands() {
  return (
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
  );
}

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
    name: 'Boss',
    image:
      'https://res.cloudinary.com/reverb-cms/image/upload/curation%2Fvf4bfnpwuwvrdm9nbnvq',
    link: '',
  },
  {
    id: 3,
    name: 'Korg',
    image:
      'https://res.cloudinary.com/reverb-cms/image/upload/curation%2Fjcii6twdly0xf4tq4nas',
    link: '',
  },
  {
    id: 4,
    name: 'Fender',
    image:
      'https://res.cloudinary.com/reverb-cms/image/upload/curation%2Fsbskyljj4bvzhtdqqoly',
    link: '',
  },
  {
    id: 5,
    name: 'Electro-Harmonics',
    image:
      'https://res.cloudinary.com/reverb-cms/image/upload/curation%2Fzxjfj88hyjypf1gvoujc',
    link: '',
  },
  {
    id: 5,
    name: 'PRS',
    image:
      'https://res.cloudinary.com/reverb-cms/image/upload/curation%2Fvlz7cdvb99n1rac0xxgq',
    link: '',
  },
  {
    id: 5,
    name: 'MXR',
    image:
      'https://res.cloudinary.com/reverb-cms/image/upload/curation%2Fvf4bfnpwuwvrdm9nbnvq',
    link: '',
  },
  {
    id: 4,
    name: 'Yamaha',
    image:
      'https://res.cloudinary.com/reverb-cms/image/upload/curation%2Fsi1y0kzivyt7sqky8rrs',
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
    name: 'Moog',
    image:
      'https://res.cloudinary.com/reverb-cms/image/upload/curation%2Fsi1y0kzivyt7sqky8rrs',
    link: '',
  },
  {
    id: 4,
    name: 'Roland',
    image:
      'https://res.cloudinary.com/reverb-cms/image/upload/curation%2Fsi1y0kzivyt7sqky8rrs',
    link: '',
  },
  {
    id: 4,
    name: 'Epiphone',
    image:
      'https://res.cloudinary.com/reverb-cms/image/upload/curation%2Fsi1y0kzivyt7sqky8rrs',
    link: '',
  },
];
