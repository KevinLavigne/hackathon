import { useState, useEffect } from "react";

import ProfileCard from "../components/ProfileCard";
import jason from "../data/users";

function Comparatif() {
  const [array, setPg3] = useState([{}]);

  useEffect(() => {
    setPg3(jason);
  }, []);
  return (
    <div className="bg-color-comparatif">
      <h1 className="text-3xl font-bold text-center">Comparatif</h1>
      <div className="flex pt-5 flex-row flex-wrap justify-around content-center items-center">
        {array.length > 0 &&
          array.map((profile) => (
            <ProfileCard
              firstname={profile.userFirstName}
              lastname={profile.userLastName}
              inscription={profile.begin}
              score={profile.actions}
            />
          ))}
      </div>
    </div>
  );
}
export default Comparatif;
