# MyShop

**Simple e-commerce application built with Next.js 15 (App Router) and NextAuth.js for authentication.**

Users can browse products publicly, view product details, and authenticated users can access a protected dashboard to add new products.

---

## Project Overview

This project demonstrates a basic Next.js application with authentication and product management features:

- **Landing Page (`/`)**: Publicly accessible page with Navbar, Hero section, Product Highlights, and Footer.
- **Login Page (`/login`)**: Authentication using NextAuth.js (Credentials or Social login).
- **Products Page (`/products`)**: Publicly accessible list of products.
- **Product Details Page (`/products/[id]`)**: Shows detailed information of a single product.
- **Protected Page (`/dashboard/add-product`)**: Only accessible to authenticated users to add new products.

---

## Features

### Core Features

1. **Landing Page**
   - Navbar with navigation to Home, Products, and Login
   - Hero section with call-to-action
   - Product Highlights section displaying sample products
   - Footer with quick links and contact info

2. **Login**
   - NextAuth.js integration
   - Credential login (email/password)
   - Social login (e.g., Google) optional
   - Redirects to `/products` after successful login

3. **Product List**
   - Fetch products from mock backend or local file
   - Each product has: name, description, price, and a details button

4. **Product Details**
   - Publicly accessible
   - Shows detailed information of a selected product

5. **Protected Page**
   - Add new products (authenticated users only)
   - Redirect unauthenticated users to `/login`
   - Optional: Show toast notifications on success

### Optional Enhancements

- Loading spinner on form submission
- Theme toggle (light/dark mode)
- Toast notifications

---

## Technologies Used

- **Next.js 15** (App Router)
- **NextAuth.js** for authentication
- **React** for UI components
- **Tailwind CSS** for styling
- Optional backend:
  - Route Handlers (`/api`) in Next.js
  - Or Express.js server

---

## Setup & Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/myshop.git
cd myshop
Install dependencies


npm install
# or
yarn install
Environment Variables
Create a .env.local file with the following:


NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key
# Add provider credentials (Google, GitHub, etc.) if using social login
Run the development server


npm run dev
# or
yarn dev
Open http://localhost:3000 in your browser.

Routes Summary
Route	Access	Description
/	Public	Landing page with products highlights
/login	Public	Login page (NextAuth.js)
/products	Public	Product list page
/products/[id]	Public	Single product details page
/dashboard/add-product	Protected	Add new product page (authenticated only)

Deployment (Vercel)
Connect GitHub Repository
Go to Vercel → New Project → Import GitHub repo.

Set Environment Variables
In Vercel dashboard → Settings → Environment Variables, add .env.local variables.

Deploy
Click Deploy. After deployment, your site will be live at https://your-project.vercel.app.

Verify Authentication

Go to /login and sign in.

Access /dashboard/add-product after login.

