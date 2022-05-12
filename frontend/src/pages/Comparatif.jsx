import { useState } from "react";

import ProfileCard from "@components/ProfileCard";

function Comparatif() {
  const [array, setPg3] = useState([
    {
      userFirstName: "Damien",
      userLastName: "Dupont",
      inscription: "4/3/2020",
      avatar:
        "https://pbs.twimg.com/profile_images/1166813568316137472/gu2qHXFB_400x400.jpg",
      score: "5",
    },
    {
      userFirstName: "Damien",
      userLastName: "Dupont",
      inscription: "4/3/2020",
      avatar:
        "https://pbs.twimg.com/profile_images/1166813568316137472/gu2qHXFB_400x400.jpg",
      score: "5",
    },
    {
      userFirstName: "Damien",
      userLastName: "Dupont",
      inscription: "4/3/2020",
      avatar:
        "https://pbs.twimg.com/profile_images/1166813568316137472/gu2qHXFB_400x400.jpg",
      score: "5",
    },
    {
      userFirstName: "Damien",
      userLastName: "Dupont",
      inscription: "4/3/2020",
      avatar:
        "https://pbs.twimg.com/profile_images/1166813568316137472/gu2qHXFB_400x400.jpg",
      score: "5",
    },
    {
      userFirstName: "Damien",
      userLastName: "Dupont",
      inscription: "4/3/2020",
      avatar:
        "https://pbs.twimg.com/profile_images/1166813568316137472/gu2qHXFB_400x400.jpg",
      score: "5",
    },
  ]);
  {
    console.log(array);
  }
  return (
    <div className="bg-color-comparatif">
      <h1 className="text-3xl font-bold text-center">Comparatif</h1>
      <div className="flex pt-5 flex-row flex-wrap justify-around content-center items-center">
        {array.map((profile) => (
          <ProfileCard
            firstname={profile.firstname}
            lastname={profile.lastname}
            inscription={profile.inscription}
            avatar={profile.avatar}
            score={profile.score}
          />
        ))}
      </div>
    </div>
  );
}
export default Comparatif;
