import React from "react";
import { Link } from "react-router-dom";
import "./Identification.css";

function Identification() {
  return (
    //   adding the input to login
    <div className="form-identification rounded-lg mt-4 mb-6 flex flex-col w-80 flex items-center ">
      <input
        className="input-indentification border-solid border-2 mt-8 rounded-full"
        type="text"
        placeholder="Nom"
      />
      <input
        className=" input-indentification border-solid border-2 mt-2 rounded-full"
        type="text"
        placeholder="Prénom"
      />
      <input
        className=" input-indentification border-solid border-2 mt-2 rounded-full"
        type="email"
        placeholder="Email"
      />
      <Link to="/Profil">
        <button
          id="button-indentification"
          className=" mt-4 mb-5 rounded-full "
          type="button"
        >
          Me connecter
        </button>
      </Link>
    </div>
  );
}

export default Identification;
