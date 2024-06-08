import React from 'react'
import Navbar from '../components/Layouts/Navbar'
import HomeLink from '../components/Fragments/Dashboard/HomeLink'
import JadwalTable from '../components/Layouts/JadwalTable'
import Footer from '../components/Layouts/Footer'

const JadwalKuliahPage = () => {
  return (
    <div className='bg-slate-100'>
      <Navbar />
      <div>
        <HomeLink title="Jadwal Kuliah" />
        <JadwalTable />
      </div>
      <Footer className="w-full h-9 bg-birutua absolute bottom-0" />
    </div>
  )
}

export default JadwalKuliahPage
