/**
 *  options de titrage du graphique
 */
const options = {
  responsive: true,
  scales: {
    x: {
      // configuration de l'axe horizontal
      ticks: {
        // For a category axis, the val is the index so the lookup via getLabelForValue is needed
        callback: function (val, index) {
          // affichage d'une année, une colonne sur deux.
          return index % 3 === 0 ? this.getLabelForValue(val) : "";
        },
      },
      display: true,
      title: {
        display: false,
        text: "Année",
      },
    },
    y: {
      // configuration de l'axe vertical
      ticks: {
        callback: function (value) {
          //  callback: function (value, index, ticks) {
          return `${value}`;
        },
      },
      display: true,
      title: {
        // titre de l'axe vertical
        display: true,
        text: `Concentration de CO\u2082 en ppm`,
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: ``, // titre par défaut, remplacé via prepaConfig
    },
  },
};

/**
 *  réglages des axes du tableau
 */
const dataModel = {
  labels: [],
  datasets: [
    {
      label: "Valeurs quotidiennes (cycle)", // titre du premier graphique
      data: [],
      pointStyle: "dash",
      radius: 0.1,
      borderColor: "rgba(136, 78, 160,0.8)",
      backgroundColor: "rgba(136, 78, 160, 0.8)",
    },
    {
      label: "Tendance moyenne (évolution)", // titre du second graphique
      data: [],
      pointStyle: "dash",
      borderColor: "rgba(52,73,94, 0.8)", // "rgb(93, 109, 126)",
      backgroundColor: "rgba(52, 73, 94, 0.8)",
    },
  ],
};

const apiOnline = "https://global-warming.org/api/co2-api";
const apiLocale = "./datasets/co2.json";

const reglages = { options, dataModel, apiOnline, apiLocale };

export default reglages;
