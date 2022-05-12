// import { useState } from "react";
import avatar from "../assets/Avatar_6.png";

function PageProfil() {
  // const [pg1, setPg1] = useState([]);
  // console.warn(`${pg1} ${setPg1}`);
  return (
    <div className="backgroundcolor-4 flex flex-col items-center p-10">
      <h1 className="color-1 m-7 font-extrabold text-7xl">TON PROFIL</h1>
      <img src={avatar} alt="avatar par défaut" className="avatar" />
      <div className="flex flex-row color-1 m-7 ">
        <p className="text-lg">DUPONT_</p>
        <p className="text-lg">Damien</p>
      </div>
      <div className="backgroundcolor-3 color-1 drop-shadow-2xl w-full h-96 m-100 p-20 flex flex-col items-center text-lg">
        <h2 className="font-bold">GRAPHIQUE DE DAMIEN</h2>
        {/* <div><Graphique/></div> */}
      </div>
      <div className="backgroundcolor-3 drop-shadow-2xl color-1 w-full h-96 m-100 p-20 flex flex-col items-center text-lg ">
        <h2 className="font-bold">MES ACTIONS EN COURS</h2>
        <ul>
          <li>action 1</li>
          <li>action 2</li>
          <li>action 3</li>
          <li>action 4</li>
          <li>action 5</li>
        </ul>
      </div>
      <button
        type="submit"
        className="p-10 m-100 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-l px-20 py-10 text-center mr-2 mb-2"
      >
        Mon niveau/Mon score
      </button>
    </div>
  );
}
export default PageProfil;
