import React from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaCheck,
  FaPumpMedical,
  FaCar,
  FaHome,
} from "react-icons/fa";
import { GiKnifeFork, GiWaterRecycling, GiElectric } from "react-icons/gi";
import { MdWork, MdFamilyRestroom, MdComputer } from "react-icons/md";
import ExportContext from "../contexts/Context";

function ActionCard({ action }) {
  const { actionsList, setActionsList } = React.useContext(
    ExportContext.Context
  );

  const [classCheck, setClassCheck] = React.useState("block");
  const handleOnClickValidate = () => {
    setClassCheck("none");
    console.warn(classCheck);
    const actionTemp = action;
    actionTemp.fait = "TRUE";
    React.useEffect(() => {
      setActionsList(actionsList.splice(actionTemp.id - 1, 1, actionTemp));
    }, []);
  };

  return (
    <div
      className={
        action.fait === "TRUE"
          ? "action-card-container-fait"
          : "action-card-container"
      }
    >
      <details>
        <summary className="action-card-summary">
          <div className="action-card-icon">
            {action.category === "Domicile" ? <FaHome /> : null}
            {action.category === "Nourriture" ? <GiKnifeFork /> : null}
            {action.category === "Soin" ? <FaPumpMedical /> : null}
            {action.category === "Travail" ? <MdWork /> : null}
            {action.category === "Famille" ? <MdFamilyRestroom /> : null}
            {action.category === "Eau" ? <GiWaterRecycling /> : null}
            {action.category === "Electricite" ? <GiElectric /> : null}
            {action.category === "Transport" ? <FaCar /> : null}
            {action.category === "Numerique" ? <MdComputer /> : null}
          </div>
          <div className="action-card-titre">
            <h2>{action.name}</h2>
          </div>
          <div>
            <FaAngleDown className="show arrow" />
            <FaAngleUp className="hide arrow" />
          </div>
        </summary>
        <div className="action-card-description">
          <div className="action-card-point">
            <p>{action.points} pts</p>
          </div>
          <div className="action-card-text">
            <p>{action.description}</p>
          </div>
          <div
            className="action-card-validate"
            onClick={() => handleOnClickValidate()}
            aria-hidden="true"
          >
            <FaCheck className={action.fait === "TRUE" ? "none" : "block"} />
          </div>
        </div>
      </details>
    </div>
  );
}

export default ActionCard;
