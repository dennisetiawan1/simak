import React from 'react'
import Navbar from '../components/Layouts/Navbar'
import Usept from '../components/Layouts/Usept'
import HomeLink from '../components/Fragments/Dashboard/HomeLink'
import Footer from '../components/Layouts/Footer'

const UseptPage = () => {
  return (
    <div className='bg-slate-100 h-screen'>
      <Navbar />
      <div className='w-[1220px] mx-auto bg-slate-100'>
        <HomeLink title="Usept" />
        <Usept />
      </div>
      <Footer className="w-[1260px] h-9 bg-birutua absolute bottom-0"  />
    </div>
  )
}

export default UseptPage
