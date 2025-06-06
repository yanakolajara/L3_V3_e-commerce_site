import React from 'react';

export default function PhoneAppQR() {
  return (
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
  );
}
