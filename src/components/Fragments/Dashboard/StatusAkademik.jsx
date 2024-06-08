import React from 'react'
import museum from "../../../assets/Dashboard/museum.svg"
import userLink from "../../../assets/Dashboard/user-link.svg"
import trophy from "../../../assets/Dashboard/trophy.svg"

const StatusAkademik = () => {
    return (
        <div className="flex flex-row my-4 justify-between shadow-sm">
            <div className="w-[780px] flex flex-col bg-white rounded-md p-4 border border-gray-300">
                <div className="flex flex-row">
                    <img src={museum} alt="Museum Icon" className="mr-2" />
                    <h1 className="text-md">Status Akademik</h1>
                </div>
                <p className="text-xs pt-4">
                    Informasi selengkapnya mengenai status akademik silakan menghubungi
                    akademik Fakultas Ilmu Komputer.
                </p>
                <div className="flex flex-row justify-center mt-8">
                    <img src={userLink} alt="User Link Icon" />
                    <h1 className="text-sm">
                        <span className="font-bold m-1">Dosen wali:</span>Nama Dosen
                    </h1>
                </div>
                <p className="text-sm flex justify-center mb-2 font-bold">
                    (NIP: 123456789)
                </p>
                {/* Aktif's Flexbox */}
                <div className="flex flex-row justify-center mt-4">
                    <div className="flex flex-col justify-center items-center border-r-2 px-4">
                        <h1>Semester Akademik Sekarang</h1>
                        <h1>2023/2024 Genap</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center border-r-2 px-4">
                        <h1>Semester Studi</h1>
                        <h1>4</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center px-4">
                        <h1>Status Akademik</h1>
                        <h1 className="uppercase bg-birumuda text-white px-2 rounded-md">
                            aktif
                        </h1>
                    </div>
                </div>
            </div>
            {/* Prestasi Akademik */}
            <div className="w-[400px] flex flex-col bg-white rounded-md p-4 border border-gray-300">
                <div className="flex flex-row">
                    <img src={trophy} alt="Trophy Icon" className="mr-2" />
                    <h1 className="text-md">Prestasi Akademik</h1>
                </div>
                <p className="text-xs pt-4">
                    Prestasi akademik mencakup pencapaian signifikan dalam studi,
                    seperti IPK tinggi yang mencerminkan dedikasi mahasiswa dalam
                    lingkungan akademik.
                </p>
                <p className="text-xs pt-4">
                    Apabila IPK atau SKS tidak sesuai, silahkan hubungi prodi untuk
                    melakukan penghitungan ulang.
                </p>
                <div className="flex flex-row justify-center mt-4">
                    <div className="flex flex-col justify-center items-center px-4">
                        <h1>IPK</h1>
                        <h1>3.75</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center px-4">
                        <h1>SKS</h1>
                        <h1>78</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatusAkademik
