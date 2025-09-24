import React, { useState , useContext } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import Button from "../ui/Button";
import { cartContext } from "../../context/CartContext";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(cartContext);

  const linkClasses = ({ isActive }) =>
    `border-b-4 border-transparent p-1 transition-colors duration-300 
     hover:border-b-green-custom
     ${isActive ? "border-b-red-custom text-black" : "text-gray-500"}`;

  return (
    <header className="container  max-w-[1200px] mx-auto py-2  font-didot flex justify-between items-center z-50 ">
      {/* Logo */}
      <div>
         <NavLink to="/" onClick={() => setIsOpen(false)}> 
          <img
            className="h-16 "
            src="/Rosy.svg"
            alt="Logo"
          />
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6">
        <NavLink className={linkClasses} to="/">Home</NavLink>
        <NavLink className={linkClasses} to="/about">About</NavLink>
        <NavLink className={linkClasses} to="/shop">Shop</NavLink>
        <NavLink className={linkClasses} to="/contact">Contact</NavLink>
      </nav>

      {/* Right Side (Cart + Button + Mobile Toggle) */}
      <div className="flex items-center gap-4">
        {/* Cart Icon */}
        <NavLink to="/cart" className="relative">
          <FiShoppingCart size={24} className="text-gray-700 hover:text-red-custom" />
          {cartItems.length > 0 && <span className="absolute -top-2 -right-2 bg-red-custom text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartItems.length}
          </span> }
          
        </NavLink>

        {/* Sign Up Button (hidden on small, visible md+) */}
        <div className="hidden md:block">
          <Button message="Sign Up" style="px-4 py-2 rounded-4xl text-md font-bold" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown (animated) */}
      <div
        className={`absolute left-0 w-full bg-gray-200 shadow-lg md:hidden z-[999]
          transform transition-all duration-500 ease-in-out
          ${isOpen ? "top-21 opacity-100" : "top-0 -translate-y-full opacity-0"}
        `}
      >
        <nav className="flex flex-col items-center gap-4 py-4">
          <NavLink className={linkClasses} to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink className={linkClasses} to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink className={linkClasses} to="/shop" onClick={() => setIsOpen(false)}>Shop</NavLink>
          <NavLink className={linkClasses} to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          <Button message="Sign Up" style="px-10 py-2 rounded-4xl text-md font-bold" />
        </nav>
      </div>
    </header>
  );
};

export default Header;