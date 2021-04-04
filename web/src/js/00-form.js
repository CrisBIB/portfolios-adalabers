"use strict";

const formElement = document.querySelector(".js-form");
const inputElement = document.querySelector(".js-input");
const buttonElement = document.querySelector(".js-button");

const hadleform = (ev) => {
  ev.preventDefault();
};

formElement.addEventListener("submit", hadleform);
