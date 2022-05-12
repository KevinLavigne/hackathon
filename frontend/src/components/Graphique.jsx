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
  const prepareDataSet = (data) => {
    /** Récupération du jeu de dates */
    const dataSetProv = { ...dataSet };
    data.forEach((el) => {
      dataSetProv.labels.push(el.week);
      dataSetProv.datasets[0].data.push(el.taken.length);
    });
    setDataSet(dataSetProv);
  };

  /**
   * fetch des données de l'API
   * En cas d'erreur, lecture du json local
   * @param {api} url
   * @param {function} callback
   */
  const getStaticData = (jason) => {
    const activUser = 1;
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    prepareDataSet(jason.user[activUser].actions);
    prepaConfig(jason.user[activUser]);
    // })
    // ternaire de fetch des données locales en cas d'erreur
    // .catch((err) =>
    //   callback ? callback(reglages.apiLocale) : console.error(err)
    // );
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
