// src/components/templates/UserDashboardTemplate.js
import React, { useState } from 'react';
import TabNavigation from '../Fragments/Akademik/TabNavigation';
import UserDashboard from '../Fragments/Akademik/UserDashboard';
import Ambil from '../Fragments/Akademik/Ambil';

const UserDashboardPage = ({ user, matkuls }) => {
  const [activeTab, setActiveTab] = useState('IRS');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const totalSks = matkuls.reduce((total, matkul) => total + matkul.sks, 0);

  return (
    <div className="w-full">
      <TabNavigation activeTab={activeTab} onTabClick={handleTabClick} />
        {activeTab === 'IRS' && (
          <UserDashboard user={user} matkuls={matkuls} totalSks={totalSks} />
        )}
        <Ambil />
    </div>
  );
};

export default UserDashboardPage;
