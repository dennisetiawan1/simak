import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/UNSRI-noBG.png";
import userIcon from "../../assets/user-login.svg";
import lockIcon from "../../assets/lock-pw.svg";
import resetIcon from "../../assets/reset.svg";
import Alert from "../Fragments/Alert";

const FormLogin = () => {
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    localStorage.setItem("token", "fakeToken");
    navigate('/');
  };

  return (
    <div className="font-opensans overflow-hidden min-h-screen sm:bg-slate-300 md:bg-[url('../../../public/bg-unsri.png')] bg-no-repeat bg-cover flex items-center justify-center">
      {loginError && <Alert setLoginError={setLoginError} />}
      <div className="container flex flex-col m-6 bg-white space-y-8 md:space-y-0 space-x-4 shadow-2xl rounded-md max-w-xl">
        <div className="w-10/12 mx-auto text-center my-8">
          <img src={logo} alt="Logo UNSRI" className="w-40 mx-auto mt-0" />
          <h1 className="font-semibold md:text-xl sm:text-sm my-2">
            Sistem Informasi Akademik (SIMAK)
          </h1>
          <h1 className="text-sm md:text-xl">Universitas Sriwijaya</h1>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-px my-8 bg-gray-300 border-0" />
            <span className="absolute px-3 font-light text-xs md:text-sm text-gray-400 -translate-x-1/2 bg-white left-1/2">
              Silahkan Masuk
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="relative flex w-full border border-gray-400 py-0 pl-1 rounded-md items-center">
              <div className="border-gray-400 pr-[2px] py-3 w-[30px]">
                <img src={userIcon} alt="" className="mx-auto" />
              </div>
              <input
                type="text"
                placeholder="NIM/NIP/E-mail Official UNSRI"
                className="w-full outline-none p-1 py-3 md:p-2 text-xs md:text-sm rounded-r-md border border-l-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-none focus:rounded-md"
                name="nim"
                id="nim"
                required
              />
            </div>
            <div className="relative flex w-full border border-gray-400 py-0 pl-1 rounded-md items-center mt-4">
              <div className="border-gray-400 pr-[2px] py-3 w-[30px]">
                <img src={lockIcon} alt="" className="mx-auto" />
              </div>
              <input
                type="password"
                placeholder="Password"
                className="w-full outline-none p-1 py-3 md:p-2 text-xs md:text-sm rounded-r-md border border-l-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-none focus:rounded-md"
                name="password"
                required
              />
            </div>
            <div>
              <button
                className="text-sm md:text-[16px] flex justify-center rounded-md items-center w-full py-[8px] md:p-3 border text-yellow-400 border-yellow-400 mt-4 mb-4 hover:bg-yellow-400 hover:cursor-pointer hover:text-white"
                name="submit"
              >
                LOGIN
              </button>
            </div>
          </form>
          <button
            className="text-xs md:text-sm flex justify-center mb-[12px] rounded-md items-center w-full p-1 md:p-2 text-white bg-red-500 hover:bg-red-600 hover:cursor-pointer"
          >
            <img src={resetIcon} alt="" className="mx-2" />
            Reset Password
          </button>
          <div className="text-left text-[10px] md:text-xs">
            <p className="text-black mt-2 mb-0">Belum memiliki akun?</p>
            <a
              href="#"
              className="text-red-500 underline hover:text-yellow-400 mt-0 font-bold"
            >
              Hubungi Admin Disini!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
