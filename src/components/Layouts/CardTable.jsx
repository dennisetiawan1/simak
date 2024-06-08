import React from 'react';
import CompetitionTable from '../Fragments/Dashboard/CompetitionTable';
import Card from '../Fragments/Dashboard/Card';
import academicIcon from '../../assets/Dashboard/academic.svg';
import mailIcon from '../../assets/Dashboard/mail.svg';
import moneyIcon from '../../assets/Dashboard/money.svg';
import calendarIcon from '../../assets/Dashboard/calendar.svg';
import useptIcon from '../../assets/Dashboard/usept.svg';
import userLinkBioIcon from '../../assets/Dashboard/user-link.svg';

const CardTable = () => {
  return (
    <div className="flex flex-row justify-between max-h-max">
      {/* Flex Row Card */}
      <div className="flex flex-col">
        {/* Tables */}
        <div className="bg-white pt-4 h-[215px]">
          <div className="flex flex-col items-start justify-center mb-2 border-b-[1px] border-birumuda px-4">
            <h1 className="text-md">Informasi Seputar Perlombaan FASILKOM</h1>
          </div>
          <CompetitionTable />
        </div>
        <div className="w-[780px] flex flex-row justify-between h-[100px] mt-4">
          <Card
            link="/akademik"
            imgSrc={academicIcon}
            title="Akademik"
            description="TA 2023/2024 Genap"
          />
          <Card
            link="/cutiKuliah"
            imgSrc={mailIcon}
            title="Cuti Kuliah"
            description="Pengajuan form cuti"
          />
          <Card
            link="#"
            imgSrc={moneyIcon}
            title="UKT"
            description="Cek tagihan anda"
            isModal={true}
          />
        </div>
      </div>

      {/* Flex Col Card */}
      <div className="flex flex-col max-h-screen">
        <Card
          link="/jadwalKuliah"
          imgSrc={calendarIcon}
          title="Jadwal Kuliah"
          description="TA 2023/2024 Genap"
          isVertical={true}
        />
        <Card
          link="/usept"
          imgSrc={useptIcon}
          title="USEPT"
          description="FASILKOM Grade : 500"
          isVertical={true}
        />
        <Card
          link="/isiBiodata"
          imgSrc={userLinkBioIcon}
          title="Lengkapi Biodata"
          description=""
          isVertical={true}
        />
      </div>
      
    </div>
  );
};

export default CardTable;
