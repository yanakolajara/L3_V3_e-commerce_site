import React from 'react';
import { Cta } from '../Cta/Cta';
import './Navbar.css';

export function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>Reverb</div>
      <div className='navbar-searchbar'>
        <form className='navbar-searchbar__form'>
          <input
            className='navbar-searchbar__input'
            type='text'
            placeholder='Shop for used & new music gear...'
          />
          <input type='submit' />
        </form>
      </div>
      <div className='navbar-options'>
        <Cta>Sell Your Gear</Cta>
        <Cta>Favorites</Cta>
        <Cta>Cart</Cta>

        <Cta>Sign Up</Cta>
        <Cta>Log In</Cta>
      </div>
    </nav>
  );
}
