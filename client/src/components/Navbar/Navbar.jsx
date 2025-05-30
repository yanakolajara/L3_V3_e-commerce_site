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
      <section className='navbar-main'>
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
            backgroundColor='white'
            weight='bold'
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
            backgroundColor='white'
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
            backgroundColor='white'
            onClick={(e) => {
              openModal(e);
              setIsLogin(true);
            }}
          >
            Log In
          </Cta>
          <Auth isLogin={isLogin} setIsLogin={setIsLogin} />
        </div>
      </section>
      <section className='navbar-menu'>
        <div className='navbar-menu__categories'>
          <a href='#' className='navbar-menu__category'>
            <span>The Reverb Outlet</span>
          </a>
          <a href='#' className='navbar-menu__category'>
            Guitars
          </a>
          <a href='#' className='navbar-menu__category'>
            Pedals and Amplifiers
          </a>
          <a href='#' className='navbar-menu__category'>
            Keyboards and Synths
          </a>
          <a href='#' className='navbar-menu__category'>
            Recording Gear
          </a>
          <a href='#' className='navbar-menu__category'>
            Drums
          </a>
          <a href='#' className='navbar-menu__category'>
            DJ and Audio Gear
          </a>
          <a href='#' className='navbar-menu__category'>
            More Categories
          </a>
        </div>
        <div className='navbar-menu__subcategories'>
          <a href=''>Brands</a>
          <a href=''>
            News{' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='12'
              height='12'
              viewBox='0 0 28 28'
              aria-hidden='true'
            >
              <path d='m23.678 11.428-8.75 8.75a1.31 1.31 0 0 1-1.859 0l-8.75-8.75A1.314 1.314 0 1 1 6.18 9.57L14 17.391l7.821-7.823a1.314 1.314 0 1 1 1.86 1.86h-.003Z'></path>
            </svg>
          </a>
          <a href=''>
            Explore{' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='12'
              height='12'
              viewBox='0 0 28 28'
              aria-hidden='true'
            >
              <path d='m23.678 11.428-8.75 8.75a1.31 1.31 0 0 1-1.859 0l-8.75-8.75A1.314 1.314 0 1 1 6.18 9.57L14 17.391l7.821-7.823a1.314 1.314 0 1 1 1.86 1.86h-.003Z'></path>
            </svg>
          </a>
          <a href=''>Shops</a>
          <a href=''>Reverb Gives</a>
          <a href=''>Help Center</a>
        </div>
      </section>
    </nav>
  );
}
