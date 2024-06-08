// src/components/organisms/UserDashboardIRS.js
import React from 'react';
import UserInfo from './UserInfo';
import TableCell from '../../Elements/TableCell';
import TableHeader from '../../Elements/TableHeader';
import Button from '../../Elements/Button';

const UserDashboard = ({ user, matkuls, totalSks }) => (
  <div className="w-full block bg-white content">
    <div className="flex flex-row p-2 h-full">
      <table className="w-1/2">
        <tbody>
          <UserInfo label="NIM" value={user.nim} />
          <UserInfo label="Semester" value={user.semester} />
          <UserInfo label="NIP P.A." value={user.nipPA} />
        </tbody>
      </table>
      <table className="w-1/2">
        <tbody>
          <UserInfo label="Nama" value={user.nama} />
          <UserInfo label="Program Studi" value={user.prodi} />
          <UserInfo label="Nama Dosen P.A." value={user.namaDosenPA} />
        </tbody>
      </table>
    </div>
    <table className="w-full">
      <thead>
        <tr className="text-white bg-birusemi">
          <TableHeader rowSpan={2}>No.</TableHeader>
          <TableHeader rowSpan={2}>Kode MK</TableHeader>
          <TableHeader rowSpan={2}>Mata Kuliah</TableHeader>
          <TableHeader rowSpan={2}>SKS</TableHeader>
          <TableHeader colSpan={2}>Jadwal</TableHeader>
          <TableHeader rowSpan={2}>Dosen</TableHeader>
          <TableHeader rowSpan={2}>Ruangan</TableHeader>
        </tr>
        <tr className="text-white bg-birusemi">
          <TableHeader>Hari</TableHeader>
          <TableHeader>Jam</TableHeader>
        </tr>
      </thead>
      <tbody>
        {matkuls.map((matkul, index) => (
          <tr key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{matkul.kodeMK}</TableCell>
            <TableCell>{matkul.mataKuliah}</TableCell>
            <TableCell>{matkul.sks}</TableCell>
            <TableCell>{matkul.hari}</TableCell>
            <TableCell>{matkul.jam}</TableCell>
            <TableCell>{matkul.dosen}</TableCell>
            <TableCell>{matkul.ruangan}</TableCell>
          </tr>
        ))}
        <tr className="text-white bg-birusemi">
          <TableHeader colSpan={6}>Jumlah SKS</TableHeader>
          <TableHeader colSpan={2}>{totalSks}</TableHeader>
        </tr>
      </tbody>
    </table>
  </div>
);

export default UserDashboard;
