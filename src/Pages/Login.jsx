import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSignIn } from '@clerk/clerk-react'
import Navbar from '../Components/Navbar.jsx'

const Login = () => {
  const navigate = useNavigate()
  const { isLoaded, signIn, setActive } = useSignIn()
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    terms: false
  })
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormState((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrorMessage('')

    if (!isLoaded) {
      return
    }

    if (!formState.terms) {
      setErrorMessage('Please accept the terms and condition.')
      return
    }

    try {
      const result = await signIn.create({
        identifier: formState.email,
        password: formState.password
      })

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId })
        navigate('/account')
      } else {
        setErrorMessage('Additional verification is required to sign in.')
      }
    } catch (error) {
      const clerkMessage = error?.errors?.[0]?.message
      setErrorMessage(clerkMessage || 'Unable to log you in. Please try again.')
    }
  }

  return (
    <div className='auth-page min-h-screen text-white'>
      <Navbar />
      <div className='auth-shell mt-[-2vh]'>
        <div>
          <h1 className='auth-title zen'>Login</h1>
          <div className='create-auth-card login-auth-card'>
            <form className='create-auth-form' onSubmit={handleSubmit}>
              <input
                className='create-auth-input zen'
                type='email'
                name='email'
                placeholder='Email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='create-auth-input zen'
                type='password'
                name='password'
                placeholder='Enter your password'
                value={formState.password}
                onChange={handleChange}
              />
              <label className='create-auth-check zen'>
                <input
                  type='checkbox'
                  name='terms'
                  checked={formState.terms}
                  onChange={handleChange}
                />
                I agree to terms and condition
              </label>
              {errorMessage ? <p className='create-auth-message create-auth-message-error'>{errorMessage}</p> : null}
              <button className='create-auth-button zen' type='submit'>
                Login
              </button>
            </form>
            <p className='create-auth-footnote zen'>
              Dont have account ?{' '}
              <Link className='auth-link' to='/create-account'>
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
