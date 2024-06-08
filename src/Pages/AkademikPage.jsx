// src/pages/UserDashboardPage.js
import React from 'react';
import UserDashboardPage from '../components/Layouts/UserDashboardPage';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import HomeLink from '../components/Fragments/Dashboard/HomeLink';
import Perkuliahan from '../components/Layouts/Perkuliahan';

const user = {
  nim: '03749103',
  semester: 4,
  nipPA: '34987231',
  nama: 'Denni Setiawan',
  prodi: 'Teknik Informatika',
  namaDosenPA: 'Dr. Budi',
};

const matkuls = [
  {
    kodeMK: 'TI201',
    mataKuliah: 'Pemrograman Web',
    sks: 3,
    hari: 'Senin',
    jam: '08:00 - 10:30',
    dosen: 'Dr. Rina',
    ruangan: 'Lab Komputer 1',
  },
  {
    kodeMK: 'TI202',
    mataKuliah: 'Basis Data',
    sks: 3,
    hari: 'Rabu',
    jam: '10:30 - 13:00',
    dosen: 'Dr. Budi',
    ruangan: 'Lab Komputer 2',
  },
];

const AkademikPage = () => {
    return (
    <div className='bg-slate-100'>
        <Navbar />
        <div className='w-[1220px] mx-auto bg-slate-100'>
            <HomeLink title="Akademik"/>
            <UserDashboardPage user={user} matkuls={matkuls} />
        </div>
        <Footer />
    </div>
    )
};

export default AkademikPage;
