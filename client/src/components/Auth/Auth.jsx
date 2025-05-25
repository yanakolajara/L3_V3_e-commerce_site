import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import { useModal } from '../../providers/modalProvider';
import { FORM_FIELDS } from './formFields';
import { FormInput } from './FormInput';
import { FaFacebook } from 'react-icons/fa';
import { SiApple } from 'react-icons/si';
import GoogleIcon from '../../assets/google-icon.png';
import './Auth.css';
import { Form } from './Form';
import { useAuthContext } from '../../providers/authProvider';

export default function Auth({ isLogin, setIsLogin }) {
  const { isOpen, closeModal } = useModal();
  const { register, login } = useAuthContext();
  const [data, setData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    confirmEmail: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    if (isLogin) {
      login(data);
    } else {
      register(data);
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const changeAuthType = (e) => {
    e.preventDefault();
    setIsLogin(e.target.textContent === 'Log In');
  };

  useEffect(() => {}, [data]);
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
            <form className='auth-form' onSubmit={handleFormSubmit}>
              {isLogin
                ? FORM_FIELDS.LOGIN.map((field) => (
                    <FormInput
                      key={field.name}
                      field={field}
                      onChange={handleInputChange}
                      value={data[field.name]}
                    />
                  ))
                : FORM_FIELDS.SIGNUP.map((field) => (
                    <FormInput
                      key={field.name}
                      field={field}
                      onChange={handleInputChange}
                      value={data[field.name]}
                    />
                  ))}
              <Form.Submit className='auth-form__submit lg'>
                {isLogin ? 'Log In' : 'Sign Up'}
              </Form.Submit>
              <div className='checkbox-container'>
                <input type='checkbox' name='staySignedIn' />
                <label htmlFor='staySignedIn'>Stay signed in</label>
              </div>
            </form>
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
