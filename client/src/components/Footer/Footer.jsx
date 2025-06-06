import React, { useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [newsletter, setNewsletter] = useState('');
  return (
    <footer className='footer'>
      <section className='main-footer'>
        <article className='main-footer__section'>
          <h4>Shop Gear</h4>
          <a href=''>Categorie</a>
          <a href=''>Brands</a>
          <a href=''>Shops</a>
          <a href=''>Deals and Steals</a>
          <a href=''>Price Drops</a>
          <a href=''>0% Financing</a>
          <a href=''>New and Popular</a>
        </article>

        <article className='main-footer__section'>
          <h4 href=''>Sell on Reverb</h4>
          <a href=''>Seller Hub</a>
          <a href=''>Reverb Payments FAQ</a>
          <h4 href=''>Resources</h4>
          <a href=''>Reverb News</a>
          <a href=''>Price Guide</a>
          <a href=''>Buying Guides</a>
          <a href=''>Gift Cards</a>
        </article>
        <article className='main-footer__section'>
          <h4 href=''>Help & Tools</h4>
          <a href=''>Help Center</a>
          <a href=''>Contact Support</a>
          <a href=''>Reverb Protection</a>
          <a href=''>Mobile Apps</a>
          <a href=''>Integrations & API</a>
          <a href=''>Affiliate Program</a>
          <a href=''>Privacy Settings</a>
        </article>
        <article className='main-footer__section'>
          <h4>Company</h4>
          <a href=''>About Reverb</a>
          <a href=''>Careers</a>
          <a href=''>Press</a>
          <a href=''>Reverb Gives</a>
          <a href=''>Trust & Safety</a>
        </article>
        <section className='main-footer__section newsletter'>
          <h3>Get the Best of Reverb in Your Inbox</h3>
          <form action='' className='newsletter__form'>
            <input
              className='newsletter__form__input'
              type='email'
              placeholder='Your Email'
              value={newsletter}
              onChange={(e) => setNewsletter(e.target.value)}
            />
            <hr />
            <input
              className='newsletter__form__submit'
              type='submit'
              value='Subscribe'
            />
          </form>

          <span className='terms__text'>
            By clicking Subscribe, I agree to receive exclusive offers &
            promotions, news & reviews, and personalized tips for buying and
            selling on Reverb.
          </span>
        </section>
      </section>
      <section className='sub-footer'>
        <p>
          © 2025 Reverb.com LLC <a href='#'>Terms & Policies</a>
          <a href='#'>Privacy Policy</a>
        </p>
      </section>
    </footer>
  );
}
