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

function ActionCard({ action }) {
  return (
    <div className="action-card-container">
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
            <p>{action.points}</p>
          </div>
          <div className="action-card-text">
            <p>{action.description}</p>
          </div>
          <div className="action-card-validate">
            <FaCheck />
          </div>
        </div>
      </details>
    </div>
  );
}

export default ActionCard;
