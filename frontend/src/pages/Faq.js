import { Helmet } from "react-helmet";
import FaqPage from "../components/FaqPage";

export default function FaqList() {
  return (
    <div className="foireAuxQuestions">
      <Helmet>
        <title> 3arth keeper | FAQ </title>
      </Helmet>
      <FaqPage />
    </div>
  );
}
