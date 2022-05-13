/* eslint-disable */
import ReactCardFlip from "react-card-flip";
import React, { useState } from "react";
import "./Concept.css";
import photoHome from "../assets/picenvironment.jpg";

/* eslint-disable */
function Concept() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <div className="flex justify-center flex items-center flex-col">
        <img
          className=" border-concept rounded-lg h-60 mt-6 w-80 flex justify-center flex items-center flex-col "
          src={photoHome}
          alt="logo du site"
        />
        <button
          id="button-concept"
          className=" rounded-full mt-6"
          type="button"
          onClick={handleClick}
        >
          Voir le concept
        </button>
      </div>
      <div className=" border-concept rounded-lg h-60 mt-6 w-80 flex justify-center flex items-center flex-col">
        <p className="text-center mt-2 pl-2 pr-2">
          Si tu tiens cette application entre les mains, c est certainement
          parce que tu participes au défi des petits gestes pour la planète.
          Afin de t aider à réduire ton empreinte carbone, nous t avons concocté
          une liste de 50 actions à réaliser au quotidien pour rendre la planète
          plus verte que le bonhomme de Cetelem.
        </p>
        <p className="text-center pl-2 pr-2">
          Commence dès maintenant et la planète te remerciera 🌎
        </p>
        <button
          id="button-concept-2"
          className=" rounded-full mt-2"
          type="button"
          onClick={handleClick}
        >
          Retour
        </button>
      </div>
    </ReactCardFlip>
  );
}
export default Concept;
