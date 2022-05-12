import React from "react";
import "./Concept.css";

function Concept() {
  return (
    <div className=" border-concept rounded-lg h-60 mt-6 w-80 ">
      <h1 className="font-bold flex justify-center mt-4 ">Notre concept</h1>
      <p className="text-center mt-2 pl-2 pr-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
        lorem ut libero malesuada feugiat. Ut ac ipsum eget quam volutpat
        egestas. Duis ultricies pharetra magna.
      </p>
      <p className="text-center pl-2 pr-2">
        Commences par un petit geste et la planète te remerciera 🌎
      </p>
    </div>
  );
}

export default Concept;
