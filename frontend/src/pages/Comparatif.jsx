import { useContext } from "react";

import ProfileCard from "../components/ProfileCard";
import ExportContext from "../contexts/Context";
import avatar6 from "../assets/avatar6.png";
import avatar2 from "../assets/avatar2.png";
import avatar1 from "../assets/avatar1.png";
import avatar5 from "../assets/avatar5.png";
import avatar from "../assets/avatar.jpg";

function Comparatif() {
  const imgTable = [avatar6, avatar2, avatar5, avatar1, avatar];
  const { users } = useContext(ExportContext.Context);

  return (
    <div className="bg-color-comparatif">
      <h1 className="text-3xl font-bold text-center">Comparatif</h1>
      <div className="flex pt-5 flex-row flex-wrap justify-around content-center items-center">
        {users.length > 0 &&
          users.map((profile, index) => (
            <ProfileCard
              avatar={imgTable[index]}
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
