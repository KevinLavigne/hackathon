import React from "react";
import axios from "axios";
import papa from "papaparse";

// La fonction ConvertGoogleSheet permet de renvoyer un object json
// depuis un googlesheet.
// On doit passer l'url du fichier googlesheet au format csv

const ConvertGoogleSheet = (googleUrl) => {
  const [jsonFile, setJsonFile] = React.useState({});

  const prepareData = (data) => {
    const json = data.map((line, index) => {
      if (index > 0) {
        let obj = {};
        data[0].forEach((key, j) => {
          obj = { ...obj, [key]: line[j] };
        });
        return obj;
      }
      return {};
    });
    return json.slice(1);
  };

  React.useEffect(() => {
    axios
      .get(googleUrl)
      .then((response) => {
        if (response.status === 404) {
          console.warn("erreur 404 détectée");
        } else if (response.status === 504) {
          console.warn("erreur 504 détectée");
        }
        return response.data;
      })
      .then((text) => papa.parse(text))
      .then((data) => prepareData(data.data))
      .then((jsonResult) => setJsonFile(jsonResult))
      .catch((error) => {
        console.warn(error);
      });
  }, []);
  return jsonFile;
};

export default ConvertGoogleSheet;
