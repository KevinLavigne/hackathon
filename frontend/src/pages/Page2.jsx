import React from "react";
import ActionCard from "../components/ActionCard";
// import ConvertGoogleSheet from "../services/ConvertGoogleSheet";
import ExportContext from "../contexts/Context";

function Page2() {
  const [selectedCategory, setselectedCategory] = React.useState("Tous");
  const [aFaire, setaFaire] = React.useState("TRUE");
  // const [pg2, setPg2] = useState([]);
  // console.warn(`${pg2} ${setPg2}`);
  const { actionsList } = React.useContext(ExportContext.Context);
  /* const actions = ConvertGoogleSheet(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTsY9ig9iBPQKlyIXHq0bPzodjWiqdcp4WSIIcxAGtEJ-l4hJsIaoIiH_Tx4TUyFyoHviWrfpS7Wbs2/pub?output=csv"
  ); 
  setActionsList(actions); */

  const CategoryList = [
    "Domicile",
    "Nourriture",
    "Soin",
    "Travail",
    "Famille",
    "Eau",
    "Electricite",
    "Transport",
    "Numerique",
  ];

  const ValideList = ["Non validé"];

  const handleOnChangeCategoryList = (e) => {
    setselectedCategory(e.target.value);
  };

  const handleOnChangeValideList = (e) => {
    setaFaire(e.target.value === "Tous" ? "TRUE" : "FALSE");
  };
  return (
    <div>
      <div>Page2</div>
      <p>{actionsList[0].fait}</p>
      <div className="page-action-selecteur">
        <div>
          <form className="page-action-form">
            <label htmlFor="category-select">
              <select
                id="category-select"
                onChange={(e) => handleOnChangeCategoryList(e)}
              >
                <option value="Tous" selected>
                  Toutes les catégories
                </option>
                {CategoryList.map((category) => {
                  return <option value={category}>{category}</option>;
                })}
              </select>
            </label>
          </form>
        </div>
        <div>
          <form className="page-action-form">
            <label htmlFor="category-select">
              <select
                id="category-select"
                onChange={(e) => handleOnChangeValideList(e)}
              >
                <option value="Tous" selected>
                  Tous
                </option>
                {ValideList.map((category) => {
                  return <option value={category}>{category}</option>;
                })}
              </select>
            </label>
          </form>
        </div>
      </div>
      {actionsList.length > 0 &&
        actionsList
          .filter((action) =>
            aFaire === "TRUE" ? true : action.fait === "FALSE"
          )
          .filter(
            (action) =>
              selectedCategory === "Tous" ||
              action.category === selectedCategory
          )
          .map((action) => <ActionCard action={action} />)}
    </div>
  );
}
export default Page2;
