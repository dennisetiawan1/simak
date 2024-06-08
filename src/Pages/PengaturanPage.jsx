import React from 'react'
import Pengaturan from '../components/Layouts/Pengaturan'
import Navbar from '../components/Layouts/Navbar'
import Footer from '../components/Layouts/Footer'

const PengaturanPage = () => {
  return (
    <div className='bg-slate-100'>
        <Navbar />
            <Pengaturan />
        <Footer />
    </div>
  )
}

export default PengaturanPage
