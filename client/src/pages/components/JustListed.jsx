import React from 'react';

export default function JustListed({ Cta }) {
  return (
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
  );
}
