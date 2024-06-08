import React from 'react';
import globe from "../../assets/Jadwal/globe.svg"
import mail from "../../assets/Dashboard/mail.svg"
import tugas from "../../assets/Jadwal/tugas.svg"

const JadwalTable = () => {
  return (
    <div className="w-[1220px] mx-auto mt-4">
      <div className="wrapper bg-white rounded shadow w-full">
        <div className="header flex justify-between border-b p-2">
          <span className="text-lg font-bold">Semester Genap</span>
          <div className="buttons">
            <button className="p-1">
              <svg
                width="1em"
                fill="gray"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-left-circle"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fillRule="evenodd"
                  d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
                />
                <path
                  fillRule="evenodd"
                  d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
                />
              </svg>
            </button>
            <button className="p-1">
              <svg
                width="1em"
                fill="gray"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-right-circle"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fillRule="evenodd"
                  d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
                />
                <path
                  fillRule="evenodd"
                  d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              {['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'].map((day, index) => (
                <th
                  key={index}
                  className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
                >
                  <span className="xl:block lg:block md:block sm:block hidden">{day}</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">{day.slice(0, 3)}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="text-center h-20">
              {Array(7).fill(null).map((_, index) => (
                <td
                  key={index}
                  className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300"
                >
                  <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500"></span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer flex flex-col items-center justify-center">
                      {/* Example events, you can add more events or use props to dynamically generate these */}
                      {index === 1 && (
                        <div className="event bg-birutua text-white rounded p-1 text-sm mb-1">
                          <span className="time"> 13.30 - 16.00 </span>
                          <span className="event-name">Pemrogramman Web II </span>
                        </div>
                      )}
                      {index === 2 && (
                        <>
                          <div className="event bg-birutua text-white rounded p-1 text-sm mb-1 w-40">
                            <span className="time"> 08.00 - 10.30 <br /> </span>
                            <span className="event-name"> Teori Bahasa Otomata </span>
                          </div>
                          <div className="event bg-birutua text-white rounded p-1 text-sm mb-1 flex flex-col w-40">
                            <span className="time"> 13.30 - 16.00 </span>
                            <span className="event-name"> Data Warehouse</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <h1 className="mt-4 text-xl">Perkuliahan Daring</h1>
      <div className="w-full flex flex-row justify-between">
        {[
          {
            href: 'https://uscamz.unsri.ac.id/b',
            imgSrc: globe,
            title: 'Kuliah Online',
            description: ['Layanan perkuliahan daring', 'USCamZi'],
          },
          {
            href: '#',
            imgSrc: mail,
            title: 'Absensi Online',
            description: ['Absensi via GForm', 'Sesuai ketentuan Dosen MK'],
          },
          {
            href: 'https://classroom.google.com/',
            imgSrc: tugas,
            title: 'Pengumpulan Tugas',
            description: ['Layanan pengumpulan soft file tugas', 'Google Classroom'],
          },
        ].map((card, index) => (
          <a
            key={index}
            href={card.href}
            className="w-[400px] flex flex-row items-center justify-between bg-white rounded-md p-4 my-4 group relative"
          >
            <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-birutua transition-all duration-500 group-hover:w-full"></span>
            <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-birutua transition-all duration-500 group-hover:h-full"></span>
            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-birutua transition-all duration-500 group-hover:w-full"></span>
            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-birutua transition-all duration-500 group-hover:h-full"></span>
            <img src={card.imgSrc} alt={card.title} />
            <div className="flex flex-col">
              <div className="flex flex-row items-center justify-center">
                <h1 className="text-2xl text-[#144272] mr-3">{card.title}</h1>
              </div>
              {card.description.map((line, idx) => (
                <p key={idx} className="text-xs text-[#144272] mt-1">
                  {line}
                </p>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default JadwalTable;
