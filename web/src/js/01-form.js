"use strict";

const formElement = document.querySelector(".js-form");
const inputElements = document.querySelectorAll(".js-input");

const hadleForm = (ev) => {
  ev.preventDefault();
};

formElement.addEventListener("submit", hadleForm);

const handleInputs = (ev) => {
  saveDataInLS();

  const inputName = ev.currentTarget.name;
  const inputValue = ev.currentTarget.value;
  if (inputName === "name") {
    const error = verifyName(inputValue);
    document.querySelector(".js.error").innerHTML = error;
  }
};
const updateAllInputs = () => {
  for (const inputElement of inputElements) {
    inputElement.addEventListener("change", handleInputs);
  }
};
const verifyName = (value) => {};
