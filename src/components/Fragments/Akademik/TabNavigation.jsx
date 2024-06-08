import React from 'react';

const TabNavigation = ({ activeTab, onTabClick }) => (
    <div className="w-full h-max flex flex-col bg-white font-semibold">
    <div className="w-full p-4">
      <h1>Perkuliahan</h1>
    </div>
    {/* Dropdown menu */}
    <div className="flex flex-row w-full max-h-max">
      {/* Shortcut links */}
      <div className="flex flex-row w-full border">
        <a
          href="#"
          className={`p-3 tab duration-300 w-1/3 text-center bg-birusemi text-white border ${activeTab === 'KRS' ? 'tabs-aktif' : ''}`}
          onClick={() => setActiveTab('KRS')}
        >
          Kartu Rencana Studi
        </a>
        <a
          href="#"
          className={`border-l p-3 tab duration-300 w-1/3 text-center border ${activeTab === 'KHS' ? 'tabs-aktif' : ''}`}
          onClick={() => setActiveTab('KHS')}
        >
          Kartu Hasil Studi
        </a>
        <a
          href="#"
          className={`border-l p-3 tab duration-300 w-1/3 text-center border ${activeTab === 'Transkrip' ? 'tabs-aktif' : ''}`}
          onClick={() => setActiveTab('Transkrip')}
        >
          Transkrip Nilai
        </a>
      </div>
    </div>
  </div>
);

export default TabNavigation;
