import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import LoginPage from './Pages/LoginPage.jsx'
import DashboardPage from './Pages/DashboardPage.jsx'
import BiodataPage from './Pages/BiodataPage.jsx'
import PengaturanPage from './Pages/PengaturanPage.jsx'
import JadwalKuliahPage from './Pages/JadwalKuliahPage.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'
import AkademikPage from './Pages/AkademikPage.jsx'
import UseptPage from './Pages/UseptPage.jsx'

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <LoginPage />
  },
  {
    path: "/",
    element: <DashboardPage />
  },
  {
    path: "/Biodata",
    element: <BiodataPage />
  },
  {
    path: "/Pengaturan",
    element: <PengaturanPage />
  },
  {
    path: "/JadwalKuliah",
    element: <JadwalKuliahPage />
  },
  {
    path: "*",
    element: <NotFoundPage />
  },
  {
    path:"/Akademik",
    element: <AkademikPage />
  },
  {

    path: "/Usept",
    element: <UseptPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
