import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

const RegisterScreen = () => {

      const dispatch = useDispatch();

      const { msgError } = useSelector(state => state.ui);
      console.log(msgError);

      const [formRegister, handleInputRegister] = useForm({
            name: 'Santiago',
            email: 'santiago@gmail.com',
            password: '123456',
            password2: '123456'
      });

      const { name, email, password, password2 } = formRegister

      const handleRegister = (e) => {
            e.preventDefault();

            if (isFormValid()) {
                  dispatch(startRegisterWithEmailPasswordName(email, password, name))
            }
      }

      const isFormValid = () => {

            if (name.trim().length === 0) {
                  dispatch(setError('Name is require!'))
                  return false;
            } else if (!validator.isEmail(email)) {
                  dispatch(setError('Not an email!'))
                  return false;
            } else if (password !== password2 || password < 5) {
                  dispatch(setError('Password must be at least 6 characters!!'))
                  return false;
            }

            dispatch(removeError())

            return true;
      }

      return (
            <>
                  <h3 className='auth__title'>Register</h3>

                  <form onSubmit={handleRegister}>

                        {
                              msgError &&
                              <div className='auth__alert-error'>
                                    {msgError}
                              </div>
                        }

                        <input
                              type="text"
                              placeholder='Name'
                              name='name'
                              className='auth__input'
                              autoComplete='off'
                              value={name}
                              onChange={handleInputRegister}
                        />
                        <input
                              type="text"
                              placeholder='Email'
                              name='email'
                              className='auth__input'
                              autoComplete='off'
                              value={email}
                              onChange={handleInputRegister}
                        />
                        <input
                              type="password"
                              placeholder='Password'
                              name='password'
                              className='auth__input'
                              value={password}
                              onChange={handleInputRegister}
                        />
                        <input
                              type="password"
                              placeholder='Confirm password'
                              name='password2'
                              className='auth__input'
                              value={password2}
                              onChange={handleInputRegister}
                        />

                        <button
                              type='submit'
                              className='btn btn-primary btn-block mb-5'
                        >Register</button>

                        <Link
                              to="/auth/login"
                              className='link'
                        >
                              Already registered?
                        </Link>
                  </form>
            </>
      )
}

export default RegisterScreen