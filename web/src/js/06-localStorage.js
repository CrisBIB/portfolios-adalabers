"use strict";

const languageElements = document.querySelectorAll(".js-input-languages");

const employedElement = document.querySelector(".js-input-employed");

const getUserData = () => {
  return {
    nick_name: document.querySelector(".js-input-name").value,
    current_job: document.querySelector(".js-input-currentJob").value,
    previous_job: document.querySelector(".js-input-previousJob").value,
    power: document.querySelector(".js-input-power").value,
    promo: document.querySelector(".js-input-promo").value,
    programming_languages: languagesChecked(),
    more_programming_languages: newLanguagesArray,
    employed: document.querySelector(".js-input-employed").checked,
    photo: photo,
    background: background,
    portfolio: document.querySelector(".js-input-portfolio").value,
  };
};

function languagesChecked() {
  let languages = [];
  for (const languageElement of languageElements) {
    if (languageElement.checked) {
      languages.push(languageElement.value);
    }
  }
  return languages;
}

const saveDataInLS = () => {
  const userData = getUserData();
  const userDataToString = JSON.stringify(userData);
  localStorage.setItem("userData", userDataToString);
};

const getDataFromLS = () => {
  const userDataInString = localStorage.getItem("userData");
  if (userDataInString !== null) {
    const userData = JSON.parse(userDataInString);
    document.querySelector(".js-input-name").value = userData.nick_name;
    document.querySelector(".js-input-currentJob").value = userData.current_job;
    document.querySelector(".js-input-previousJob").value =
      userData.previous_job;
    document.querySelector(".js-input-power").value = userData.power;
    document.querySelector(".js-input-promo").value = userData.promo;
    for (const languageElement of languageElements) {
      languageElement.checked = userData.programming_languages.includes(
        languageElement.value
      );
    }
    for (const language of userData.more_programming_languages) {
      paintNewLanguages(language);
    }
    if (userData.employed) {
      employedElement.checked = true;
    }
    photo = userData.photo;
    background = userData.background;
    document.querySelector(".js-input-portfolio").value = userData.portfolio;

    updateAllInputs();
    updatePhoto();
    updateBackground();
  }
};
