"use strict";

const plusButtonElement = document.querySelector(".js-plusButton");
const newLanguageElement = document.querySelector(".js-newLanguage");

const newCheckBoxElement = document.querySelector(".js-newCheckBox");

const handlePlusButton = (ev) => {
  ev.preventDefault();
  newLanguageElement.innerHTML = `<input class="js-inputNewLanguage" placeholder="Ej. TypeScript">`;

  const inputElement = document.querySelector(".js-inputNewLanguage");

  const handleInput = (ev) => {
    ev.preventDefault();

    newCheckBoxElement.innerHTML += `<label for="${inputElement.value}" class="mainAdalabers__form--checkLabel">${inputElement.value}</label>`;
    newCheckBoxElement.innerHTML += `<input type="checkbox" id="${inputElement.value}"
    class="js-input js-input-languages  mainAdalabers__form--input form-check-input js-newLanguage"
    name="languages" value=${inputElement.value} checked>`;
    inputElement.value = "";
    const valueNewLanguage = document.querySelector(".js-newLanguage").value;
    saveDataInLS();
  };
  inputElement.addEventListener("change", handleInput);
};

plusButtonElement.addEventListener("click", handlePlusButton);
