import React from 'react';
import { Cta } from '../Cta/Cta';
import { VscSearch } from 'react-icons/vsc';
import './Navbar.css';
import logo from '../../assets/ReverbLogo.svg';

export function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt='Reverb Logo' />
      </div>
      <div className='navbar-searchbar'>
        <form className='navbar-searchbar__form'>
          <input
            className='navbar-searchbar__input'
            type='text'
            placeholder='Shop for used & new music gear...'
          />
          <VscSearch className='navbar-searchbar__icon' />
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
