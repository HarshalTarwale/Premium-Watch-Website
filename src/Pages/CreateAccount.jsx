import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSignUp } from '@clerk/clerk-react'
import Navbar from '../Components/Navbar.jsx'

const CreateAccount = () => {
  const navigate = useNavigate()
  const { isLoaded, signUp, setActive } = useSignUp()
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    terms: false
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [infoMessage, setInfoMessage] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [needsVerification, setNeedsVerification] = useState(false)

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
    setInfoMessage('')

    if (!isLoaded) {
      return
    }

    if (!formState.terms) {
      setErrorMessage('Please accept the terms and condition.')
      return
    }

    try {
      const result = await signUp.create({
        emailAddress: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        unsafeMetadata: {
          phone: formState.phone
        }
      })

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId })
        navigate('/account')
        return
      }

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
      setNeedsVerification(true)
      setInfoMessage('We sent a verification code to your email.')
    } catch (error) {
      const clerkMessage = error?.errors?.[0]?.message
      setErrorMessage(clerkMessage || 'Unable to create your account. Please try again.')
    }
  }

  const handleVerify = async (event) => {
    event.preventDefault()
    setErrorMessage('')

    if (!isLoaded) {
      return
    }

    try {
      const result = await signUp.attemptEmailAddressVerification({
        code: verificationCode
      })

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId })
        navigate('/account')
      } else {
        setErrorMessage('Verification incomplete. Please try again.')
      }
    } catch (error) {
      const clerkMessage = error?.errors?.[0]?.message
      setErrorMessage(clerkMessage || 'Unable to verify your email. Please try again.')
    }
  }

  return (
    <div className='auth-page min-h-screen text-white'>
      <Navbar />
      <div className='auth-shell mt-[-2vh]'>
        <div>
          <h1 className='auth-title zen'>Create account</h1>
          <div className='create-auth-card'>
          <form className='create-auth-form' onSubmit={handleSubmit}>
            <div className='create-auth-row'>
              <input
                className='create-auth-input zen'
                type='text'
                name='firstName'
                placeholder='First name'
                value={formState.firstName}
                onChange={handleChange}
              />
              <input
                className='create-auth-input zen'
                type='text'
                name='lastName'
                placeholder='Last name'
                value={formState.lastName}
                onChange={handleChange}
              />
            </div>
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
              type='tel'
              name='phone'
              placeholder='Phone number'
              value={formState.phone}
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
            {infoMessage ? <p className='create-auth-message'>{infoMessage}</p> : null}
            <button className='create-auth-button zen' type='submit'>
              Create account
            </button>
          </form>
          {needsVerification ? (
            <form className='create-auth-form create-auth-verify' onSubmit={handleVerify}>
              <input
                className='create-auth-input zen'
                type='text'
                name='verificationCode'
                placeholder='Verification code'
                value={verificationCode}
                onChange={(event) => setVerificationCode(event.target.value)}
              />
              <button className='create-auth-button zen' type='submit'>
                Verify email
              </button>
            </form>
          ) : null}
          <p className='create-auth-footnote zen'>
            Already have an account ?{' '}
            <Link className='auth-link' to='/login'>
              Login
            </Link>
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount
