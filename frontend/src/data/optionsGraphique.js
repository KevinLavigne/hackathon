/**
 *  options de titrage du graphique
 */

// import jason from "./data/users.json";

const options = {
  responsive: true,
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
        text: `toto`,
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
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
      label: "Votre écoScore", // titre du premier graphique
      data: [],
      pointStyle: "dash",
      radius: 0.1,
      borderColor: "rgb(104, 163, 87)",
      backgroundColor: "rgb(104, 163, 87)",
    },
    {
      label: "Moyenne des utilisateurs", // titre du second graphique
      data: [],
      pointStyle: "dash",
      borderColor: "rgb(50, 150, 93)", // "rgb(93, 109, 126)",
      backgroundColor: "rgb(50, 150, 93)",
    },
  ],
};

const apiLocale = "./users.json";

const reglages = { options, dataModel, apiLocale };

export default reglages;
