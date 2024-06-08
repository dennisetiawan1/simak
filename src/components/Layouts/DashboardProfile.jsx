import React from 'react';
import HomeLink from '../Fragments/Dashboard/HomeLink';
import Profile from '../Fragments/Dashboard/Profile';
import StatusAkademik from '../Fragments/Dashboard/StatusAkademik';

const DashboardProfile = () => {

  return (
    <div>
      <HomeLink />
      <Profile />
      <StatusAkademik />
    </div>
  );
};

export default DashboardProfile;
