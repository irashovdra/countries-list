import countriesTemplate from "../templates/countries.hbs";
import countries from "../data-countries.json";
const body = document.querySelector("body");

const countriesList = countriesTemplate({ countries });

body.insertAdjacentHTML("beforeend", countriesList);
