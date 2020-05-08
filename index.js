//const { getCode, getName } = require("country-list");
const axios = require("axios");

$monPays = "Be";
$annee = "2020";
//console.log(getName("BE")); //  Islande
//console.log(getCode($monPays)); //  EST*/

vacance();
async function vacance() {
  try {
    const reponse = await axios.get(
      "https://date.nager.at/api/v2/publicholidays/" + $annee + "/" + $monPays
    );
    for (const test of reponse.data) {
      console.log(test.name + " " + test.date);
    }
  } catch (error) {
    console.error(error);
  }
}
