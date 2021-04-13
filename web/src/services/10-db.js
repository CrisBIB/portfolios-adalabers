"use strict";

// Global var
let cards = [];

// Call to dataBase
const getDataFromDb = () => {
  fetch("../../../server/src/data/portfolios.json")
    .then((response) => response.json())
    .then((data) => {
      cards = data;
      paintCardsInResults();
    });
};
