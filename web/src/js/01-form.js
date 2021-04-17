"use strict";

const formElement = document.querySelector(".js-form");
const inputElement = document.querySelectorAll(".js-input");

const updateAllInputs = (ev) => {
  saveDataInLS();
  if (ev.currentTarget.name === "name") {
    const error = verifyName(ev.currentTarget.value);

    document.querySelector(".").innerHTML = error;
  }
};

const inputTextElements = document.querySelectorAll(".js-input-text");

for (const inputTextElement of inputTextElements) {
  inputTextElement.addEventListener("change", updateAllInputs);
}

const hadleForm = (ev) => {
  ev.preventDefault();
};

formElement.addEventListener("submit", hadleForm);
