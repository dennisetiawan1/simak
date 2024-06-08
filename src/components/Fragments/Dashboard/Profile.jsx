import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import userIcon from '../../../assets/Dashboard/user-link.svg';
import settingsIcon from '../../../assets/Dashboard/settings.svg';
import userProfile from "../../../assets/Dashboard/user-profile.jpeg";

const Profile = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(getActiveTab(location.pathname));

  useEffect(() => {
    setActiveTab(getActiveTab(location.pathname));
  }, [location.pathname]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Function to determine active tab based on the pathname
  function getActiveTab(pathname) {
    if (pathname === '/') return 'dashboard';
    if (pathname === '/biodata') return 'biodata';
    if (pathname === '/pengaturan') return 'pengaturan';
    return 'dashboard'; // Default to 'dashboard' if no match found
  }

  return (
    <div className="db-container">
      <div className="w-full bg-birusemi h-3/5 rounded-md rounded-b-none flex flex-row items-center">
        <div className="ml-40 mt-8">
          <h1 className="uppercase text-white">Denni Setiawan</h1>
        </div>
      </div>
      <div className="w-full bg-white h-2/5 rounded-b-md flex flex-row items-center justify-between">
        <div className="ml-40">
          <h1 className="text-sm">NIM: 03749103 | Teknik Informatika S1</h1>
        </div>
        <div className="flex flex-row">
          <NavLink
            to="/" 
            className={`link-style items-center ${activeTab === 'dashboard' ? 'bg-birusemi text-white' : 'text-black'}`}
            onClick={() => handleTabChange('dashboard')}
          >
            <svg
              width="14px"
              height="14px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${activeTab === 'dashboard' ? 'stroke-white' : 'stroke-black'}`}
            >
              <path
                d="M21 21H6.2C5.07989 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V3M7 15L12 9L16 13L21 7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="ml-2 text-sm">Dashboard</h1>
          </NavLink>
          <NavLink 
            to="/biodata" 
            className={`link-style ${activeTab === 'biodata' ? 'bg-birusemi text-white' : 'text-black'}`}
            onClick={() => handleTabChange('biodata')}
          >
            <img src={userIcon} alt="Biodata" className={`mr-2 ${activeTab === 'biodata' ? 'stroke-white' : 'stroke-black'}`} />
            <h1 className="text-sm">Biodata</h1>
          </NavLink>
          <NavLink 
            to="/pengaturan" 
            className={`link-style ${activeTab === 'pengaturan' ? 'bg-birusemi text-white' : 'text-black'}`}
            onClick={() => handleTabChange('pengaturan')}
          >
            <img src={settingsIcon} alt="Pengaturan" className={`mr-2 ${activeTab === 'pengaturan' ? 'stroke-white' : 'stroke-black'}`} />
            <h1 className="text-sm">Pengaturan</h1>
          </NavLink>
        </div>
      </div>
      <div className="border-4 border-white w-[100px] h-[100px] mx-2 rounded-full overflow-hidden absolute top-8 left-4">
        <img src={userProfile} alt="Profile" className="w-[120px] h-[110px]" />
      </div>
    </div>
  );
};

export default Profile;
