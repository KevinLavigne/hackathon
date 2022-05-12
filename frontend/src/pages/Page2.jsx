import React from "react";
import ActionCard from "../components/ActionCard";
import ConvertGoogleSheet from "../services/ConvertGoogleSheet";

function Page2() {
  const [selectedCategory, setselectedCategory] = React.useState("---");
  const actions = ConvertGoogleSheet(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTsY9ig9iBPQKlyIXHq0bPzodjWiqdcp4WSIIcxAGtEJ-l4hJsIaoIiH_Tx4TUyFyoHviWrfpS7Wbs2/pub?output=csv"
  );
  // const [pg2, setPg2] = useState([]);
  // console.warn(`${pg2} ${setPg2}`);

  console.warn(actions[0]);
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

  const handleOnChangeCategoryList = (e) => {
    setselectedCategory(e.target.value);
  };

  return (
    <div>
      <div>Page2</div>
      <div className="page-action-selecteur">
        <form className="page-action-form">
          <label htmlFor="category-select">
            Catégorie :{" "}
            <select
              id="category-select"
              onChange={(e) => handleOnChangeCategoryList(e)}
            >
              <option value="---">---</option>
              {CategoryList.map((category) => {
                return <option value={category}>{category}</option>;
              })}
            </select>
          </label>
        </form>
      </div>
      {actions.length > 0 &&
        actions
          .filter(
            (action) =>
              selectedCategory === "---" || action.category === selectedCategory
          )
          .map((action) => <ActionCard action={action} />)}
    </div>
  );
}
export default Page2;
