import React from "react";
import "./Concept.css";

/* eslint-disable */
function Concept() {
  return (
    <div className=" border-concept rounded-lg h-60 mt-6 w-80 ">
      <h1 className="font-bold flex justify-center mt-2 ">Notre concept</h1>
      <p className="text-center mt-2 pl-2 pr-2">
        Si tu tiens cette application entre les mains, c'est certainement parce
        que tu participes au défi des petits gestes pour la planète. Afin de
        t'aider à réduire ton empreinte carbone, nous t'avons concocté une liste
        de 50 actions à réaliser au quotidien pour rendre la planète plus verte
        que le bonhomme de Cetelem.
      </p>
      <p className="text-center pl-2 pr-2">
        Commence dès maintenant et la planète te remerciera 🌎
      </p>
    </div>
  );
}

export default Concept;
