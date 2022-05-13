import Identification from "../components/Identification";
import Concept from "../components/Concept";

export default function Home() {
  return (
    <div className="home-page flex justify-center flex items-center flex flex-wrap">
      <div>
        <Concept />
      </div>
      <div>
        <Identification />
      </div>
    </div>
  );
}
