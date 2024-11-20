import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FirebaseContext } from "../FirebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";
import { IoPersonCircleSharp } from "react-icons/io5";

const Navbar = () => {
  const { user, logOutUser } = useContext(FirebaseContext);

  const logOutHandler = () => {
    logOutUser().then(() => {
      Swal.fire({
        title: "You Logged Out",
        text: "Thanks For Being With Us",
        icon: "success",
        confirmButtonText: "close",
      });
    });
  };

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `btn ${
              isActive ? "bg-[#007aff] text-white hover:text-[#007aff] " : ""
            }`
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `btn ${
              isActive ? "bg-[#007aff] text-white hover:text-[#007aff] " : ""
            }`
          }
          to={"DonateCamp"}
        >
          Donate Camp
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `btn ${
              isActive ? "bg-[#007aff] text-white hover:text-[#007aff] " : ""
            }`
          }
          to={"HowToHelp"}
        >
          How To Help
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `btn ${
              isActive ? "bg-[#007aff] text-white hover:text-[#007aff] " : ""
            }`
          }
          to={"Dashboard"}
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed top-0 left-0  bg-blue-300/50 backdrop-blur-md z-10">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow space-y-2"
          >
            {links}
          </ul>
        </div>
        <div>
          <Link to={"/"}>
            <img
              className="w-20 h-20 rounded-full animate__animated animate__pulse animate__infinite"
              src={logo}
              alt="Logo"
            />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <details className="dropdown  dropdown-end">
             <summary className="btn m-2 rounded-full px-2">
              {user.photoURL? (
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <IoPersonCircleSharp size={32} />
              )}
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[10] w-52 p-2 shadow">
              <li>
                <button
                  onClick={logOutHandler}
                  className="btn bg-[#007aff] text-white hover:text-[#007aff]"
                >
                  Log Out
                </button>
              </li>
            </ul>
          </details>
        ) : (
          <NavLink
            to={"LogIn"}
            className={({ isActive }) =>
              `btn ${
                isActive ? "bg-[#007aff] text-white hover:text-[#007aff] " : ""
              }`
            }
          >
            LogIn
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
