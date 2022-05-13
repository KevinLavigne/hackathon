/**
 *  options de titrage du graphique
 */

// import jason from "./data/users.json";

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      // configuration de l'axe horizontal
      ticks: {
        // For a category axis, the val is the index so the lookup via getLabelForValue is needed
        callback: function (val, index) {
          // affichage d'une année, une colonne sur deux.
          return this.getLabelForValue(val);
        },
      },
      display: true,
      title: {
        color: "rgb(250,250,250)",
        display: true,
        text: "Semaines",
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
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      labels: { color: "rgb(250,250,250)" },
      position: "top",
    },
    title: {
      display: true,
      color: "rgb(255,255,255)",
      text: `titre`, // titre par défaut, remplacé via prepaConfig
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
      label: "Votre écoScore",
      labelColor: "rgb(255,255,255)", // titre du premier graphique
      data: [],
      fill: true,
      pointStyle: "circle",
      radius: 1,
      tension: 0.1,
      borderWidth: 2,
      borderColor: "rgb(255, 120, 0)",
      backgroundColor: "rgb(50, 150, 93)",
    },
    {
      label: "Moyenne des utilisateurs", // titre du second graphique
      data: [],
      pointStyle: "circle",
      radius: 1,
      tension: 0.1,
      borderWidth: 2,
      fill: true,
      borderColor: "rgb(150,255,150)", // "rgb(93, 109, 126)",
      backgroundColor: "rgb(50, 150, 93)",
    },
  ],
};

const apiLocale = "./users.json";

const reglages = { options, dataModel, apiLocale };

export default reglages;
