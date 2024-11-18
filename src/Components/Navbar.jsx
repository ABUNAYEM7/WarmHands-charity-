import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink 
        className={({isActive})=>`btn ${isActive? 'bg-[#007aff] text-white hover:text-[#007aff] ' : ''}` }
        to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink 
        className={({isActive})=>`btn ${isActive? 'bg-[#007aff] text-white hover:text-[#007aff] ' : ''}` }
        to={'DonateCamp'}>Donate Camp</NavLink>
      </li>
      <li>
        <NavLink 
        className={({isActive})=>`btn ${isActive? 'bg-[#007aff] text-white hover:text-[#007aff] ' : ''}` }
        to={'HowToHelp'}>How To Help</NavLink>
      </li>
      <li>
        <NavLink 
        className={({isActive})=>`btn ${isActive? 'bg-[#007aff] text-white hover:text-[#007aff] ' : ''}` }
        to={'Dashboard'}>Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div>
            <Link to={'/'}>
            <img 
            className="w-20 h-20 rounded-full animate__animated animate__pulse animate__infinite" 
            src={logo} alt="Logo" />
            </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">
        {links}
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink
         to={'LogIn'}
         className={({isActive})=>`btn ${isActive? 'bg-[#007aff] text-white hover:text-[#007aff] ' : ''}` }>LogIn</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
