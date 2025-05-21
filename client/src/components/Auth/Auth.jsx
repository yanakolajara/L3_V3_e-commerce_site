import React from 'react';
import Modal from '../Modal/Modal';
import { useModal } from '../../providers/modalProvider';

export default function Auth() {
  const { isOpen, closeModal } = useModal();
  const [isLogin, setIsLogin] = React.useState(true);
  const changeAuthType = (e) => {
    e.preventDefault();
    setIsLogin(e.target.textContent === 'Log In');
  };
  return (
    <>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <section>
          <button className='sign-up' onClick={changeAuthType}>
            Sign Up
          </button>
          <button className='log-in' onClick={changeAuthType}>
            Log In
          </button>
        </section>
        <section>
          <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
          {isLogin ? (
            <form>
              <label htmlFor='email'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                />
              </label>
              <label htmlFor='password'>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                />
                <input type='checkbox' name='showPassword' id='showPassword' />
              </label>
              <input type='submit' value='Log In' />
              <div className='checkbox'>
                <input type='checkbox' name='remember' id='remember' />
                <p>Stay signed in</p>
              </div>
            </form>
          ) : (
            <form>
              <label htmlFor='firstName'>
                <input
                  type='text'
                  name='firstName'
                  id='firstName'
                  placeholder='First Name'
                />
              </label>
              <label htmlFor='lastName'>
                <input
                  type='text'
                  name='lastName'
                  id='lastName'
                  placeholder='Last Name'
                />
              </label>
              <label htmlFor='email'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                />
              </label>
              <label htmlFor='emailConfirmation'>
                <input
                  type='email'
                  name='emailConfirmation'
                  id='emailConfirmation'
                  placeholder='Email Confirmation'
                />
              </label>
              <label htmlFor='password'>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                />
                <input type='checkbox' name='showPassword' id='showPassword' />
              </label>
              <p>
                (at least 12 characters, with at least one uppercase letter, one
                lowercase letter, one number, and one special character)
              </p>
              <button type='submit'>Sign Up</button>
              <p>
                This site is protected by reCAPTCHA Enterprise and the Google
                Privacy Policy and Terms of Service apply.
              </p>
              <div className='check-box'>
                <input type='checkbox' name='newsletter' id='newsletter' />
                <p>
                  Yes, send me exclusive offers, promotions, news, reviews, and
                  personalized tips for buying and selling on Reverb.
                </p>
              </div>
              <div>
                <input type='checkbox' name='terms' id='terms' />
                <p>
                  By clicking Sign Up, I expressly agree to accept Reverb’s
                  Terms of Use and Privacy Policy <strong>REQUIRED</strong>.
                </p>
              </div>
            </form>
          )}
          {isLogin && (
            <p>
              Forgot your password?<a href='#'> Reset it</a>
            </p>
          )}
          <div className='or-divider'>
            <hr />
            <p>or</p>
            <hr />
          </div>
          <button>{isLogin ? 'Sign Up' : 'Log In'} with Google</button>
          <button>{isLogin ? 'Sign Up' : 'Log In'} with Apple</button>
          <button>{isLogin ? 'Sign Up' : 'Log In'} with Facebook</button>
        </section>
      </Modal>
    </>
  );
}
