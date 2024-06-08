import React from 'react'
import Biodata from '../components/Layouts/Biodata'
import Footer from '../components/Layouts/Footer'
import Navbar from '../components/Layouts/Navbar'

const BiodataPage = () => {
  return (
    <div className='bg-slate-100'>
        <Navbar />
            <Biodata />
        <Footer />
    </div>
  )
}

export default BiodataPage
