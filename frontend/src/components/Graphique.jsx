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
    data.forEach((el) => {
      dataSetProv.labels.push(el.week);
      dataSetProv.datasets[0].data.push(el.taken.length);
      dataSetProv.datasets[1].data.push(moyenne[el[2]]);
    });
    setDataSet(dataSetProv);
  };

  /**
   * récupération des données du json
   * @param {jason} json
   */
  const getStaticData = (jason) => {
    /**
     * données moyennes des utilisateurs   dataset[(un par un)].data[week]
     */
    const moyenne = [0];
    const userParSemaine = [];
    const totalParSemaine = [];
    for (let us = 0; us < jason.user.length - 1; us++) {
      // users
      for (let week = 0; week < jason.user[us].actions.length; week++) {
        userParSemaine.push([0]);
        totalParSemaine.push([0]);
        // console.warn(totalParSemaine[week]);
        totalParSemaine[week] =
          parseInt(totalParSemaine[week]) +
          parseInt(jason.user[us].actions[week].taken.length);
        // );
        userParSemaine[week] = parseInt(userParSemaine[week]) + 1;
        console.warn(typeof userParSemaine[week]);
        typeof userParSemaine[week] === "array" ? userParSemaine.pop() : "";
        // console.warn(
        //   `user: ${us}, semaine: ${week}, taken: ${jason.user[us].actions[week].taken.length}`
        // );
        // console.warn(`taken ${jason.user[us].actions[week].taken.length}`);

        // console.warn(
        //   `${jason.user[i].userFirstName}, week ${week}: ${jason.user[i].actions[week].taken.length}`
        // );
        // console.warn(moyenne[week[0]]);
        // moyenne[week[0]] += jason.user[i].actions[week].taken.length;

        // moyenne[week[1]]++;
        // console.warn(`${moyenne[week[0]]}/${moyenne[week[1]]}`);
        //ajoute taken.length à moyenne[week[0]] && ajoute 1 à moyenne[week[1]]  moyenne[semaine[0]]= total de tous les utilisateurs   [1]  nombre d'uitlisateurs
        // console.warn(
        //   `total semaine ${week}: ${totalParSemaine[week].toString()}`
        // );
        // console.warn(`user ${us} semaine ${week}: ${userParSemaine[week]}`);
      }
    }
    // console.warn(userParSemaine);

    // console.warn(totalParSemaine);
    const moyenneParSemaine = [0];
    for (let sem = 0; sem < totalParSemaine.length; sem++) {
      moyenneParSemaine.push([0]);
      moyenneParSemaine[sem] = (
        totalParSemaine[sem] / userParSemaine[sem]
      ).toFixed(2);
      // console.warn(moyenneParSemaine[sem]);
      // moyenne[j[2]] = (moyenne[j[0]] / moyenne[j[1]]).toFixed(2);
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
