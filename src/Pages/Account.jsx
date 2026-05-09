import React, { useEffect, useMemo, useState } from 'react'
import { SignedIn, SignedOut, SignOutButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar.jsx'
import { calculateTotals, formatPrice, getCartItems } from '../data/cartStore.js'
import { getWishlistItems } from '../data/wishlistStore.js'

const Account = () => {
  const { user } = useUser()
  const [cartItems, setCartItems] = useState([])
  const [wishlistItems, setWishlistItems] = useState([])
  const fullName = user?.fullName || `${user?.firstName || ''} ${user?.lastName || ''}`.trim()
  const email = user?.primaryEmailAddress?.emailAddress || 'Not provided'
  const phone = user?.unsafeMetadata?.phone || user?.primaryPhoneNumber?.phoneNumber || '-'
  const addressLine1 = user?.unsafeMetadata?.addressLine1 || ''
  const addressLine2 = user?.unsafeMetadata?.addressLine2 || ''
  const city = user?.unsafeMetadata?.city || ''
  const state = user?.unsafeMetadata?.state || ''
  const postalCode = user?.unsafeMetadata?.postalCode || ''
  const country = user?.unsafeMetadata?.country || ''

  useEffect(() => {
    setCartItems(getCartItems())
    setWishlistItems(getWishlistItems())
  }, [])

  const totals = useMemo(() => calculateTotals(cartItems), [cartItems])
  const cartValue = formatPrice(totals.totalPrice || 0)
  const wishlistCount = wishlistItems.length
  const addressLines = [
    addressLine1,
    addressLine2,
    city && `${city}${state ? `, ${state}` : ''}`,
    postalCode,
    country
  ].filter(Boolean)
  const formattedAddressLines = addressLines.length ? addressLines : ['-']

  return (
    <div className='account-page min-h-screen w-full text-white'>
      <Navbar />
      <main className='account-container mx-auto px-6 sm:px-8 lg:px-12 pb-[14vh] pt-[10vh]'>
        <SignedOut>
          <section className='account-card account-auth-card text-center'>
            <div className='space-y-4'>
              <p className='text-lg tracking-wide'>Please log in to view your account.</p>
              <div className='flex justify-center gap-3'>
                <Link className='account-btn-primary' to='/login'>Login</Link>
                <Link className='account-btn-ghost' to='/create-account'>Create Account</Link>
              </div>
            </div>
          </section>
        </SignedOut>

        <SignedIn>
          <div className='account-layout'>
            <aside className='account-sidebar'>
              <p className='account-sidebar-title'>Overview</p>
              <ul className='account-nav'>
                <li className='account-nav-item is-active'>Overview</li>
                <li className='account-nav-item'>Personal Information</li>
                <li className='account-nav-item'>Address Book</li>
                <li className='account-nav-item'>Wishlist</li>
                <li className='account-nav-item'>Order History</li>
                <li className='account-nav-item'>Gift Card Balance</li>
                <li className='account-nav-item'>NeuPass</li>
              </ul>
              <SignOutButton>
                <button className='account-btn-ghost account-signout'>Sign Out</button>
              </SignOutButton>
            </aside>

            <section className='account-content'>
              <div className='account-header'>
                <div className='account-title-block'>
                  <p className='account-title zen'>Account Overview</p>
                  <p className='account-subtitle'>{fullName || 'Account'}</p>
                </div>
                <div className='account-avatar'>{(fullName || 'AA').slice(0, 2).toUpperCase()}</div>
              </div>

              <div className='account-panel'>
                <div className='account-panel-header'>
                  <p className='account-panel-title'>Personal Information</p>
                  <button className='account-edit-btn'>Edit</button>
                </div>
                <div className='account-info-grid'>
                  <p>Name</p>
                  <span>:</span>
                  <p>{fullName || '-'}</p>
                  <p>Date of birth</p>
                  <span>:</span>
                  <p>-</p>
                  <p>Anniversary date</p>
                  <span>:</span>
                  <p>-</p>
                  <p>Phone number</p>
                  <span>:</span>
                  <p>{phone}</p>
                  <p>Email address</p>
                  <span>:</span>
                  <p>{email}</p>
                  <p>Encircle ID</p>
                  <span>:</span>
                  <p>XXXXXXXX7044 | No Encircle Balance</p>
                  <p>NeuCoins</p>
                  <span>:</span>
                  <p>0 NeuCoins</p>
                  <p>Cart value</p>
                  <span>:</span>
                  <p>{cartValue}</p>
                  <p>Wishlist</p>
                  <span>:</span>
                  <p>{wishlistCount} items</p>
                </div>
              </div>

              <div className='account-panel'>
                <div className='account-panel-header'>
                  <p className='account-panel-title'>Default Address</p>
                  <button className='account-edit-btn'>Edit</button>
                </div>
                <div className='account-address'>
                  <p>{fullName || 'Name not provided'}</p>
                  <p>{phone !== '-' ? phone : 'Phone not provided'}</p>
                  {formattedAddressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </SignedIn>
      </main>
    </div>
  )
}

export default Account