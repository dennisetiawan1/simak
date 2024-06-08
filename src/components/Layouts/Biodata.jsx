import React from 'react';
import userLink from "../../assets/Dashboard/user-link.svg"
import profilePic from "../../assets/Dashboard/user-profile.jpeg"
import alertIcon from "../../assets/alert.svg"
import HomeLink from '../Fragments/Dashboard/HomeLink';
import Profile from '../Fragments/Dashboard/Profile';

const Biodata = () => {
  return (
    <div className='w-[1220px] mx-auto'>
        <HomeLink />
        <Profile />
        <div className="mx-auto w-[1220px] max-h-max bg-white rounded-md pb-3 mt-4">
            {/* Profil images */}
            <div className="flex flex-row items-center justify-start p-4">
            <img src={userLink} alt="User Link" />
            <h1 className="text-md pl-2">Profil</h1>
            </div>
            {/* Foto + Data Diri */}
            <div className="flex flex-row max-h-max">
            {/* Foto */}
            <div className="flex justify-center items-center w-[300px] relative">
                <div className="absolute top-0 flex flex-col items-center justify-center mx-auto">
                <img src={profilePic} alt="Profile" className="w-[160px] h-[200px]" />
                <h1 className="text-sm my-2">2022/2023 Genap</h1>
                <h1 className="uppercase bg-birumuda text-white px-2 rounded-sm text-xs">aktif</h1>
                </div>
            </div>
            {/* Data diri */}
            <div className="flex flex-col w-[890px]">
                <table className="w-full text-sm text-left rtl:text-right text-black">
                <tbody>
                    <tr className="border-b hover:bg-slate-50">
                    <th scope="row" className="px-2 font-bold">Nama</th>
                    <td className="">
                        <span className="mr-8">:</span>Denni Setiawan
                    </td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                    <th scope="row" className="px-2 font-bold whitespace-nowrap">NIM</th>
                    <td className="">
                        <span className="mr-8">:</span>03749103
                    </td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                    <th scope="row" className="px-2 font-bold whitespace-nowrap">Fakultas</th>
                    <td className="">
                        <span className="mr-8">:</span>FASILKOM
                    </td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                    <th scope="row" className="px-2 font-bold whitespace-nowrap">Prodi</th>
                    <td className="">
                        <span className="mr-8">:</span>Teknik Informatika
                    </td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                    <th scope="row" className="px-2 font-bold whitespace-nowrap">Angkatan</th>
                    <td className="">
                        <span className="mr-8">:</span>2022
                    </td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                    <th scope="row" className="px-2 font-bold whitespace-nowrap">Tempat Lahir</th>
                    <td className="">
                        <span className="mr-8">:</span>Indonesia
                    </td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                    <th scope="row" className="px-2 font-bold whitespace-nowrap">Tanggal Lahir</th>
                    <td className="">
                        <span className="mr-8">:</span>30 Februari 2020
                    </td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                    <th scope="row" className="px-2 font-bold whitespace-nowrap">NIK</th>
                    <td className="">
                        <span className="mr-8">:</span>893174912
                    </td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                    <th scope="row" className="px-2 font-bold whitespace-nowrap">Nama Ayah</th>
                    <td className="">
                        <span className="mr-8">:</span>Denni
                    </td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                    <th scope="row" className="px-2 font-bold whitespace-nowrap">Nama Ibu</th>
                    <td className="">
                        <span className="mr-8">:</span>Denni
                    </td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                    <th scope="row" className="px-2 font-bold whitespace-nowrap">Kode Kewarganegaraan</th>
                    <td className="">
                        <span className="mr-8">:</span>ID
                    </td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                    <th scope="row" className="px-2 font-bold whitespace-nowrap">Nomor HP</th>
                    <td className="">
                        <span className="mr-8">:</span>12840123
                    </td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                    <th scope="row" className="px-2 font-bold whitespace-nowrap">Email Pribadi</th>
                    <td className="">
                        <span className="mr-8">:</span>s@gmail.com
                    </td>
                    </tr>
                </tbody>
                </table>
                {/* Warning 1 */}
                <div className="w-full mt-6 flex flex-row bg-[#F9D486] rounded-md h-[75px]">
                <div className="bg-[#F6BB42] w-[200px] flex items-center relative rounded-l-md">
                    <img src={alertIcon} alt="Alert" className="mx-auto" />
                    <div className="w-[20px] bg-[#F6BB42] rotate-45 z-10 text-[#F6BB42] absolute left-[52px]">p</div>
                </div>
                <h1 className="text-sm text-justify p-2">
                    <span className="font-bold">
                    Info : Pastikan data diri Anda diatas benar, sebelum mendaftar WISUDA.
                    </span>
                    Apabila ada kesalahan bisa mengajukan koreksi data, mohon datang ke
                    <span className="font-bold">Admin jurusan domisili kampus masing - masing</span>
                    dengan membawa Surat Pernyataan dan berkas untuk verifikasi (KTM, FC KTP, FC KK [Jika dibutuhkan]). Informasi lebih lanjut hubungi admin jurusan.
                </h1>
                </div>
                {/* Warning 2 */}
                <div className="w-full mt-4 flex flex-row bg-birumuda rounded-md mb-[19px] h-[75px]">
                <div className="bg-birusemi w-[140px] flex items-center relative rounded-l-md">
                    <img src={alertIcon} alt="Alert" className="mx-auto" />
                    <div className="w-[20px] bg-birusemi rotate-45 z-10 text-birusemi absolute left-[51px]">p</div>
                </div>
                <h1 className="text-sm text-justify p-2">
                    <span className="font-bold">Info : Pastikan data diri Anda di pangkalan data pendidikan tinggi (PDDIKTI) benar</span>
                    dengan mengecek di halaman
                    <a href="#" className="text-yellow-400">forlap.ristekdikti.go.id</a>
                    Informasi lebih lanjut dan pertanyaan mengenai data PDDIKTI UNSRI bisa menghubungi Admin jurusan.
                </h1>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Biodata;
