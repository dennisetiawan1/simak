import React from 'react';
import alertIcon from "../../assets/alert.svg"
const datas = [
  {
    tanggalTest: '2023-05-10',
    NIM: '123456',
    Nama: 'John Doe',
    Listening: 90,
    Structure: 85,
    Reading: 88,
    Skor: 480,
    syaratLulus: '500',
  },
  {
    tanggalTest: '2023-05-11',
    NIM: '654321',
    Nama: 'Jane Smith',
    Listening: 80,
    Structure: 75,
    Reading: 78,
    Skor: 460,
    syaratLulus: '500',
  },
];

const Usept = () => {
  const isLulus = datas.some((data) => data.Skor >= 500);

  return (
    <div className="w-[1220px] mx-auto">
      <div className="w-[1220px] mx-auto mt-4">
        <table className="w-full">
          <thead>
            <tr className="text-white bg-birusemi">
              <th rowSpan="2" className="p-2 border-2">No.</th>
              <th rowSpan="2" className="p-8 py-4 border-2">Tanggal Test</th>
              <th rowSpan="2" className="p-8 border-2">NIM</th>
              <th rowSpan="2" className="p-8 border-2">Nama</th>
              <th colSpan="4" className="p-8 py-2 border-2">Hasil Test</th>
              <th rowSpan="2" className="p-3 border-2">Syarat Lulus Prodi</th>
              <th rowSpan="2" className="p-8 border-2">Keterangan</th>
            </tr>
            <tr>
              <td className="py-2 px-1 border-2 text-center text-white bg-birusemi">Listening</td>
              <td className="py-2 px-1 border-2 text-center text-white bg-birusemi">Structure</td>
              <td className="py-2 px-1 border-2 text-center text-white bg-birusemi">Reading</td>
              <td className="py-2 px-1 border-2 text-center text-white bg-birusemi">Skor</td>
            </tr>
          </thead>
          <tbody>
            {datas.map((data, index) => (
              <tr key={index}>
                <td className="p-4 border-2 text-center">{index + 1}</td>
                <td className="p-4 border-2 text-center">{data.tanggalTest}</td>
                <td className="p-4 border-2 text-center">{data.NIM}</td>
                <td className="p-4 border-2 text-center">{data.Nama}</td>
                <td className="p-4 border-2 text-center">{data.Listening}</td>
                <td className="p-4 border-2 text-center">{data.Structure}</td>
                <td className="p-4 border-2 text-center">{data.Reading}</td>
                <td className="p-4 border-2 text-center">{data.Skor}</td>
                <td className="p-4 border-2 text-center">{data.syaratLulus}</td>
                <td className="p-4 border-2 text-center">
                  {data.Skor >= 500 ? 'LULUS' : 'BELUM LULUS'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Alert section */}
      <div className="flex flex-col w-[1220px] mx-auto mt-4">
        {isLulus ? (
          <div className="w-full mt-4 flex flex-row bg-green-500 rounded-md mb-[19px] h-[75px]">
            <div className="bg-green-700 w-[100px] flex items-center relative rounded-l-md">
              <img src="images/check.svg" alt="" className="mx-auto" />
              <div className="w-[20px] bg-green-700 rotate-45 z-10 text-green-700 absolute left-[44px]">p</div>
            </div>
            <h1 className="text-sm text-justify p-2 text-white">
              <span className="font-bold">SELAMAT, ANDA LULUS!</span> Anda telah memenuhi persyaratan minimal USEPT. Silakan lanjutkan studi Anda.
            </h1>
          </div>
        ) : (
          <div className="w-full mt-4 flex flex-row bg-birumuda rounded-md mb-[19px] h-[75px]">
            <div className="bg-birusemi w-[100px] flex items-center relative rounded-l-md">
              <img src={alertIcon} alt="" className="mx-auto" />
              <div className="w-[20px] bg-birusemi rotate-45 z-10 text-birusemi absolute left-[44px]">p</div>
            </div>
            <h1 className="text-sm text-justify p-2">
              <span className="font-bold">MAAF, ANDA BELUM LULUS DARI PERSYARATAN MINIMAL USEPT DAN ANDA BELUM BISA TAMAT SEBELUM SYARAT DIPENUHI. SILAHKAN MENGIKUTI TEST USEPT KEMBALI!</span> Segerakan ikuti test USEPT berikutnya agar Anda tidak ada masalah pada saat akan lulus dari program studi.
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Usept;
