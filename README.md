# Premium Watch Website

A modern Titan-inspired watch e-commerce website built with React. The project includes a premium homepage, product listing pages, watch details, wishlist, cart, checkout flow, and authentication pages with a clean responsive UI and smooth scrolling animations.

## Screenshots

<p>
  <img src="public/SS/Titan%20home%20ss.png" alt="Titan home page" width="49%" />
  <img src="public/SS/titan%20all%20product%20ss.png" alt="Titan all products page" width="49%" />
</p>

<p>
  <img src="public/SS/Titan%20cart%20ss.png" alt="Titan cart page" width="49%" />
  <img src="public/SS/Titan%20wushlist%20ss.png" alt="Titan wishlist page" width="49%" />
</p>

## Tech Stack

- **React.js** - Frontend library for building reusable UI components
- **Vite** - Fast development server and build tool
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Router DOM** - Client-side routing and page navigation
- **Clerk Authentication** - Login, signup, account, and email verification support
- **GSAP** - Smooth animations and scroll-based effects
- **Lenis** - Smooth scrolling experience
- **Swiper.js** - Sliders and carousel-style sections
- **React Icons** - Icon library for UI elements
- **QRCode React** - QR code support
- **GitHub Pages** - Deployment support

## Pages and Features

### Home Page

- Premium landing page for the watch store
- Hero-style visual sections and featured content
- Best seller and new arrival sections
- Smooth scrolling and animation effects
- Navigation to product categories, cart, wishlist, login, and account pages

### All Products Page

- Displays all available watches in one place
- Product cards with images, prices, and quick actions
- Navigation to individual watch detail pages
- Supports browsing across different watch collections

### Category Pages

- Dedicated collection pages for Edge, Nebula, Smart, Xylys, Raga, and Fastrack
- Each page focuses on a specific watch category or brand collection
- Product cards are organized for easier shopping

### Watch Details Page

- Dynamic product detail route using `/watch/:id`
- Shows selected watch information
- Allows users to view product-specific details before adding items to cart or wishlist

### Wishlist Page

- Lets users save favorite watches
- Displays selected wishlist products
- Allows removing items from the wishlist
- Helps users keep track of products they are interested in

### Cart Page

- Shows products added to the cart
- Supports cart item management
- Provides a path toward checkout
- Designed to support a shopping flow similar to an e-commerce store

### Checkout Page

- Checkout route for completing the purchase flow
- Includes order-related UI and payment flow support
- QR code package is included for payment or order-related QR features

### Authentication Pages

- Login page for existing users
- Create account page for new users
- Clerk-powered signup and login flow
- Email verification support after account creation
- Account page for authenticated user experience

## Folder Structure

```text
Titan/
|-- public/
|   `-- SS/
|       |-- Titan home ss.png
|       |-- titan all product ss.png
|       |-- Titan cart ss.png
|       `-- Titan wushlist ss.png
|-- src/
|   |-- Components/
|   |   |-- Buttons/
|   |   |-- Edge Components/
|   |   |-- Fastract Components/
|   |   |-- Home Components/
|   |   |-- Nebula Components/
|   |   |-- Raga Components/
|   |   |-- Smart Components/
|   |   |-- Xylys Components/
|   |   |-- Footer.jsx
|   |   |-- Navbar.jsx
|   |   |-- Video.jsx
|   |   |-- WatchCard.jsx
|   |   `-- Watchcatelog.jsx
|   |-- Pages/
|   |   |-- Account.jsx
|   |   |-- AllProducts.jsx
|   |   |-- Cart.jsx
|   |   |-- Checkout.jsx
|   |   |-- CreateAccount.jsx
|   |   |-- Home.jsx
|   |   |-- Login.jsx
|   |   |-- WatchDetails.jsx
|   |   `-- Wishlist.jsx
|   |-- data/
|   |   |-- cartStore.js
|   |   |-- watchData.js
|   |   `-- wishlistStore.js
|   |-- App.jsx
|   |-- App.css
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
|-- vite.config.js
`-- README.md
```

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
