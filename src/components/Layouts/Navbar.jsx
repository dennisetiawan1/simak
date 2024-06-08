import React, { useState, useEffect } from 'react';
import logo from '../../assets/UNSRI-noBG.png';
import userProfile from "../../assets/Dashboard/user-profile.jpeg"

const Navbar = () => {
  return (
    <div className="flex flex-row h-16 bg-birutua">
      {/* Navbar */}
      <nav className="w-[1220px] flex flex-row items-center mx-auto justify-between">
        <a href="#" className="flex flex-row items-center">
          <img src={logo} alt="Logo UNSRI" className="w-12 mr-4" />
          <h1 className="text-white font-extrabold text-2xl">SIMAK UNSRI</h1>
        </a>
          <div className="items-center flex flex-row">
            <div className="w-[30px] mx-2 rounded-lg overflow-hidden">
              <img src={userProfile} alt="" className="w-[30px]" />
            </div>
            <h1 className="text-white uppercase">Denni Setiawan</h1>
          </div>
      </nav>
    </div>
  );
};

export default Navbar;
