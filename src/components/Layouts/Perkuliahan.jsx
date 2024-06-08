import React, { useState } from 'react';

const Perkuliahan = () => {
  const [activeTab, setActiveTab] = useState('KRS');
  const matkuls = [
    {
      kodeMK: 'FSK3227',
      mataKuliah: 'PENGOLAHAN CITRA DIGITAL/PENGOLAHAN CITRA',
      sks: 3,
      hari: 'Monday',
      jam: '10:00-12:00',
      dosen: 'JULIAN SUPARDI, M.T., PH.D.',
      ruangan: 'A1'
    },
    // Add more matkul objects here
  ];
  const totalSks = matkuls.reduce((total, matkul) => total + matkul.sks, 0);

  return (
    <div className="w-full h-max flex flex-col bg-white font-black">
      <div className="border-b-2 border-b-gray-100 w-full p-4">
        <h1>Perkuliahan</h1>
      </div>
      {/* Dropdown menu */}
      <div className="flex flex-row w-full max-h-max shadow-md">
        {/* Shortcut links */}
        <div className="flex flex-row w-full border-b-2 border-b-gray-100">
          <a
            href="#"
            className={`p-3 tab duration-300 w-1/3 text-center ${activeTab === 'KRS' ? 'tabs-aktif' : ''}`}
            onClick={() => setActiveTab('KRS')}
          >
            Kartu Rencana Studi
          </a>
          <a
            href="#"
            className={`border-l p-3 tab duration-300 w-1/3 text-center ${activeTab === 'KHS' ? 'tabs-aktif' : ''}`}
            onClick={() => setActiveTab('KHS')}
          >
            Kartu Hasil Studi
          </a>
          <a
            href="#"
            className={`border-l p-3 tab duration-300 w-1/3 text-center ${activeTab === 'Transkrip' ? 'tabs-aktif' : ''}`}
            onClick={() => setActiveTab('Transkrip')}
          >
            Transkrip Nilai
          </a>
        </div>
      </div>
      {/* KRS */}
      {activeTab === 'KRS' && (
        <div className="w-full block bg-white text-sm content">
          <div className="flex flex-row mt-2 p-2">
            <table className="w-1/2">
              <tbody>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">NIM</th>
                  <td className=""><span className="mr-8">:</span>09021282227045</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Semester</th>
                  <td className=""><span className="mr-8">:</span>4</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">NIP P.A.</th>
                  <td className=""><span className="mr-8">:</span>198806282018031001</td>
                </tr>
              </tbody>
            </table>
            <table className="w-1/2">
              <tbody>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Nama</th>
                  <td className=""><span className="mr-8">:</span>Julio Syah Putra</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Program Studi</th>
                  <td className=""><span className="mr-8">:</span>Teknik Informatika</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Nama Dosen P.A.</th>
                  <td className=""><span className="mr-8">:</span>OSVARI ARSALAN, S.KOM., M.T.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-white bg-birusemi">
                <th rowSpan="2" className="p-2 border-2">No.</th>
                <th rowSpan="2" className="p-8 py-4 border-2 whitespace-nowrap">Kode MK</th>
                <th rowSpan="2" className="p-8 border-2">Mata Kuliah</th>
                <th rowSpan="2" className="p-2 border-2">SKS</th>
                <th colSpan="2" className="p-8 py-2 border-2">Jadwal</th>
                <th rowSpan="2" className="p-3 border-2">Dosen</th>
                <th rowSpan="2" className="p-8 border-2">Ruangan</th>
              </tr>
              <tr>
                <td className="py-2 px-1 border-2 text-center text-white bg-birusemi">Hari</td>
                <td className="py-2 px-1 border-2 text-center text-white bg-birusemi">Jam</td>
              </tr>
            </thead>
            <tbody>
              {matkuls.map((matkul, index) => (
                <tr key={index}>
                  <td className="p-4 border-2 text-center">{index + 1}</td>
                  <td className="p-4 border-2 text-center">{matkul.kodeMK}</td>
                  <td className="p-4 border-2 text-center">{matkul.mataKuliah}</td>
                  <td className="p-2 border-2 text-center">{matkul.sks}</td>
                  <td className="p-4 border-2 text-center">{matkul.hari}</td>
                  <td className="py-4 px-2 text-center border-2 whitespace-nowrap">{matkul.jam}</td>
                  <td className="p-4 px-2 border-2 text-center">{matkul.dosen}</td>
                  <td className="p-4 border-2 text-center">{matkul.ruangan}</td>
                </tr>
              ))}
              <tr className="text-white bg-birusemi">
                <th colSpan="6" className="p-8 py-2 border-2 text-left">Jumlah SKS</th>
                <th colSpan="2" className="p-8 py-2 border-2">{totalSks}</th>
              </tr>
            </tbody>
          </table>
          {/* Button Print */}
          <div className="bg-slate-100">
            <a
              href="#"
              className="my-4 border-2 border-birutua p-2 text-sm hover:text-white hover:bg-birusemi rounded-sm w-[180px]"
              data-modal-target="popup-modal5"
              data-modal-toggle="popup-modal5"
            >
              Ambil Mata Kuliah
            </a>
            <button className="my-4 border-2 border-birutua p-2 text-sm hover:text-white hover:bg-birusemi rounded-sm w-[180px] ml-4">
              Cetak MS. WORD
            </button>
          </div>
        </div>
      )}
      {/* KHS */}
      {activeTab === 'KHS' && (
        <div className="w-full block bg-white text-sm content">
          <div className="flex flex-row mt-2 p-2">
            <table className="w-1/2">
              <tbody>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">NIM</th>
                  <td className=""><span className="mr-8">:</span>09021282227045</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Semester</th>
                  <td className=""><span className="mr-8">:</span>4</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">NIP P.A.</th>
                  <td className=""><span className="mr-8">:</span>198806282018031001</td>
                </tr>
              </tbody>
            </table>
            <table className="w-1/2">
              <tbody>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Nama</th>
                  <td className=""><span className="mr-8">:</span>Julio Syah Putra</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Program Studi</th>
                  <td className=""><span className="mr-8">:</span>Teknik Informatika</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Nama Dosen P.A.</th>
                  <td className=""><span className="mr-8">:</span>OSVARI ARSALAN, S.KOM., M.T.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-white bg-birusemi">
                <th rowSpan="2" className="p-2 border-2">No.</th>
                <th rowSpan="2" className="p-8 py-4 border-2 whitespace-nowrap">Kode MK</th>
                <th rowSpan="2" className="p-8 border-2">Mata Kuliah</th>
                <th rowSpan="2" className="p-2 border-2">SKS</th>
                <th colSpan="2" className="p-8 py-2 border-2">Jadwal</th>
                <th rowSpan="2" className="p-3 border-2">Dosen</th>
                <th rowSpan="2" className="p-8 border-2">Ruangan</th>
              </tr>
              <tr>
                <td className="py-2 px-1 border-2 text-center text-white bg-birusemi">Hari</td>
                <td className="py-2 px-1 border-2 text-center text-white bg-birusemi">Jam</td>
              </tr>
            </thead>
            <tbody>
              {matkuls.map((matkul, index) => (
                <tr key={index}>
                  <td className="p-4 border-2 text-center">{index + 1}</td>
                  <td className="p-4 border-2 text-center">{matkul.kodeMK}</td>
                  <td className="p-4 border-2 text-center">{matkul.mataKuliah}</td>
                  <td className="p-2 border-2 text-center">{matkul.sks}</td>
                  <td className="p-4 border-2 text-center">{matkul.hari}</td>
                  <td className="py-4 px-2 text-center border-2 whitespace-nowrap">{matkul.jam}</td>
                  <td className="p-4 px-2 border-2 text-center">{matkul.dosen}</td>
                  <td className="p-4 border-2 text-center">{matkul.ruangan}</td>
                </tr>
              ))}
              <tr className="text-white bg-birusemi">
                <th colSpan="6" className="p-8 py-2 border-2 text-left">Jumlah SKS</th>
                <th colSpan="2" className="p-8 py-2 border-2">{totalSks}</th>
              </tr>
            </tbody>
          </table>
          {/* Button Print */}
          <div className="bg-slate-100">
            <a
              href="#"
              className="my-4 border-2 border-birutua p-2 text-sm hover:text-white hover:bg-birusemi rounded-sm w-[180px]"
              data-modal-target="popup-modal5"
              data-modal-toggle="popup-modal5"
            >
              Ambil Mata Kuliah
            </a>
            <button className="my-4 border-2 border-birutua p-2 text-sm hover:text-white hover:bg-birusemi rounded-sm w-[180px] ml-4">
              Cetak MS. WORD
            </button>
          </div>
        </div>
      )}
      {/* Transkrip */}
      {activeTab === 'Transkrip' && (
        <div className="w-full block bg-white text-sm content">
          <div className="flex flex-row mt-2 p-2">
            <table className="w-1/2">
              <tbody>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">NIM</th>
                  <td className=""><span className="mr-8">:</span>09021282227045</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Semester</th>
                  <td className=""><span className="mr-8">:</span>4</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">NIP P.A.</th>
                  <td className=""><span className="mr-8">:</span>198806282018031001</td>
                </tr>
              </tbody>
            </table>
            <table className="w-1/2">
              <tbody>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Nama</th>
                  <td className=""><span className="mr-8">:</span>Julio Syah Putra</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Program Studi</th>
                  <td className=""><span className="mr-8">:</span>Teknik Informatika</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Nama Dosen P.A.</th>
                  <td className=""><span className="mr-8">:</span>OSVARI ARSALAN, S.KOM., M.T.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-white bg-birusemi">
                <th rowSpan="2" className="p-2 border-2">No.</th>
                <th rowSpan="2" className="p-8 py-4 border-2 whitespace-nowrap">Kode MK</th>
                <th rowSpan="2" className="p-8 border-2">Mata Kuliah</th>
                <th rowSpan="2" className="p-2 border-2">SKS</th>
                <th colSpan="2" className="p-8 py-2 border-2">Jadwal</th>
                <th rowSpan="2" className="p-3 border-2">Dosen</th>
                <th rowSpan="2" className="p-8 border-2">Ruangan</th>
              </tr>
              <tr>
                <td className="py-2 px-1 border-2 text-center text-white bg-birusemi">Hari</td>
                <td className="py-2 px-1 border-2 text-center text-white bg-birusemi">Jam</td>
              </tr>
            </thead>
            <tbody>
              {matkuls.map((matkul, index) => (
                <tr key={index}>
                  <td className="p-4 border-2 text-center">{index + 1}</td>
                  <td className="p-4 border-2 text-center">{matkul.kodeMK}</td>
                  <td className="p-4 border-2 text-center">{matkul.mataKuliah}</td>
                  <td className="p-2 border-2 text-center">{matkul.sks}</td>
                  <td className="p-4 border-2 text-center">{matkul.hari}</td>
                  <td className="py-4 px-2 text-center border-2 whitespace-nowrap">{matkul.jam}</td>
                  <td className="p-4 px-2 border-2 text-center">{matkul.dosen}</td>
                  <td className="p-4 border-2 text-center">{matkul.ruangan}</td>
                </tr>
              ))}
              <tr className="text-white bg-birusemi">
                <th colSpan="6" className="p-8 py-2 border-2 text-left">Jumlah SKS</th>
                <th colSpan="2" className="p-8 py-2 border-2">{totalSks}</th>
              </tr>
            </tbody>
          </table>
          {/* Button Print */}
          <div className="bg-slate-100">
            <a
              href="#"
              className="my-4 border-2 border-birutua p-2 text-sm hover:text-white hover:bg-birusemi rounded-sm w-[180px]"
              data-modal-target="popup-modal5"
              data-modal-toggle="popup-modal5"
            >
              Ambil Mata Kuliah
            </a>
            <button className="my-4 border-2 border-birutua p-2 text-sm hover:text-white hover:bg-birusemi rounded-sm w-[180px] ml-4">
              Cetak MS. WORD
            </button>
          </div>
        </div>
      )}
      {activeTab === 'Form Nilai' && (
        <div className="w-full block bg-white text-sm content">
          <div className="flex flex-row mt-2 p-2">
            <table className="w-1/2">
              <tbody>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">NIM</th>
                  <td className=""><span className="mr-8">:</span>09021282227045</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Semester</th>
                  <td className=""><span className="mr-8">:</span>4</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">NIP P.A.</th>
                  <td className=""><span className="mr-8">:</span>198806282018031001</td>
                </tr>
              </tbody>
            </table>
            <table className="w-1/2">
              <tbody>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Nama</th>
                  <td className=""><span className="mr-8">:</span>Julio Syah Putra</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Program Studi</th>
                  <td className=""><span className="mr-8">:</span>Teknik Informatika</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Nama Dosen P.A.</th>
                  <td className=""><span className="mr-8">:</span>OSVARI ARSALAN, S.KOM., M.T.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-white bg-birusemi">
                <th rowSpan="2" className="p-2 border-2">No.</th>
                <th rowSpan="2" className="p-8 py-4 border-2 whitespace-nowrap">Kode MK</th>
                <th rowSpan="2" className="p-8 border-2">Mata Kuliah</th>
                <th rowSpan="2" className="p-2 border-2">SKS</th>
                <th colSpan="2" className="p-8 py-2 border-2">Jadwal</th>
                <th rowSpan="2" className="p-3 border-2">Dosen</th>
                <th rowSpan="2" className="p-8 border-2">Ruangan</th>
              </tr>
              <tr>
                <td className="py-2 px-1 border-2 text-center text-white bg-birusemi">Hari</td>
                <td className="py-2 px-1 border-2 text-center text-white bg-birusemi">Jam</td>
              </tr>
            </thead>
            <tbody>
              {matkuls.map((matkul, index) => (
                <tr key={index}>
                  <td className="p-4 border-2 text-center">{index + 1}</td>
                  <td className="p-4 border-2 text-center">{matkul.kodeMK}</td>
                  <td className="p-4 border-2 text-center">{matkul.mataKuliah}</td>
                  <td className="p-2 border-2 text-center">{matkul.sks}</td>
                  <td className="p-4 border-2 text-center">{matkul.hari}</td>
                  <td className="py-4 px-2 text-center border-2 whitespace-nowrap">{matkul.jam}</td>
                  <td className="p-4 px-2 border-2 text-center">{matkul.dosen}</td>
                  <td className="p-4 border-2 text-center">{matkul.ruangan}</td>
                </tr>
              ))}
              <tr className="text-white bg-birusemi">
                <th colSpan="6" className="p-8 py-2 border-2 text-left">Jumlah SKS</th>
                <th colSpan="2" className="p-8 py-2 border-2">{totalSks}</th>
              </tr>
            </tbody>
          </table>
          {/* Button Print */}
          <div className="bg-slate-100">
            <a
              href="#"
              className="my-4 border-2 border-birutua p-2 text-sm hover:text-white hover:bg-birusemi rounded-sm w-[180px]"
              data-modal-target="popup-modal5"
              data-modal-toggle="popup-modal5"
            >
              Ambil Mata Kuliah
            </a>
            <button className="my-4 border-2 border-birutua p-2 text-sm hover:text-white hover:bg-birusemi rounded-sm w-[180px] ml-4">
              Cetak MS. WORD
            </button>
          </div>
        </div>
      )}
      {activeTab === 'Jadwal' && (
        <div className="w-full block bg-white text-sm content">
          <div className="flex flex-row mt-2 p-2">
            <table className="w-1/2">
              <tbody>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">NIM</th>
                  <td className=""><span className="mr-8">:</span>09021282227045</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Semester</th>
                  <td className=""><span className="mr-8">:</span>4</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">NIP P.A.</th>
                  <td className=""><span className="mr-8">:</span>198806282018031001</td>
                </tr>
              </tbody>
            </table>
            <table className="w-1/2">
              <tbody>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Nama</th>
                  <td className=""><span className="mr-8">:</span>Julio Syah Putra</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Program Studi</th>
                  <td className=""><span className="mr-8">:</span>Teknik Informatika</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Nama Dosen P.A.</th>
                  <td className=""><span className="mr-8">:</span>OSVARI ARSALAN, S.KOM., M.T.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-white bg-birusemi">
                <th rowSpan="2" className="p-2 border-2">No.</th>
                <th rowSpan="2" className="p-8 py-4 border-2 whitespace-nowrap">Kode MK</th>
                <th rowSpan="2" className="p-8 border-2">Mata Kuliah</th>
                <th rowSpan="2" className="p-2 border-2">SKS</th>
                <th colSpan="2" className="p-8 py-2 border-2">Jadwal</th>
                <th rowSpan="2" className="p-3 border-2">Dosen</th>
                <th rowSpan="2" className="p-8 border-2">Ruangan</th>
              </tr>
              <tr>
                <td className="py-2 px-1 border-2 text-center text-white bg-birusemi">Hari</td>
                <td className="py-2 px-1 border-2 text-center text-white bg-birusemi">Jam</td>
              </tr>
            </thead>
            <tbody>
              {matkuls.map((matkul, index) => (
                <tr key={index}>
                  <td className="p-4 border-2 text-center">{index + 1}</td>
                  <td className="p-4 border-2 text-center">{matkul.kodeMK}</td>
                  <td className="p-4 border-2 text-center">{matkul.mataKuliah}</td>
                  <td className="p-2 border-2 text-center">{matkul.sks}</td>
                  <td className="p-4 border-2 text-center">{matkul.hari}</td>
                  <td className="py-4 px-2 text-center border-2 whitespace-nowrap">{matkul.jam}</td>
                  <td className="p-4 px-2 border-2 text-center">{matkul.dosen}</td>
                  <td className="p-4 border-2 text-center">{matkul.ruangan}</td>
                </tr>
              ))}
              <tr className="text-white bg-birusemi">
                <th colSpan="6" className="p-8 py-2 border-2 text-left">Jumlah SKS</th>
                <th colSpan="2" className="p-8 py-2 border-2">{totalSks}</th>
              </tr>
            </tbody>
          </table>
          {/* Button Print */}
          <div className="bg-slate-100">
            <a
              href="#"
              className="my-4 border-2 border-birutua p-2 text-sm hover:text-white hover:bg-birusemi rounded-sm w-[180px]"
              data-modal-target="popup-modal5"
              data-modal-toggle="popup-modal5"
            >
              Ambil Mata Kuliah
            </a>
            <button className="my-4 border-2 border-birutua p-2 text-sm hover:text-white hover:bg-birusemi rounded-sm w-[180px] ml-4">
              Cetak MS. WORD
            </button>
          </div>
        </div>
      )}
      {activeTab === 'Evaluasi' && (
        <div className="w-full block bg-white text-sm content">
          <div className="flex flex-row mt-2 p-2">
            <table className="w-1/2">
              <tbody>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">NIM</th>
                  <td className=""><span className="mr-8">:</span>09021282227045</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Semester</th>
                  <td className=""><span className="mr-8">:</span>4</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">NIP P.A.</th>
                  <td className=""><span className="mr-8">:</span>198806282018031001</td>
                </tr>
              </tbody>
            </table>
            <table className="w-1/2">
              <tbody>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Nama</th>
                  <td className=""><span className="mr-8">:</span>Julio Syah Putra</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Program Studi</th>
                  <td className=""><span className="mr-8">:</span>Teknik Informatika</td>
                </tr>
                <tr className="hover:bg-slate-50 text-left">
                  <th className="font-bold">Nama Dosen P.A.</th>
                  <td className=""><span className="mr-8">:</span>OSVARI ARSALAN, S.KOM., M.T.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-white bg-birusemi">
                <th rowSpan="2" className="p-2 border-2">No.</th>
                <th rowSpan="2" className="p-8 py-4 border-2 whitespace-nowrap">Kode MK</th>
                <th rowSpan="2" className="p-8 border-2">Mata Kuliah</th>
                <th rowSpan="2" className="p-2 border-2">SKS</th>
                <th colSpan="2" className="p-8 py-2 border-2">Jadwal</th>
                <th rowSpan="2" className="p-3 border-2">Dosen</th>
                <th rowSpan="2" className="p-8 border-2">Ruangan</th>
              </tr>
              <tr>
                <td className="py-2 px-1 border-2 text-center text-white bg-birusemi">Hari</td>
                <td className="py-2 px-1 border-2 text-center text-white bg-birusemi">Jam</td>
              </tr>
            </thead>
            <tbody>
              {matkuls.map((matkul, index) => (
                <tr key={index}>
                  <td className="p-4 border-2 text-center">{index + 1}</td>
                  <td className="p-4 border-2 text-center">{matkul.kodeMK}</td>
                  <td className="p-4 border-2 text-center">{matkul.mataKuliah}</td>
                  <td className="p-2 border-2 text-center">{matkul.sks}</td>
                  <td className="p-4 border-2 text-center">{matkul.hari}</td>
                  <td className="py-4 px-2 text-center border-2 whitespace-nowrap">{matkul.jam}</td>
                  <td className="p-4 px-2 border-2 text-center">{matkul.dosen}</td>
                  <td className="p-4 border-2 text-center">{matkul.ruangan}</td>
                </tr>
              ))}
              <tr className="text-white bg-birusemi">
                <th colSpan="6" className="p-8 py-2 border-2 text-left">Jumlah SKS</th>
                <th colSpan="2" className="p-8 py-2 border-2">{totalSks}</th>
              </tr>
            </tbody>
          </table>
          {/* Button Print */}
          <div className="bg-slate-100">
            <a
              href="#"
              className="my-4 border-2 border-birutua p-2 text-sm hover:text-white hover:bg-birusemi rounded-sm w-[180px]"
              data-modal-target="popup-modal5"
              data-modal-toggle="popup-modal5"
            >
              Ambil Mata Kuliah
            </a>
            <button className="my-4 border-2 border-birutua p-2 text-sm hover:text-white hover:bg-birusemi rounded-sm w-[180px] ml-4">
              Cetak MS. WORD
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Perkuliahan;
