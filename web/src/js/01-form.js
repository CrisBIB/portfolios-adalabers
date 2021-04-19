"use strict";

const formElement = document.querySelector(".js-form");
const inputElements = document.querySelectorAll(".js-input");

const hadleForm = (ev) => {
  ev.preventDefault();
};

formElement.addEventListener("submit", hadleForm);

const handleInputs = (ev) => {
  const inputValue = ev.currentTarget.value;
  console.log(inputValue);
  saveDataInLS();
  /*   if (ev.currentTarget.name === "name") {
    const error = verifyName(ev.currentTarget.value);

    document.querySelector(".").innerHTML = error;
  } */
};
const updateAllInputs = () => {
  console.log(inputElements);
  for (const inputElement of inputElements) {
    inputElement.addEventListener("change", handleInputs);
  }
};
