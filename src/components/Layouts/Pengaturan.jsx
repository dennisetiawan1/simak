import React, { useState } from 'react';
import HomeLink from '../Fragments/Dashboard/HomeLink';
import Profile from '../Fragments/Dashboard/Profile';
import settingsIcon from "../../assets/Dashboard/settings.svg"
import profilePic from "../../assets/Dashboard/user-profile.jpeg"

const Pengaturan = () => {
  const [activeTab, setActiveTab] = useState('Ubah Foto Profil');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='w-[1220px] mx-auto'>
        <HomeLink />
        <Profile />
        <div className="flex flex-row w-[1220px] mx-auto justify-between mt-4">
        {/* Left Side Bar */}
        <div className="flex flex-col w-[340px] bg-white rounded-md shadow-xl h-max">
            <div className="flex flex-row items-center justify-start p-4 font-bold">
            <img src={settingsIcon} alt="Pengaturan" />
            <h1 className="text-md pl-2">Pengaturan Akun</h1>
            </div>
            <div className="flex flex-row w-full max-h-max shadow-md">
            {/* Shortcut links */}
            <div className="flex flex-col w-full">
                <a
                href="#"
                className={`border-y p-5 tab duration-300 ${activeTab === 'Ubah Foto Profil' ? 'tabs-aktif' : 'tabs'}`}
                onClick={() => handleTabClick('Ubah Foto Profil')}
                >
                Ubah Foto Profil
                </a>
                <a
                href="#"
                className={`border-y p-5 tab duration-300 ${activeTab === 'Ganti Password' ? 'tabs-aktif' : 'tabs'}`}
                onClick={() => handleTabClick('Ganti Password')}
                >
                Ganti Password
                </a>
                <a
                href="#"
                className={`border-y p-5 tab ${activeTab === 'Hapus Akun' ? 'tabs-aktif' : 'tabs'}`}
                onClick={() => handleTabClick('Hapus Akun')}
                >
                Hapus Akun
                </a>
            </div>
            </div>
        </div>

        {/* Right Side Window */}
        <div className="block w-[820px]">
            {/* Ubah Foto Profil Tab */}
            {activeTab === 'Ubah Foto Profil' && (
            <div className="w-full bg-white flex flex-col rounded-md shadow-xl h-max content">
                <div className="flex flex-row items-center justify-start pl-4 py-3 font-bold w-full">
                <h1 className="text-xl ml-3 text-birusemi">Ubah Profil</h1>
                </div>
                <div className="flex flex-col w-full pl-6 pr-6">
                <h1>Email Mahasiswa</h1>
                <input type="text" className="style-input" value="user@student.unsri.ac.id" readOnly />
                <h1>Display Name</h1>
                <input type="text" className="style-input" value="User Name" readOnly />
                <h1>Upload Foto Profil</h1>
                <form action="/uploadFoto" method="post" enctype="multipart/form-data">
                    <input type="file" className="style-input" required id="foto" name="foto" />
                    <button className="border w-24 rounded-md text-white bg-birusemi mx-auto my-4 py-2" type="submit">
                    Simpan
                    </button>
                </form>
                </div>
            </div>
            )}

            {/* Ganti Password Tab */}
            {activeTab === 'Ganti Password' && (
            <div className="w-full bg-white flex flex-col rounded-md shadow-xl h-max content">
                <div className="flex flex-row items-center justify-start pl-6 py-3 font-bold w-full">
                <svg width="32px" height="32px" viewBox="0 0 24 24" fill="#144272" xmlns="http://www.w3.org/2000/svg">
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.4453 2.75 16.5018 4.42242 17.0846 6.68694C17.1879 7.08808 17.5968 7.32957 17.9979 7.22633C18.3991 7.12308 18.6405 6.7142 18.5373 6.31306C17.788 3.4019 15.1463 1.25 12 1.25C8.27208 1.25 5.25 4.27208 5.25 8V9.30277C5.02317 9.31872 4.80938 9.33948 4.60825 9.36652C3.70814 9.48754 2.95027 9.74643 2.34835 10.3483C1.74643 10.9503 1.48754 11.7081 1.36652 12.6082C1.24996 13.4752 1.24998 14.5775 1.25 15.9451V16.0549C1.24998 17.4225 1.24996 18.5248 1.36652 19.3918C1.48754 20.2919 1.74643 21.0497 2.34835 21.6516C2.95027 22.2536 3.70814 22.5125 4.60825 22.6335C5.47522 22.75 6.57754 22.75 7.94513 22.75H16.0549C17.4225 22.75 18.5248 22.75 19.3918 22.6335C20.2919 22.5125 21.0497 22.2536 21.6517 21.6516C22.2536 21.0497 22.5125 20.2919 22.6335 19.3918C22.75 18.5248 22.75 17.4225 22.75 16.0549V15.9451C22.75 14.5775 22.75 13.4752 22.6335 12.6082C22.5125 11.7081 22.2536 10.9503 21.6517 10.3483C21.0497 9.74643 20.2919 9.48754 19.3918 9.36652C18.5248 9.24996 17.4225 9.24998 16.0549 9.25H7.94513C7.52161 9.24999 7.12353 9.24999 6.75 9.25344V8ZM3.40901 11.409C3.68577 11.1322 4.07435 10.9518 4.80812 10.8531C5.56347 10.7516 6.56459 10.75 8 10.75H16C17.4354 10.75 18.4365 10.7516 19.1919 10.8531C19.9257 10.9518 20.3142 11.1322 20.591 11.409C20.8678 11.6858 21.0482 12.0743 21.1469 12.8081C21.2484 13.5635 21.25 14.5646 21.25 16C21.25 17.4354 21.2484 18.4365 21.1469 19.1919C21.0482 19.9257 20.8678 20.3142 20.591 20.591C20.3142 20.8678 19.9257 21.0482 19.1919 21.1469C18.4365 21.2484 17.4354 21.25 16 21.25H8C6.56459 21.25 5.56347 21.2484 4.80812 21.1469C4.07435 21.0482 3.68577 20.8678 3.40901 20.591C3.13225 20.3142 2.9518 19.9257 2.85315 19.1919C2.75159 18.4365 2.75 17.4354 2.75 16C2.75 14.5646 2.75159 13.5635 2.85315 12.8081C2.9518 12.0743 3.13225 11.6858 3.40901 11.409Z"
                    />
                </svg>
                <h1 className="text-xl ml-3 text-birusemi">Ganti Password</h1>
                </div>
                <div className="flex flex-col w-full pl-6 pr-6">
                <form action="/pengaturan" method="post">
                    <div className="flex justify-between">
                    <h1>Password Sekarang</h1>
                    {/* Session errors can be handled here */}
                    </div>
                    <input
                    type="password"
                    name="password"
                    className="border w-full py-[6px] pl-2 bg-slate-100 rounded-md border-gray-200 focus:ring-1 focus:ring-birutua focus:rounded-md my-2"
                    />
                    <h1>Password Baru</h1>
                    <input
                    type="password"
                    name="passwordBaru"
                    className="border w-full py-[6px] pl-2 bg-slate-100 rounded-md border-gray-200 focus:ring-1 focus:ring-birutuafocus:rounded-md my-2"
                    />
                    <h1>Konfirmasi Password Baru</h1>
                    <input
                    type="password"
                    name="passwordKonfirmasi"
                    className="border w-full py-[6px] pl-2 bg-slate-100 rounded-md border-gray-200 focus:ring-1 focus:ring-birutua focus:rounded-md mt-2"
                    />
                    <div className="w-full flex justify-center">
                    <button
                        name="submit"
                        className="border w-24 rounded-md text-white bg-birusemi my-4 py-2"
                    >
                        Simpan
                    </button>
                    </div>
                </form>
                </div>
            </div>
            )}

            {/* Hapus Akun Tab */}
            {activeTab === 'Hapus Akun' && (
            <div className="w-full bg-white flex flex-col rounded-md shadow-xl h-max content">
                <div className="flex flex-row items-center justify-start pl-4 py-3 font-bold w-full">
                <img src="images/delete.svg" alt="Hapus Akun" className="pl-2" />
                <h1 className="text-xl ml-3 text-birusemi">Hapus Akun</h1>
                </div>
                <div className="flex flex-col w-full pl-6 pr-6">
                <h1>
                    Dengan menghapus akun Anda, semua data Anda akan dihapus secara
                    permanen dari database kami. Setelah tereksekusi, tindakan ini
                    tidak dapat dibatalkan.
                </h1>
                <h1 className="mt-6 text-gray-500 text-sm">
                    Untuk mengonfirmasi penghapusan akun, ketik "DELETE" dibawah ini
                </h1>
                <form className="flex flex-row" action="/pengaturan" method="post">
                    <input
                    type="text"
                    name="delete"
                    className="border w-7/12 py-[6px] pl-2 bg-slate-100 rounded-md border-gray-200 focus:ring-1 focus:ring-birutua focus:rounded-md my-2 uppercase"
                    />
                    <button
                    className="border w-24 rounded-md text-white bg-red-600 mx-auto my-4 py-2 ml-4"
                    >
                    Hapus
                    </button>
                </form>
                </div>
            </div>
            )}
        </div>
        </div>
    </div>
  );
};

export default Pengaturan;
