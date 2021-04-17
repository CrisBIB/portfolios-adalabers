"use strict";

const formElement = document.querySelector(".js-form");
const inputElements = document.querySelectorAll(".js-input");

const hadleForm = (ev) => {
  ev.preventDefault();
};

formElement.addEventListener("submit", hadleForm);

const handleInputs = (ev) => {
  saveDataInLS();
  /*   if (ev.currentTarget.name === "name") {
    const error = verifyName(ev.currentTarget.value);

    document.querySelector(".").innerHTML = error;
  } */
};
const updateAllInputs = () => {
  for (const inputElement of inputElements) {
    inputElement.addEventListener("change", handleInputs);
  }
};
