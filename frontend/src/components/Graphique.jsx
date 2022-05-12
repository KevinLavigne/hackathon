/* eslint-disable */

import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import jason from "../data/users.json";
import reglages from "../data/optionsGraphique";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Graphique() {
  const [dataSet, setDataSet] = useState(reglages.dataModel);
  const prepaConfig = (data) => {
    // légendage
    reglages.options.plugins.title.text = `Vos engagements depuis le ${data.begin}`;
  };

  /**
   * préparation des données de l'API
   * @param {array} data
   */
  const prepareDataSet = (data, moyenne) => {
    /** Récupération du jeu de données */
    const dataSetProv = { ...dataSet };
    console.warn();
    data.forEach((el) => {
      dataSetProv.labels.push(el.week);
      dataSetProv.datasets[0].data.push(el.taken.length);
    });
    moyenne.forEach((el) => {
      dataSetProv.datasets[1].data.push(el);
    });
    setDataSet(dataSetProv);
  };

  /**
   * récupération des données du json
   * @param {jason} json
   */
  const getStaticData = () => {
    /**
     * calcul de la plus grande quantité de semaines pour un user
     */
    let maxWeeks = -10;
    for (let us = 0; us < jason.user.length - 1; us++) {
      maxWeeks = Math.max(parseInt(jason.user[us].actions.length), maxWeeks);
    }

    const userParSemaine = new Array(maxWeeks).fill(0);
    const totalParSemaine = new Array(maxWeeks).fill(0);

    for (let us = 0; us < jason.user.length - 1; us++) {
      // users
      for (let week = 0; week < jason.user[us].actions.length; week++) {
        totalParSemaine[week] =
          parseInt(totalParSemaine[week]) +
          parseInt(jason.user[us].actions[week].taken.length);

        userParSemaine[week] = parseInt(userParSemaine[week]) + 1;
      }
    }
    const moyenne = new Array(maxWeeks);
    for (let sem = 0; sem < totalParSemaine.length; sem++) {
      moyenne[sem] = (totalParSemaine[sem] / userParSemaine[sem]).toFixed(2);
    }

    const activUser = 1;
    /**
     * données de l'utilisateur
     */
    prepareDataSet(jason.user[activUser].actions, moyenne); //
    prepaConfig(jason.user[activUser]);
  };

  useEffect(() => {
    getStaticData(jason);
  }, []);
  return (
    // affichage du composant graphique
    <div className="graph_render_dd">
      {dataSet.labels.length > 0 && (
        <Line data={dataSet} options={reglages.options} />
      )}
    </div>
  );
}
export default Graphique;
