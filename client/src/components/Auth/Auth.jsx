import React from 'react';
import Modal from '../Modal/Modal';
import { useModal } from '../../providers/modalProvider';
import { FaFacebook } from 'react-icons/fa';
import { SiApple } from 'react-icons/si';
import GoogleIcon from '../../assets/google-icon.png';
import './Auth.css';

export default function Auth({ isLogin, setIsLogin }) {
  const { isOpen, closeModal } = useModal();

  const changeAuthType = (e) => {
    e.preventDefault();
    setIsLogin(e.target.textContent === 'Log In');
  };
  return (
    <>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className='auth-modal'>
          <section className='auth-type-selector'>
            <button
              className={`sign-up ${!isLogin ? 'active' : 'not-active'}`}
              onClick={changeAuthType}
            >
              Sign Up
            </button>
            <button
              className={`log-in ${isLogin ? 'active' : 'not-active'}`}
              onClick={changeAuthType}
            >
              Log In
            </button>
          </section>
          <section className='auth-body'>
            <h2 className='auth-title'>
              {isLogin ? 'Log In to Reverb' : 'Create a Reverb Account'}
            </h2>
            {isLogin ? (
              <form className='auth-form'>
                <label htmlFor='email'>
                  Email
                  <input type='email' name='email' id='email' />
                </label>
                <label htmlFor='password'>
                  Password
                  <input type='password' name='password' id='password' />
                </label>
                <input type='submit' value='Log In' />
                <div className='checkbox'>
                  <input type='checkbox' name='remember' id='remember' />
                  <p>Stay signed in</p>
                </div>
              </form>
            ) : (
              <form className='auth-form'>
                <div className='form-names'>
                  <label htmlFor='firstName' className='first-name'>
                    First Name
                    <input type='text' name='firstName' id='firstName' />
                  </label>
                  <label htmlFor='lastName' className='last-name'>
                    Last Name
                    <input type='text' name='lastName' id='lastName' />
                  </label>
                </div>
                <label htmlFor='email'>
                  Email
                  <input type='email' name='email' id='email' />
                </label>
                <label htmlFor='emailConfirmation'>
                  Email Confirmation
                  <input
                    type='email'
                    name='emailConfirmation'
                    id='emailConfirmation'
                  />
                </label>
                <label htmlFor='password'>
                  Password
                  <input type='password' name='password' id='password' />
                  <p>
                    (at least 12 characters, with at least one uppercase letter,
                    one lowercase letter, one number, and one special character)
                  </p>
                </label>
                <input type='submit' value='Sign Up' />
                <p>
                  This site is protected by reCAPTCHA Enterprise and the Google{' '}
                  <a>Privacy Policy</a> and <a>Terms of Service</a> apply.
                </p>
                <div className='checkbox-container'>
                  <input type='checkbox' name='newsletter' id='newsletter' />
                  <p>
                    Yes, send me exclusive offers, promotions, news, reviews,
                    and personalized tips for buying and selling on Reverb.
                  </p>
                </div>
                <div className='checkbox-container'>
                  <input type='checkbox' name='terms' id='terms' />
                  <p>
                    By clicking Sign Up, I expressly agree to accept Reverb’s
                    <a>Terms of Use</a> and <a>Privacy Policy</a>{' '}
                    <strong>REQUIRED</strong>.
                  </p>
                </div>
              </form>
            )}
            {isLogin && (
              <p>
                Forgot your password?<a href='#'> Reset it</a>
              </p>
            )}
            <p className='divider'>
              <span>OR</span>
            </p>
            <button className='auth__social-login '>
              <img
                className='auth__social-login-icon'
                style={{ width: '20px', height: '20px' }}
                src={GoogleIcon}
                alt='Google Logo'
              />
              {isLogin ? 'Log In' : 'Sign Up'} with Google
            </button>
            <button className='auth__social-login '>
              <SiApple className='auth__social-login-icon' />
              {isLogin ? 'Log In' : 'Sign Up'} with Apple
            </button>
            <button className='auth__social-login auth__social-login--facebook'>
              <FaFacebook className='auth__social-login-icon' />
              {isLogin ? 'Log In' : 'Sign Up'} with Facebook
            </button>
          </section>
        </div>
      </Modal>
    </>
  );
}
