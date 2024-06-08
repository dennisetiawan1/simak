import React from 'react'
import Navbar from '../components/Layouts/Navbar'
import DashboardProfile from '../components/Layouts/DashboardProfile'
import CardTable from '../components/Layouts/CardTable'
import Footer from '../components/Layouts/Footer'

const DashboardPage = () => {
  return (
    <div className='bg-slate-100'>
      <Navbar />
      <div className='bg-slate-100 w-[1220px] mx-auto'>
        <DashboardProfile />
        <CardTable />
      </div>
      <Footer />
    </div>
  )
}

export default DashboardPage
