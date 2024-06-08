import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import LoginPage from './Pages/LoginPage.jsx';
import DashboardPage from './Pages/DashboardPage.jsx';
import BiodataPage from './Pages/BiodataPage.jsx';
import PengaturanPage from './Pages/PengaturanPage.jsx';
import JadwalKuliahPage from './Pages/JadwalKuliahPage.jsx';
import NotFoundPage from './Pages/NotFoundPage.jsx';
import AkademikPage from './Pages/AkademikPage.jsx';
import UseptPage from './Pages/UseptPage.jsx';

// Membuat router
const router = createBrowserRouter({
  routes: [
    { path: "/Login", element: <LoginPage /> },
    { path: "/", element: <DashboardPage /> },
    { path: "/Biodata", element: <BiodataPage /> },
    { path: "/Pengaturan", element: <PengaturanPage /> },
    { path: "/JadwalKuliah", element: <JadwalKuliahPage /> },
    { path: "/Akademik", element: <AkademikPage /> },
    { path: "/Usept", element: <UseptPage /> },
    { path: "*", element: <NotFoundPage /> }
  ]
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
