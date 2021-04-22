"use strict";

const plusButtonElement = document.querySelector(".js-plusButton");
const addLanguageElement = document.querySelector(".js-addLanguage");
const newLanguagesContainer = document.querySelector(".js-newLanguages");
let newLanguagesArray = [];

const handlePlusButton = (ev) => {
  ev.preventDefault();

  addLanguageElement.innerHTML = `<input class="js-inputNewLanguage mainAdalabers__form--input form-control" placeholder="Ej. TypeScript">`;

  const inputElement = document.querySelector(".js-inputNewLanguage");

  inputElement.addEventListener("change", handleInput);
};

const handleInput = (ev) => {
  const inputValue = ev.currentTarget.value;
  ev.preventDefault();
  paintNewLanguages(inputValue);
};

const paintNewLanguages = (value) => {
  newLanguagesContainer.innerHTML += `<p class="mainAdalabers__form--newLanguageLabel js-newLanguages">${value}<i class="fa fa-times" aria-hidden="true"></i></p>`;
  addNewLanguages(value);
  saveDataInLS();
};

const addNewLanguages = (newLanguageElement) => {
  if (!newLanguagesArray.includes(newLanguageElement)) {
    newLanguagesArray.push(newLanguageElement);
  }
  return newLanguagesArray;
};

plusButtonElement.addEventListener("click", handlePlusButton);
