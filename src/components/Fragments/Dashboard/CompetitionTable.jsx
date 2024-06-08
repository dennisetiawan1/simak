import React from 'react';

const datas = [
  { namaLomba: 'Lomba 1', penyelenggara: 'Penyelenggara 1', tanggal: '2024-06-07' },
  { namaLomba: 'Lomba 2', penyelenggara: 'Penyelenggara 2', tanggal: '2024-07-07' },
  { namaLomba: 'Lomba 2', penyelenggara: 'Penyelenggara 2', tanggal: '2024-07-07' },
  { namaLomba: 'Lomba 2', penyelenggara: 'Penyelenggara 2', tanggal: '2024-07-07' },
  
];

const CompetitionTable = () => {
  return (
    <div className="overflow-y-scroll max-h-[165px] border border-gray-300">
      <table className="w-full text-sm text-left rtl:text-right text-white">
        <thead className="text-xs text-white uppercase bg-birusemi sticky top-0">
          <tr>
            <th scope="col" className="px-6 py-3">Nama Lomba</th>
            <th scope="col" className="px-6 py-3">Penyelenggara</th>
            <th scope="col" className="px-6 py-3">Tanggal Diadakan</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((lomba, index) => (
            <tr key={index} className="border-b bg-birumuda">
              <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                {lomba.namaLomba}
              </th>
              <td className="px-6 py-4">{lomba.penyelenggara}</td>
              <td className="px-6 py-4">{lomba.tanggal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompetitionTable;
