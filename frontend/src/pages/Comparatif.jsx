import { useContext } from "react";

import ProfileCard from "../components/ProfileCard";
import ExportContext from "../contexts/Context";

function Comparatif() {
  const { users } = useContext(ExportContext.Context);

  return (
    <div className="bg-color-comparatif">
      <h1 className="text-3xl font-bold text-center">Comparatif</h1>
      <div className="flex pt-5 flex-row flex-wrap justify-around content-center items-center">
        {users.length > 0 &&
          users.map((profile) => (
            <ProfileCard
              firstname={profile.userFirstName}
              inscription={profile.begin}
              score={profile.actions}
            />
          ))}
      </div>
    </div>
  );
}
export default Comparatif;
