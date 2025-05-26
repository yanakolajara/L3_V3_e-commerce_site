import React, { useState } from 'react';
import { Cta } from '../Cta/Cta';
import { VscSearch } from 'react-icons/vsc';
import { FaRegHeart } from 'react-icons/fa';
import { LuShoppingCart } from 'react-icons/lu';

import './Navbar.css';
import logo from '../../assets/ReverbLogo.svg';
import { useModal } from '../../providers/modalProvider';
import Auth from '../Auth/Auth';

export function Navbar() {
  const { openModal } = useModal();
  const [isLogin, setIsLogin] = useState(true);

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
        <Cta
          border
          borderColor='black'
          borderWidth='3px'
          borderRadius='25px'
          size='md'
        >
          Sell Your Gear
        </Cta>
        <button
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
          }}
        >
          <FaRegHeart
            style={{ color: 'black', fontSize: '1.5rem' }}
          ></FaRegHeart>
          Favorites
        </button>

        <button
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
          }}
        >
          <LuShoppingCart
            style={{ color: 'black', fontSize: '1.5rem' }}
          ></LuShoppingCart>
          Cart
        </button>

        <Cta
          className='navbar-options__sign-up'
          size='sm'
          onClick={(e) => {
            openModal(e);
            setIsLogin(false);
          }}
        >
          Sign Up
        </Cta>
        <Cta
          className='navbar-options__log-in'
          size='sm'
          onClick={(e) => {
            openModal(e);
            setIsLogin(true);
          }}
        >
          Log In
        </Cta>
        <Auth isLogin={isLogin} setIsLogin={setIsLogin} />
      </div>
    </nav>
  );
}
