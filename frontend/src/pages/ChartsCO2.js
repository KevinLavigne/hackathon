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

import reglages from "../options/options_CO2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ChartsCO2() {
  const [dataSet, setDataSet] = useState(reglages.dataModel);
  const prepaConfig = (data) => {
    // légendage
    reglages.options.plugins.title.text = `Concentration de Dioxyde de Carbone dans l'atmosphère (de ${
      data[0].year
    } à ${data[data.length - 1].year})`;
  };

  /**
   * préparation des données de l'API
   * @param {array} data
   */
  const prepareDataSet = (data) => {
    /** Récupération du jeu de dates */
    const dataSetProv = { ...dataSet };
    data.forEach((el) => {
      dataSetProv.labels.push(el.year);
      dataSetProv.datasets[0].data.push(el.cycle);
      dataSetProv.datasets[1].data.push(el.trend);
    });
    setDataSet(dataSetProv);
  };

  /**
   * fetch des données de l'API
   * En cas d'erreur, lecture du json local
   * @param {api} url
   * @param {function} callback
   */
  const getStaticData = (url, callback) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        prepareDataSet(data.co2);
        prepaConfig(data.co2);
      })
      // ternaire de fetch des données locales en cas d'erreur
      .catch((err) =>
        callback ? callback(reglages.apiLocale) : console.error(err)
      );
  };

  useEffect(() => {
    getStaticData(reglages.apiOnline, getStaticData);
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
export default ChartsCO2;
