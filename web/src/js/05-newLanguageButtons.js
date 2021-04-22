"use strict";

const addButtonElement = document.querySelector(".js-plusButton");
const addLanguageElement = document.querySelector(".js-addLanguage");
const newLanguagesContainer = document.querySelector(
  ".js-newLanguagesContainer"
);
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
  newLanguagesContainer.innerHTML += `<p data-id=${value} class="mainAdalabers__form--newLanguageLabel js-newLanguages">${value}<i class="fa fa-times js-delete" aria-hidden="true"></i></p>`;

  const newLanguageElements = document.querySelectorAll(".js-newLanguages");

  addNewLanguages(value);
  deleteNewLanguage(newLanguageElements);
  saveDataInLS();
};

const addNewLanguages = (newLanguageElement) => {
  if (!newLanguagesArray.includes(newLanguageElement)) {
    newLanguagesArray.push(newLanguageElement);
  }
  return newLanguagesArray;
};

const deleteNewLanguage = (newLanguageElements) => {
  for (const newLanguageElement of newLanguageElements) {
    newLanguageElement.addEventListener("click", handleDelete);
  }
};

const handleDelete = (ev) => {
  const newLanguageElement = ev.currentTarget;
  const newLanguageText = ev.currentTarget.innerText;

  newLanguageElement.classList.add("delete-language");

  if (newLanguagesArray.includes(newLanguageText)) {
    const indexLanguage = newLanguagesArray.indexOf(newLanguageText);
    newLanguagesArray.splice(indexLanguage, 1);
  }
  saveDataInLS();
};

addButtonElement.addEventListener("click", handlePlusButton);
