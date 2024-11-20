import React, { useContext } from "react";
import { FirebaseContext } from "../FirebaseProvider/FirebaseProvider";
import { TypeAnimation } from "react-type-animation";
import profileBanner from '../assets/profileBanner.webp'
import { FaCheckCircle } from 'react-icons/fa'
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(FirebaseContext);
  return (
    <div className="min-h-screen  rounded-xl">
      <div className="">
        {/* banner-container */}
      <div className="relative">
            <img 
            className="w-full max-h-80"
            src={profileBanner} alt="photo" />
            <h3 className="absolute md:top-20 top-10 inset-0 inset-x-auto text-center md:text-3xl text-xl font-bold text-white">
          <TypeAnimation
            sequence={[
              `Welcome Dear, ${user.displayName}`,
              2000,
              `Thanks For, with us  ${user.displayName}`,
              2000,
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
          />
        </h3>
        </div> 
        {/* profile-container */}
        <div className="w-full lg:w-11/12 mx-auto flex flex-col md:flex-row items-center md:justify-between p-4 justify-center gap-5 shadow-2xl">
        {/* image and info container */}
            <div className="flex flex-col md:flex-row md:gap-5 justify-center items-center space-y-4">
              <div className="relative w-44  md:min-h-40  rounded-full">
                <img 
                className="w-full h-40  rounded-full  object-cover object-center md:absolute -top-20 inset-0 inset-x-auto"
                src={user.photoURL} alt="Photo" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-1">
                <FaCheckCircle size={25} className={`text-blue-500 ${user.emailVerified ? 'block' : 'hidden'} `}/>
                <h3 className="text-2xl font-semibold">{user.displayName}</h3>
                </div>
                <p className="text-center">{user.email}</p>
              </div>
            </div>
            {/* button-container */}
            <div>
              <Link 
              to={'/Dashboard/UpdateProfile'}
              className="btn bg-[#007aff] text-white hover:text-[#007aff]">
                Edit Profile
              </Link>
            </div>
        </div>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
