// import { useState } from "react";
import avatar from "../assets/Avatar_6.png";

function PageProfil() {
  // const [pg1, setPg1] = useState([]);
  // console.warn(`${pg1} ${setPg1}`);
  return (
    <div className="backgroundcolor-4 flex flex-col items-center p-10">
      <h1 className="color-1 m-7 font-extrabold">TON PROFIL</h1>
      <img src={avatar} alt="avatar par défaut" className="avatar" />
      <div className="flex flex-row color-1  m-7">
        <p className="text-lg">NOM</p>
        <p className="text-lg">PRENOM</p>
      </div>
      <div className="w-full h-96 bg-red-600 rounded-2xl m-10 text-lg">
        <p>Graph de Damien</p>
      </div>
      <div className="color-1 w-full h-96 m-100 p-10 flex flex-col items-center drop-shadow-2xl text-lg ">
        <p>Mes actions en cours</p>
      </div>
      <button
        type="submit"
        className="p-10 m-100 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Mon niveau/Mon score
      </button>
    </div>
  );
}
export default PageProfil;
