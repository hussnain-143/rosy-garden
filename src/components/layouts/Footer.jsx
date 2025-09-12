import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Button from '../ui/Button';

const Footer = () => {
  return (
    <>
      <div className='max-w-[1200px] container mx-auto font-didot mt-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-5 md:gap-10'>
          {/* Logo + Description + Social */}
          <div>
            {/* title */}
            <div>
              <h2 className='font-bold text-2xl text-red-custom'>Rosy</h2>
              <h2 className='font-bold text-2xl text-green-custom'>Garden</h2>
            </div>
            {/* text */}
            <div>
              <p className='text-gray-500'>
                Visitors can wander through winding pathways and secret corners,
                discovering a kaleidoscope of colors, fragrances.
              </p>
            </div>
            {/* social */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="p-2 border hover:bg-red-custom hover:border-red-custom hover:text-white transition">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="p-2 border hover:border-red-custom hover:bg-red-custom hover:text-white transition">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="p-2 border hover:border-red-custom hover:bg-red-custom hover:text-white transition">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="p-2 border hover:border-red-custom hover:bg-red-custom hover:text-white transition">
                <FaYoutube size={16} />
              </a>
            </div>
          </div>

          {/* Main Menu */}
          <div>
            <h2 className='font-bold text-lg'>Main Menu</h2>
            <nav className="flex flex-col gap-1 mt-3 text-gray-500">
              <NavLink className='hover:text-red-custom' to="/">Home</NavLink>
              <NavLink className='hover:text-red-custom' to="/about">About</NavLink>
              <NavLink className='hover:text-red-custom' to="/shop">Shop</NavLink>
              <NavLink className='hover:text-red-custom' to="/contact">Contact</NavLink>
            </nav>
          </div>

          {/* Policy */}
          <div>
            <h2 className='font-bold text-lg'>Our Policy</h2>
            <div className="flex flex-col gap-1 mt-3 text-gray-500">
              <p className='hover:text-green-custom'>Customer Satisfaction</p>
              <p className='hover:text-green-custom'>Freshness Guaranteed</p>
              <p className='hover:text-green-custom'>Secure Shopping</p>
              <p className='hover:text-green-custom'>Eco-Friendly Practices</p>
              <p className='hover:text-green-custom'>Transparent Communication</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className='font-bold text-lg'>Stay Blooming with Rosy Garden!</h2>
            <p className='text-gray-500'>
              Be the first to discover our latest collections, exclusive offers,
              and garden-inspired tips straight to your inbox.
            </p>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="mt-2 w-full h-10 border border-green-custom rounded-md px-3 text-red-custom 
                            focus:outline-none focus:ring-2 focus:ring-green-custom focus:border-green-custom 
                            transition bg-white"
                />

            <div className='mt-3'>
                <Button message="Subscribe" style="px-4 py-2 w-full text-lg font-bold" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='w-full border-2 border-gray-500/50 my-5'></div>

        {/* Bottom bar */}
        <div className='flex flex-col md:flex-row justify-between gap-3'>
          <div>
            <p className='text-gray-500'>
              Copyright © 2025 Petal Paradise. All rights reserved.
            </p>
          </div>
          <div>
            <p className='text-gray-500'>
              Terms & Conditions . Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer